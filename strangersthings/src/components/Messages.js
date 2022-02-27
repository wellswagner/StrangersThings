import {useState} from "react";
import { useParams, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { API } from "./app";

const Messages = ({posts, fetchPosts, fetchUser, lsToken}) => {
  const { id } = useParams();
  const post = posts.find((post) => id === post._id) 
};

export default Messages;
