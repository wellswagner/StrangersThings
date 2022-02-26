import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { API } from "./app";

const Login = (props) => {
  const setToken = props.setToken;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    if (!password || !username) {
      setError("Invalid username or password");
      console.log("hello");
    }

    const resp = fetch(`${API}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username,
          password,
        },
      }),
    });

    const info = await (await resp).json();
    if (info.error) {
      return setError(info.error.message);
    }
    setToken(info.data.token);
    localStorage.setItem("token", info.data.token);
    history.push("./Profile");
    console.log("hello");
  };
  return (
    <>
      <h1>Login</h1>;
      <form onSubmit={(e) => handleLogin(e)}>
        <input
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>
      <p>{error}</p>
    </>
  );
};

export default Login;
