import React, { useState } from 'react';
 // Ensure this component is in your components folder

// Sample playlist data including songs
const playlists = [
  {
    id: 1,
    title: 'Ar Rahman Garu',
    image: 'https://img.mensxp.com/media/content/2018/Oct/life-lessons-from-ar-rahman-for-all-men1400-1539873519.jpg',
    songs: [
      { id: 1, title: 'Ale Ale', audio: '/audio/play1.mp3' },
      { id: 2, title: 'Eeru Vaka', audio: '/audio/play2.mp3' },
      { id: 3, title: 'Kadhile Kalamey', audio: '/audio/play3.mp3' },
      
    ],
  },
  {
    id: 2,
    title: 'Harris Jayraj Garu',
    image: 'https://mellowplex.s3.amazonaws.com/uploads/item_media/asset/25276/Harris-Jayaraj.jpg',
    songs: [
      { id: 1, title: 'Ghajani', audio: '/audio/song4.mp3' },
      { id: 2, title: 'Snethiduu', audio: '/audio/play4.mp3' },
      { id: 3, title: 'Love Elephanta ', audio: '/audio/play7.mp3' },
      
    ],
  },
  {
    id: 3,
    title: 'Vijay Anthony Garu',
    image: 'https://cdn.platinumlist.net/upload/artist/vijay_antony_2260-orig1705908335.jpeg',
    songs: [
      { id: 1, title: 'Rajula Rajula', audio: '/audio/play5.mp3' },
      { id: 2, title: 'Puli Urumudu', audio: '/audio/song6.mp3' },
      { id: 3, title: 'Naaka Mukkaa', audio: '/audio/play8.mp3' },

    ],
  },
];

function Playlist({ setCurrentSong }) {
  const [expandedPlaylist, setExpandedPlaylist] = useState(null);

  const handlePlaylistClick = (playlistId) => {
    setExpandedPlaylist(expandedPlaylist === playlistId ? null : playlistId);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Playlists</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {playlists.map((playlist) => (
          <div key={playlist.id} className="card bg-base-100 shadow-xl">
            <figure>
              <img src={playlist.image} alt={playlist.title} className="w-full h-48 object-cover" />
            </figure>
            <div className="card-body">
              <h3 className="card-title">{playlist.title}</h3>
              <div className="card-actions justify-end">
                <button
                  className="btn btn-primary"
                  onClick={() => handlePlaylistClick(playlist.id)}
                >
                  {expandedPlaylist === playlist.id ? 'Hide Songs' : 'Show Songs'}
                </button>
              </div>
            </div>
            {expandedPlaylist === playlist.id && (
              <div className="p-4">
                <ul>
                  {playlist.songs.map((song) => (
                    <li key={song.id} className="mb-2">
                      <button
                        className="btn btn-ghost"
                        onClick={() =>
                          setCurrentSong({
                            ...song,
                            playlistTitle: playlist.title,
                          })
                        }
                      >
                        {song.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Playlist;
