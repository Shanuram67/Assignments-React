import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const passwordPattern = /^(?=.*[a-z])(?=.*[@])(?=.*[0-9]).{5,}$/;
    if (passwordPattern.test(password)) {
      toast.success('Login Successful!');
      navigate('/dashboard');
    } else {
      toast.error('Invalid Password Format!');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-500 p-5  ">
      <img src="https://pbs.twimg.com/profile_images/1720466359166140416/lKy89Bvp_400x400.jpg" alt="Icon" className="mb-4 w-40 h-40 rounded-full" />
      <input
        type="text"
        placeholder="TFI ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
        className="mb-2 p-2 border border-gray-400 rounded"
      />
      <input
        type="password"
        placeholder="TFI Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mb-2 p-2 border border-gray-400"
      />
      <button onClick={handleLogin} className="btn btn-primary mb-2">❤ TFI</button>
      <button onClick={() => navigate('/forgot-password')} className="text-blue-500">Forgot Password?</button>
      <ToastContainer />
    </div>
  );
};

export default Login;
