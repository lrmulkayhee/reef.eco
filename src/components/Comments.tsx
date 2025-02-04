import React, { useState } from 'react';

interface Comment {
    id: string;
    text: string;
    author: string;
    date: string;
}

interface CommentsProps {
    comments: Comment[];
    onAddComment: (text: string) => void;
    title?: string; // Optional title for the comments section
}

const Comments: React.FC<CommentsProps> = ({ comments, onAddComment, title = 'Comments' }) => {
    const [newComment, setNewComment] = useState('');

    const handleAddComment = () => {
        onAddComment(newComment);
        setNewComment('');
    };

    return (
        <div>
            <h3>{title}</h3>
            <ul>
                {comments.map(comment => (
                    <li key={comment.id}>
                        <p>{comment.text}</p>
                        <small>By {comment.author} on {comment.date}</small>
                    </li>
                ))}
            </ul>
            <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Add a comment"
            />
            <button onClick={handleAddComment}>Add Comment</button>
        </div>
    );
};

export default Comments;