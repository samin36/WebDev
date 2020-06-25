import React from 'react';

import './Post.css';

const Post = ({ title, body, author, image, number }) => {
    return (
        <div className="post-container">
            <h1 className="heading">{title}</h1>
            <img className="image" src={image} alt="post" />
            <p>{body}</p>
            <div className="info">
                <h5>{number}</h5>
                <h4>{author}</h4>
            </div>
        </div>
    );
}

export default Post;