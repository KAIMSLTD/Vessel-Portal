import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [code, setCode] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const validCodes = ["ABC123", "ALPHA123"];
    if (validCodes.includes(code.toUpperCase())) {
      localStorage.setItem("clientCode", code.toUpperCase());
      navigate("/dashboard");
    } else {
      alert("Invalid client code");
    }
  };

  return (
    <div className="bg-blue-100 min-h-screen flex flex-col items-center justify-center">
      <img src="/logo.jpg" className="w-48 mb-6" alt="logo" />
      <input
        type="text"
        placeholder="Enter Client Code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="p-2 border border-gray-400 rounded mb-4"
      />
      <button
        onClick={handleLogin}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Login
      </button>
    </div>
  );
}
