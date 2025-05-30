
import React, { useEffect, useState } from 'react';
import clients from '../data/clients';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [expandedVessel, setExpandedVessel] = useState(null);
  const [expandedMGE, setExpandedMGE] = useState({});
  const navigate = useNavigate();
  const clientCode = localStorage.getItem('clientCode');
  const client = clients.find(c => c.code === clientCode);

  useEffect(() => {
    if (!clientCode || !client) {
      navigate('/login');
    }
  }, [clientCode, client, navigate]);

  if (!client) return null;

  const toggleVessel = (vesselName) => {
    setExpandedVessel(prev => (prev === vesselName ? null : vesselName));
  };

  const toggleMGE = (vesselName, mgeKey) => {
    const key = `${vesselName}-${mgeKey}`;
    setExpandedMGE(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="p-6 space-y-4 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center">
        <img src="/logo.jpg" alt="Logo" className="h-10" />
        <h2 className="text-2xl font-bold text-blue-800">Welcome, {client.name}</h2>
      </div>
      {client.vessels.map(vessel => (
        <div key={vessel.name} className="border rounded-lg p-4 bg-white shadow">
          <div onClick={() => toggleVessel(vessel.name)} className="cursor-pointer font-semibold text-lg text-blue-700 hover:underline">{vessel.name}</div>
          {expandedVessel === vessel.name && (
            <div className="ml-4 mt-2 space-y-2">
              {['MGE 1', 'MGE 2', 'MGE 3', 'MGE 4'].map(mgeKey => (
                <div key={mgeKey} className="border rounded-md p-3 bg-gray-50">
                  <div onClick={() => toggleMGE(vessel.name, mgeKey)} className="cursor-pointer text-blue-600 hover:underline">{mgeKey}</div>
                  {expandedMGE[`${vessel.name}-${mgeKey}`] && (
                    <div className="ml-4 mt-2">
                      {(vessel.mges?.[mgeKey]?.overhaulDates || []).map(dateEntry => (
                        <div key={dateEntry.date} className="mb-2">
                          <div className="font-medium text-gray-800">{dateEntry.date}</div>
                          <ul className="ml-4 list-disc text-sm text-gray-700">
                            <li>📄 Work Reports: {dateEntry.workReports.length}</li>
                            <li>📷 Photos: {dateEntry.photos.length}</li>
                            <li>💰 Commercial: {dateEntry.commercial.length}</li>
                            <li>📎 Documents: {dateEntry.documents.length}</li>
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
export default Dashboard;
