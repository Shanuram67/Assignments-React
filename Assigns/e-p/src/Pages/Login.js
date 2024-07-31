import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [tfiId, setTfiId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (tfiId && password) {
      navigate('/dashboard', { state: { tfiId } });
    } else {
      alert('Please enter both TFI ID and password');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-64 p-4 bg-white shadow rounded">
        <div className="mb-4">
          <label className="block mb-2">TFI ID</label>
          <input 
            type="text" 
            value={tfiId} 
            onChange={(e) => setTfiId(e.target.value)} 
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">TFI Password</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            className="w-full p-2 border rounded"
          />
        </div>
        <button 
          onClick={handleLogin} 
          className="w-full py-2 bg-blue-500 text-white rounded"
        >
          TFI ❤️‍🔥
        </button>
      </div>
    </div>
  );
};

export default Login;
