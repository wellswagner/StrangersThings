import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Route,
  Link,
} from "react-router-dom/cjs/react-router-dom.min";
import Posts from "./components/Posts";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Navbar from "./components/Navbar";

export const API =
  "https://strangers-things.herokuapp.com/api/2110-FTB-ET-WEB-PT";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});

  async function fetchPosts() {
    const resp = await fetch(`${API}/posts`);
    const info = await resp.json();
    setPosts(info.data.posts);
  }
  console.log(token, user, posts);
  const fetchUser = async () => {
    const lsToken = localStorage.getitem("token");
    if (lsToken) {
      setToken(lsToken);
    }
    const resp = await fetch(`${API}/users/me`, {
      headers: {
        Authorization: `Bearer ${lsToken}`,
      },
    });
    const info = await resp.json();
    console.log(info);
    if (info.success) {
      setUser(info.data);
    }
  };

  useEffect(() => {
    fetchUser();
    fetchPosts();
  }, []);
  return (
    <BrowserRouter>
      <div id="container">
        <div id="main-section">
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/Posts">
            <Posts />
          </Route>

          <Route exact path="/Register">
            <Register setToken={setToken} />
          </Route>

          <Route exact path="/Profile">
            <Profile />
          </Route>

          <Route exact path="/Login">
            <Login />
          </Route>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
