import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import LoginForm from './components/LoginFoam';
import MusicLibrary from './components/MusicLibrary';
import Playlist from './components/Playlist';
import AudioPlayer from './components/AudioPlayer';

function App() {
  const [user, setUser] = useState(null);
  const [currentSong, setCurrentSong] = useState(null);

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
        <Header user={user} setUser={setUser} />
        <main className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<LoginForm setUser={setUser} />} />
            <Route
              path="/home"
              element={
                user ? (
                  <>
                    <h1 className="text-3xl font-bold mb-4">Namaskam, {user.id}</h1>
                    <div className="flex items-center mb-8">
                      <div className="w-16 h-16 bg-primary rounded-full rotate-animation mr-4"></div>
                      <div>
                        <h2 className="text-xl font-semibold">Now Playing</h2>
                        <p>{currentSong ? currentSong.title : 'No song selected'}</p>
                      </div>
                    </div>
                    <MusicLibrary setCurrentSong={setCurrentSong} />
                    <Playlist setCurrentSong={setCurrentSong} />
                  </>
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
          </Routes>
        </main>
        {currentSong && <AudioPlayer song={currentSong} />}
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;