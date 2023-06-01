import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({ email: "", password: "", name: "" });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await axios.post("https://onenote-backend.onrender.com/api/auth/", user);
      console.log(result.data);
      alert(result.data.msg);
      result.data.status && navigate("/login")
    } catch (error) {
      console.log({ error });
    }
  };
  return (
    <div className="regContainer">
      <div className="regWrapper">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            onChange={handleInput}
            value={user.name}
          />
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
          <button type="submit">Register</button>
        </form>
        <p>
          Already have an account? <Link to="/login">Sign-In</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
