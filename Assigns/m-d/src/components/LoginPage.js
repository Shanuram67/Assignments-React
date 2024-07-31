import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'shanu' && password === 'ai@12') {
      navigate('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-yellow-500 p-4">
      <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
        <img src="https://pbs.twimg.com/profile_images/1720466359166140416/lKy89Bvp_400x400.jpg" 
             alt="Icon" 
             className="mb-4 w-24 h-24 rounded-full" />
        <h2 className="text-2xl mb-4">Login</h2>
        <input
          type="text"
          placeholder="Username"
          className="input input-bordered w-full mb-4"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="input input-bordered w-full mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn btn-primary w-full mb-4" onClick={handleLogin}>Login</button>
        <button onClick={() => navigate('/forgot-password')} className="text-blue-500">Forgot Password?</button>
      </div>
    </div>
  );
};

export default LoginPage;
