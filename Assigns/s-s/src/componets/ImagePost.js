import React, { useState } from 'react';
import './ImagePost.css';

const ImagePost = ({ post }) => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
  };

  const handleComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  const handleShare = () => {
    alert('Shared with 3 users!');
  };

  return (
    <div className="image-post">
      <img src={post.imageUrl} alt={post.description} />
      <p>{post.description}</p>
      <div className="buttons">
        <button onClick={handleLike}>Like ({likes})</button>
        <button onClick={handleDislike}>Dislike ({dislikes})</button>
        <button onClick={handleShare}>Share</button>
      </div>
      <div className="comments">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a comment..."
        />
        <button onClick={handleComment}>Comment</button>
        <div className="comment-list">
          {comments.map((comment, index) => (
            <p key={index}>{comment}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImagePost;
