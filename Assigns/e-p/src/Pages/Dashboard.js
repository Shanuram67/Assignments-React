import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const tfiId = location.state?.tfiId;

  if (!tfiId) {
    // If tfiId is not present, redirect to login
    navigate('/');
    return null;
  }

  const handleLogout = () => {
    navigate('/');
  };

  const handleStartExam = () => {
    navigate('/exam/1');
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">HII {tfiId}</h1>
      <h2 className="text-xl text-center mt-4">Improve your TFI skills</h2>
      <div className="mt-8 flex flex-col items-center">
        <div className="p-4 border rounded w-64">
          <h3 className="text-lg">Level - Sandeep Reddy Vanga</h3>
          <img 
            src="https://www.newstap.in/h-upload/2023/11/26/1563878-sandeep-reddy.webp" 
            alt="Exam" 
            className="w-full h-32 object-cover mt-2"
          />
          <button 
            className="w-full py-2 mt-4 bg-blue-500 text-white rounded"
            onClick={handleStartExam}
          >
            Start Exam
          </button>
        </div>
      </div>
      <button 
        className="mt-8 bg-red-500 text-white py-2 px-4 rounded"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
