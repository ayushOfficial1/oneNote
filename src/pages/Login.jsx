import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import noteContext from "../context/notes/noteContext";

const Login = () => {
  const { getNotes,notes } = useContext(noteContext);
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: "", password: "" });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validUser = () => {
    console.log(Cookies.get('authtoken'))
    getNotes();
    console.log(notes)
    navigate("/");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await axios.post(
        "https://onenote-backend.onrender.com/api/auth/login",
        user
      );
      result && alert(result.data.msg);
      Cookies.set("authtoken", result.data.token);
      result.data.status && validUser();
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <div className="loginContainer">
      <div className="loginWrapper">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleInput}
            value={user.email}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleInput}
            value={user.password}
          />
          <button type="submit">Sign-In</button>
        </form>
        <p>
          Don't have an account? <Link to="/reg">Sign-Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
