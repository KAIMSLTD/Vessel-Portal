import React from "react";
import clients from "../data/clients";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const code = localStorage.getItem("clientCode");
  const currentClient = clients.find(c => c.code === code);

  if (!currentClient) return <div className="text-center mt-10 text-red-500">Client not found.</div>;

  return (
    <div className="min-h-screen bg-blue-50 p-4">
      <header className="bg-blue-700 text-white py-4 px-6 flex justify-between items-center rounded shadow">
        <img src="/logo.jpg" className="w-8 h-8" />
        <h1 className="text-xl font-bold">Welcome, {currentClient.name}.</h1>
        <div className="space-x-2">
          <button onClick={() => navigate("/dashboard")} className="bg-blue-500 px-3 py-1 rounded">Home</button>
          <button onClick={() => navigate("/calendar")} className="bg-blue-500 px-3 py-1 rounded">Calendar</button>
          <button onClick={() => navigate("/admin")} className="bg-blue-500 px-3 py-1 rounded">Admin Panel</button>
        </div>
      </header>
      <div className="mt-6 space-y-4">
        {currentClient.vessels.map((v, i) => (
          <div key={i} className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-bold text-blue-700">{v.name}</h2>
            {v.mges.map((mge, j) => (
              <div key={j} className="mt-2">
                <div>{mge.name}</div>
                <div className="text-sm text-gray-600">{mge.date}</div>
                <ul className="ml-4 list-disc">
                  {Object.entries(mge.categories).map(([category, files], k) => (
                    <li key={k}><strong>{category}</strong>: {files.length}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
