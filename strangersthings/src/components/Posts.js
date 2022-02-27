import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { API } from "./app";

const Posts = ({ posts, fetchPosts }) => {
const [searchTerm, setSearchTerm] = useState('')
console.log(searchTerm) 


// const fetchSearchResult = async () => {
//   const resp = await fetch(`${API}/posts`);
//   JSON.stringify(resp)
//   console.log(resp)
//   const searchResults = async (post, searchTerm) => {
//     let filteredPosts = []
//     if(resp.title.toLowerCase().includes(searchTerm)) console.log(resp)
//     if(resp.description.toLowerCase().includes(searchTerm)) filteredPosts.push(resp)
//     console.log(filteredPosts)
//   }
// } come back to this ***






  return (
    <>
      <h1>Posts</h1>;<Link to="/createPost">Create New Post</Link>
      <form>
        <h3>Search</h3>
        <input 
          value={searchTerm}
          onChange = {(e) => fetchSearchResult()}
          placeholder = "Search Posts..."
          />
      </form>
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
