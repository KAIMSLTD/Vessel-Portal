import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Calendar from "./pages/Calendar.jsx";
import AdminPanel from "./pages/AdminPanel.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/admin" element={<AdminPanel />} />
    </Routes>
  );
}

export default App;
