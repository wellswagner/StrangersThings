import { Link } from "react-router-dom";

const Navbar = ({ user, setToken, setUser }) => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/Posts">Posts</Link>
      <Link to="/Register">Register</Link>
      <Link to="/Login">Login</Link>
      <Link to="/Profile">Profile</Link>
      <Link
        to="/"
        onClick={() => {
          setToken("");
          setUser(null);
          localStorage.removeItem("token");
        }}
      ></Link>
      {user && <span>Welcome {user.username}</span>}
    </>
  );
};

export default Navbar;
