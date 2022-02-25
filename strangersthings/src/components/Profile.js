import React, { useState, useEffect } from "react";
import reactRouterDom from "react-router-dom";
import { API } from "./app";
import { Link } from "react-router-dom";
import Messages from "./CreateMessage";
const Profile = ({ user }) => {
  const [posts, setPosts] = useState([]);

  // useEffect(()=> {
  //   setPosts(user.posts);
  // }, [user])

  return (
    <>
      <h1>Profile</h1>;
      <div id="messages">
        <h3>Messages</h3>
        <Messages />
      </div>
      <div id="your posts">
        <h3>Your Posts</h3>
      </div>
    </>
  );
};

export default Profile;
