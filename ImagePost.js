import React, { useState } from 'react';
import './ImagePost.css';

const ImagePost = ({ post, dispatch, updatePost }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(post.title);
  const [description, setDescription] = useState(post.description);

  const handleLike = (e) => {
    e.stopPropagation();
    dispatch({ type: 'TOGGLE_LIKE', payload: post.id });
  };

  const handleDislike = (e) => {
    e.stopPropagation();
    dispatch({ type: 'TOGGLE_DISLIKE', payload: post.id });
  };

  const handleView = () => {
    dispatch({ type: 'INCREMENT_VIEWS', payload: post.id });
  };

  const handleShare = (e) => {
    e.stopPropagation();
    dispatch({ type: 'INCREMENT_SHARES', payload: post.id });
    alert('Post shared!');
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    updatePost(post.id, { title, description });
    setIsEditing(false);
  };

  return (
    <div className="image-post" onClick={handleView}>
      {isEditing ? (
        <div>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
          <img src={post.imageUrl} alt={post.description} />
          <div className="buttons">
            <button className={post.liked ? 'active' : ''} onClick={handleLike}>
              👍 {post.likes}
            </button>
            <button className={post.disliked ? 'active' : ''} onClick={handleDislike}>
              👎 {post.dislikes}
            </button>
            <button>👁️ {post.views}</button>
            <button onClick={handleShare}>🔗 {post.shares}</button>
          </div>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default ImagePost;
