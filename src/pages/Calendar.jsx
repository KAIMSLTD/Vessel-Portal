
import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import clients from '../data/clients';
import { useNavigate } from 'react-router-dom';

const CalendarPage = () => {
  const navigate = useNavigate();
  const clientCode = localStorage.getItem('clientCode');
  const client = clients.find(c => c.code === clientCode);
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    if (!clientCode || !client) {
      navigate('/login');
    }
  }, [clientCode, client, navigate]);

  if (!client) return null;

  const allDates = client.vessels.flatMap(vessel =>
    Object.values(vessel.mges || {}).flatMap(mge =>
      (mge.overhaulDates || []).map(date => new Date(date.date))
    )
  );

  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      const match = allDates.some(d => d.toDateString() === date.toDateString());
      return match ? <div className="bg-blue-400 rounded-full w-2 h-2 mx-auto mt-1"></div> : null;
    }
    return null;
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4 text-blue-800">Overhauling Calendar</h2>
      <Calendar onChange={setSelectedDate} value={selectedDate} tileContent={tileContent} />
      <div className="mt-4 text-lg text-gray-700">Selected Date: {selectedDate.toDateString()}</div>
    </div>
  );
};

export default CalendarPage;
