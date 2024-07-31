import React from 'react';
import './App.css';
import ImagePost from './components/ImagePost';

const dummyPosts = [
  {
    id: 1,
    imageUrl: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202406/krishnakumar-kk-kalki-2898-ad-282602126-16x9_0.jpg?VersionId=8JMVwFwG_4qkeBLnWhbAFBtIPkCqfde3&size=690:388',
    description: 'A Special Character but did it Great - Radhe Radhe ',
  },
  {
    id: 2,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS91xdRTJvleQItDRcjZhWjT8Mkieq7IC9Bqw&s',
    description: 'A good performance by Darling',
  },
  {
    id: 3,
    imageUrl: 'https://img.olympics.com/images/image/private/t_s_16_9_g_auto/t_s_w960/f_auto/primary/k7qe0iiahvgl3txbcfji',
    description: 'After 17years we are the champions ',
  },
  {
    id: 4,
    imageUrl: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202405/ms-dhoni-281121996-3x4.jpeg?VersionId=dtKmHIYnxhZXzYDnmSAjRNJJJj5kJzi',
    description: 'Never forget the legend GOAT',
  },
];

function App() {
  return (
    <div className="App">
      {dummyPosts.map((post) => (
        <ImagePost key={post.id} post={post} />
      ))}
    </div>
  );
}

export default App;
