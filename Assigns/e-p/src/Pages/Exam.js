import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Dashboard from './Dashboard';
const questions = [
    {
      question: 'What is confidence level of Animal Movie',
      options: ['Lite', 'Self-Director-Confidence', 'Over-Confidence'],
      correctAnswer: 'Self-Director-Confidence'
    },
    {
      question: 'Will Don Lee play a villan role in spirit movie',
      options: ['Yes', 'No', 'MayBe'],
      correctAnswer: 'MayBe'
    },
    {
      question: 'Why SRV make ganstar movie where did he get the that solid inspiration',
      options: ['SS Rajamouli', 'Amith Bachan', 'Megastar Chiranjeevi'],
      correctAnswer: 'Megastar Chiranjeevi'
    },
  ];

const Exam = () => {
  const navigate = useNavigate();
  const { examId } = useParams();
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    const handleCopy = (e) => {
      e.preventDefault();
      toast.error('Exam canceled due to text copy attempt.');
      navigate('/Dashboard');
    };

    const handleBlur = () => {
      toast.error('Exam canceled due to page navigation.');
      navigate('/Dashboard');
    };

    document.addEventListener('copy', handleCopy);
    window.addEventListener('blur', handleBlur);

    return () => {
      document.removeEventListener('copy', handleCopy);
      window.removeEventListener('blur', handleBlur);
    };
  }, [navigate]);

  

  const handleSubmit = () => {
    toast.success('Good! The form sent to our TFI head');
    setTimeout(() => navigate('/dashboard'), 2000);  // Redirect after showing the message
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Exam {examId}</h1>
      <div className="mt-4">
        {questions.map((q, index) => (
          <div key={index} className="mb-4">
            <p>{q.question}</p>
            {q.options.map((option, i) => (
              <div key={i}>
                <label>
                  <input 
                    type="radio" 
                    name={`question${index}`} 
                    value={option} 
                    className="mr-2" 
                    // onClick={() => (index, option)} 
                  />
                  {option}
                </label>
              </div>
            ))}
          </div>
        ))}
      </div>
      <button 
        className="mt-8 bg-blue-500 text-white py-2 px-4 rounded"
        onClick={handleSubmit}
      >
        Submit Exam
      </button>
      <button 
        className="mt-4 bg-gray-500 text-white py-2 px-4 rounded"
        onClick={() => navigate('/Dashboard.js')}
      >
        Back to Dashboard
      </button>
    </div>
  );
};

export default Exam;



/*const questions = [
  {
    question: 'What is confidence level of Animal Movie',
    options: ['Lite', 'Self-Director-Confidence', 'Over-Confidence'],
    correctAnswer: 'Self-Director-Confidence'
  },
  {
    question: 'Will Don Lee play a villan role in spirit movie',
    options: ['Yes', 'No', 'MayBe'],
    correctAnswer: 'MayBe'
  },
  {
    question: 'Why SRV make ganstar movie where did he get the that solid inspiration',
    options: ['SS Rajamouli', 'Amith Bachan', 'Megastar Chiranjeevi '],
    correctAnswer: 'Megastar Chiranjeevi'
  },
];*/