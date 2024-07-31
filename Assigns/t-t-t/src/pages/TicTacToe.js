import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';
import 'tailwindcss/tailwind.css';

const TicTacToe = ({ highScores, setHighScores }) => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [scores, setScores] = useState({ X: 0, O: 0 });
  const [rounds, setRounds] = useState(0);
  const [players, setPlayers] = useState({ X: '', O: '' });
  const navigate = useNavigate();

  const handleClick = (index) => {
    if (board[index] || calculateWinner(board)) return;
    const newBoard = board.slice();
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  useEffect(() => {
    const winner = calculateWinner(board);
    if (winner) {
      toast.success(`Player ${winner} wins!`);
      setScores({ ...scores, [winner]: scores[winner] + 1 });
      setRounds(rounds + 1);
      resetBoard();
    } else if (!board.includes(null)) {
      toast.info('It\'s a draw!');
      setRounds(rounds + 1);
      resetBoard();
    }

    if (rounds === 5) {
      const playerXScore = scores['X'];
      const playerOScore = scores['O'];
      const winner = playerXScore > playerOScore ? 'X' : playerXScore < playerOScore ? 'O' : 'Draw';
      toast.success(`Game Over! Winner: ${winner}`);
      updateHighScores();
      setRounds(0);
      setScores({ X: 0, O: 0 });
    }
  }, [board, rounds]);

  const updateHighScores = () => {
    const newScores = [...highScores];
    newScores.push({ playerX: players.X, playerO: players.O, scoreX: scores.X, scoreO: scores.O });
    setHighScores(newScores);
    localStorage.setItem('highScores', JSON.stringify(newScores));
  };

  const resetBoard = () => {
    setBoard(Array(9).fill(null));
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <ToastContainer />
      <h1 className="text-4xl font-bold mb-4">✗0️ ika modhaledadhama</h1>
      <div className="flex mb-4">
        <div className="mr-2">
          <label>Player X:</label>
          <input
            type="text"
            className="border rounded px-2 py-1"
            value={players.X}
            onChange={(e) => setPlayers({ ...players, X: e.target.value })}
          />
        </div>
        <div>
          <label>Player O:</label>
          <input
            type="text"
            className="border rounded px-2 py-1"
            value={players.O}
            onChange={(e) => setPlayers({ ...players, O: e.target.value })}
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {board.map((value, index) => (
          <motion.div
            key={index}
            className="w-24 h-24 bg-gray-200 flex items-center justify-center text-2xl font-bold"
            onClick={() => handleClick(index)}
            whileTap={{ scale: 0.9 }}
          >
            {value}
          </motion.div>
        ))}
      </div>
      <div className="flex mt-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2" onClick={resetBoard}>
          Reset Board
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={() => navigate('/high-scores')}
        >
          View High Scores
        </button>
      </div>
      <div className="mt-4">
        <h2 className="text-2xl font-bold">Scores</h2>
        <p>Player X: {scores.X}</p>
        <p>Player O: {scores.O}</p>
      </div>
    </div>
  );
};

const calculateWinner = (board) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
};

export default TicTacToe;
