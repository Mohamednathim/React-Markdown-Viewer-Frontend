import React, { useState } from "react";
import axios from "axios";
import { API } from "../Global";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

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
      .post(`${API}/auth/login`, {
        email,
        password,
      })
      .then((res) => {
        if (res.data.status) {
          toast.success(`Hi, ${email}`, {
            position: "top-right",
            theme: "dark",
          });
          navigate("/markdown");
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Invalid credentials", {
          position: "top-right",
          theme: "dark",
        });
      });
    setEmail("");
    setPassword("");
  };

  return (
    <div className="sign-up-container">
      <div className="main">
        <form className="sign-up-form" onSubmit={handleSubmit}>
          <h1>Login</h1>

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

          <button type="submit">Login</button>
          <p>
            <Link to="/forgotPassword" id="link">
              Forgot Password ?
            </Link>
          </p>
          <p>
            Don't have an Account?
            <Link to="/register" id="link">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
