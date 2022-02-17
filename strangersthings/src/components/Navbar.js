import { Link } from "react-router-dom";

const Navbar = ({ user, setToken, setUser }) => {
  return (
    <div className="navBar">
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
      >
        Log Out
      </Link>
      {user ? <span id="welcome">Welcome {user.username}!</span> : null}
    </div>
  );
};

export default Navbar;
