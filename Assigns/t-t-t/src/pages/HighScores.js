import React from 'react';
import 'tailwindcss/tailwind.css';

const HighScores = ({ highScores = [] }) => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-4xl font-bold text-center mb-6">High Scores</h2>
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Player</th>
            <th className="px-4 py-2">Score</th>
          </tr>
        </thead>
        <tbody>
          {highScores.map((score, index) => (
            <tr key={index} className="bg-gray-100">
              <td className="border px-4 py-2">{score.player}</td>
              <td className="border px-4 py-2">{score.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HighScores;
