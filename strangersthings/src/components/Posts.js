import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Posts = ({ posts }) => {
  const viewPostDetails = () => {};

  return (
    <>
      <h1>Posts</h1>;<Link to="/createPost">Create New Post</Link>
      {posts.map((post) => (
        <div key={post._id}>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
          <h3>{post.price}</h3>
          <h3>{post.location}</h3>
          <Link to={`/posts/${post._id}`}>
            <button>Details</button>
          </Link>
          <hr></hr>
        </div>
      ))}
    </>
  );
};

export default Posts;
