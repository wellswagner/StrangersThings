import React from "react";
import { Link } from "react-router-dom";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import { API } from "./app";
const PostDetails = ({ posts, lsToken, fetchPosts }) => {
  const { id } = useParams();
  const post = posts.find((post) => id === post._id);
  const history = useHistory;

  const deletePostHandler = async (e) => {
    const response = await fetch(`${API}/posts/${post._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${lsToken}`,
      },
    });
    const info = await response.json();
    if (info.error) {
      return;
    }
    fetchPosts();
    history.push("/posts");
  };

  return (
    <>
      <div>
        {post && post.isAuthor ? (
          <div>
            <h3>{post.title}</h3>
            <div>Description: {post.description}</div>
            <div>Price: {post.price}</div>
            <div>Posted by: {post.author.username}</div>
            <div>Location: {post.location} </div>
            <button
              onClick={() => {
                deletePostHandler();
              }}
            >
              Delete
            </button>
          </div>
        ) : (
          <div>
            <div>
              <h3>{post.title}</h3>
              <div>Description: {post.description}</div>
              <div>Price: {post.price}</div>
              <div>Posted by: {post.author.username}</div>
              <div>Location: {post.location} </div>
              <Link to={`message/${post._id}`}>
                <button>Send Message</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default PostDetails;
