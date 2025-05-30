
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import clients from '../data/clients';

const Login = () => {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const found = clients.find(c => c.code === code);
    if (found) {
      localStorage.setItem('clientCode', code);
      navigate('/dashboard');
    } else {
      setError('Invalid client code');
    }
  };

  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: 'url(/background.jpg)' }}>
      <div className="bg-white bg-opacity-90 p-8 rounded shadow-md w-96">
        <div className="flex justify-center mb-4">
          <img src="/logo.jpg" alt="Logo" className="h-16" />
        </div>
        <h2 className="text-xl font-bold mb-4 text-center text-blue-900">Client Login</h2>
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Enter client code"
          className="w-full p-2 border rounded mb-4"
        />
        <button onClick={handleLogin} className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800">Login</button>
        {error && <p className="mt-2 text-red-600 text-sm text-center">{error}</p>}
      </div>
    </div>
  );
};
export default Login;
