import React, { useState } from 'react';

const musicLibrary = [
  {
    id: 1,
    title: '90 S',
    artist: 'SPB Garu',
    image: 'https://i.pinimg.com/736x/08/83/ef/0883ef4f5ae2569c37a5dca0f11b5dc8.jpg',
    audio: '/audio/song1.mp3',
  },
  {
    id: 2,
    title: '80 S',
    artist: 'Ilayaraja Garu',
    image: 'https://th-i.thgim.com/public/incoming/4tby6d/article66919585.ece/alternates/FREE_1200/Ilayaraja_12.jpg',
    audio: '/audio/song2.mp3',
  },
  {
    id: 3,
    title: 'Athadu',
    artist: 'Mani Sharma Garu ',
    image: 'https://telugu.samayam.com/thumb/84314949/hbd-manisharma-84314949.jpg?imgsize=154694&width=1600&height=900&resizemode=75',
    audio: '/audio/song3.mp3',
  },
];

function MusicLibrary({ setCurrentSong }) {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const handleCategoryClick = (categoryId) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Music Library</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {musicLibrary.map((category) => (
          <div key={category.id} className="card bg-base-100 shadow-xl">
            <figure>
              <img src={category.image} alt={category.title} className="w-full h-48 object-cover" />
            </figure>
            <div className="card-body">
              <h3 className="card-title">{category.title}</h3>
              <p>{category.artist}</p>
              <div className="card-actions justify-end">
                <button
                  className="btn btn-primary"
                  onClick={() => handleCategoryClick(category.id)}
                >
                  {expandedCategory === category.id ? 'Hide Songs' : 'Show Songs'}
                </button>
              </div>
            </div>
            {expandedCategory === category.id && (
              <div className="p-4">
                <ul>
                  {[1, 2, 3, 4, 5].map((songId) => (
                    <li key={songId} className="mb-2">
                      <button
                        className="btn btn-ghost"
                        onClick={() => setCurrentSong({ ...category, id: songId })}
                      >
                        {category.title} - Song {songId}
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

export default MusicLibrary;