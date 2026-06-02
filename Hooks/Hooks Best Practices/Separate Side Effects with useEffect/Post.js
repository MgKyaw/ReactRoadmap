import React from 'react';

const Post = ({ postId }) => {
  const [post, setPost] = React.useState(null);
  const [comments, setComments] = React.useState([]);

  React.useEffect(() => {
    fetchPost(postId).then((data) => {
      setPost(data);
    });
  }, [postId]);

  React.useEffect(() => {
    fetchComments(postId).then((data) => {
      setComments(data);
    });
  }, [postId]);

  return (
    <div>
      <h1>{post ? post.title : 'Loading...'}</h1>
      {comments.length > 0 ? (
        comments.map((comment) => (
          <p key={comment.id}>{comment.text}</p>
        ))
      ) : (
        <p>No comments yet.</p>
      )}
    </div>
  );
};