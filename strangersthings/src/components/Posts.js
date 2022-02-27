import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { API } from "./app";

const Posts = ({ posts, fetchPosts }) => {
const [searchTerm, setSearchTerm] = useState('')
console.log(searchTerm) 


function postMatches(post, text) {
  const {title, description, price, author: {username}, location}= post;
  
  if(title.toLowerCase().includes(text.toLowerCase()) || 
  description.toLowerCase().includes(text.toLowerCase()) || 
  price.toLowerCase().includes(text.toLowerCase()) || 
  username.toLowerCase().includes(text.toLowerCase()) || 
  location.toLowerCase().includes(text.toLowerCase())) {
      return true;
  }
}
  
const filteredPosts = posts.filter(post => postMatches(post, searchTerm));

const postsToDisplay = searchTerm.length ? filteredPosts : posts;




  return (
    <>
      <h1>Posts</h1>;<Link to="/createPost">Create New Post</Link>
      <form>
        <h3>Search</h3>
        <input 
          value={searchTerm}
          onChange = {(e) => {
            e.preventDefault();
            setSearchTerm(e.target.value);
          postMatches()}}
          placeholder = "Search Posts..."
          />
      </form>
      {posts && postsToDisplay.map((post) => (
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
