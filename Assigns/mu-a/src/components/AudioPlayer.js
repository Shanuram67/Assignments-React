import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

function CustomAudioPlayer({ song }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-lg">
      <AudioPlayer
        autoPlay
        src={song.audio}
        onPlay={(e) => console.log('onPlay')}
        showSkipControls={true}
        showJumpControls={false}
        header={`Now Playing: ${song.title}`}
        footer="Custom Music Player"
        style={{
          backgroundColor: 'transparent',
          boxShadow: 'none',
        }}
      />
    </div>
  );
}

export default CustomAudioPlayer;