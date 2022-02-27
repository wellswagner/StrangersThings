import { React, useEffect, useState } from "react";
import { API } from "./app";

const CreateMessage = ({ posts, fetchUser, fetchPosts }) => {
  const [message, setMessage] = useState("");
  const lsToken = localStorage.getItem("token");

  const handleMessage = async (post) => {
    const resp = await fetch(`${API}/posts/${post._id}/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${lsToken}`,
      },
      body: JSON.stringify({
        message: {
          content: "",
        },
      }),
    });
    const data = await resp.JSON();
    setMessage(data);
  };

  useEffect(() => {
    handleMessage();
  });

  return (
    <div className="messageForm">
      <h3>Send a Message</h3>
      <form onSubmit={handleMessage}>
        <input
          placeholder="type your message here"
          value={message.content}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};
export default CreateMessage;
