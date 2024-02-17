import React, { useState } from "react";
import axios from "axios";
import { API } from "../Global";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username.trim()) {
      toast.warning("Username is required", {
        position: "top-right",
        theme: "dark",
      });
      return;
    }
    if (!email.trim()) {
      toast.warning("Email is required", {
        position: "top-right",
        theme: "dark",
      });
      return;
    }
    if (!password.trim()) {
      toast.warning("Password is required", {
        position: "top-right",
        theme: "dark",
      });
      return;
    }

    axios
      .post(`${API}/auth/register`, {
        username,
        email,
        password,
      })
      .then((res) => {
        if (res.data.status) {
          toast.success("Registered Successfully...👍🏻", {
            position: "top-right",
            theme: "dark",
          });
          navigate("/login");
        } else {
          toast.error("Registered Failed...👎🏻", {
            position: "top-right",
            theme: "dark",
          });
        }
      })
      .catch((err) => {
        toast.error("Invalid credentials", {
          position: "top-right",
          theme: "dark",
        });
        console.log(err);
      });
    setEmail("");
    setUsername("");
    setPassword("");
  };

  return (
    <div className="sign-up-container">
      <div className="main">
        <form className="sign-up-form" onSubmit={handleSubmit}>
          <h1>Register</h1>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            placeholder="John Deo"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="john@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="*********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Register</button>
          <p>
            <Link to="/forgotPassword" id="link">
              Forgot Password ?
            </Link>
          </p>
          <p>
            Do you have an Account?{" "}
            <Link to="/login" id="link">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
