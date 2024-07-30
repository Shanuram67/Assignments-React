import React, { useEffect, useReducer } from 'react';
import './App.css';
import ImagePost from './components/ImagePost';

// Initial state for posts
const initialState = [];

// Reducer function to manage the state of posts
const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_POSTS':
      return action.payload;
    case 'TOGGLE_LIKE':
      return state.map(post =>
        post.id === action.payload ? { ...post, likes: post.likes + 1  } : post
      );
    case 'TOGGLE_DISLIKE':
      return state.map(post =>
        post.id === action.payload ? { ...post, dislikes: post.dislikes + 1  } : post
      );
    case 'INCREMENT_VIEWS':
      return state.map(post =>
        post.id === action.payload ? { ...post, views: post.views + 1 } : post
      );
    case 'INCREMENT_SHARES':
      return state.map(post =>
        post.id === action.payload ? { ...post, shares: post.shares + 1 } : post
      );
    default:
      return state;
  }
};

function App() {
  const [posts, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // Fetch data from the JSON placeholder
    fetch('https://jsonplaceholder.typicode.com/photos?_limit=5')
      .then(response => response.json())
      .then(data => {
        // Format the fetched data
        const formattedData = data.map((item, index) => ({
          id: item.id,
          title: `Custom Title ${index + 1}`,
          description: `Custom description for image ${index + 1}.`,
          imageUrl: item.url,
          likes: 0,
          dislikes: 0,
          views: 0,
          shares: 0,
          liked: false,
          disliked: false,
        }));
        dispatch({ type: 'SET_POSTS', payload: formattedData });
      });
  }, []);

  const updatePost = (id, updatedData) => {
    dispatch({ type: 'UPDATE_POST', payload: { id, ...updatedData } });
  };

  return (
    <div className="App">
      <h1>Dupigram</h1>
      <div className="posts-container">
        {posts.map((post) => (
          <ImagePost key={post.id} post={post} dispatch={dispatch} updatePost={updatePost} />
        ))}
      </div>
    </div>
  );
}

export default App;
