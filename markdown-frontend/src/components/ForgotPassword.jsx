import React, { useState } from "react";
import axios from "axios";
import { API } from "../Global";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      toast.warning("Email is required", {
        position: "top-right",
        theme: "dark",
      });
    }

    await axios
      .post(`${API}/auth/forgot-password`, {
        email,
      })
      .then((res) => {
        if (res.data.status) {
          toast.success(
            "Please check your email for the reset password link...😍",
            {
              position: "top-right",
              theme: "dark",
              autoClose: 5000,
            }
          );
          navigate("/login");
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Invalid Email", {
          position: "top-right",
          theme: "dark",
        });
      });
    setEmail("");
  };

  return (
    <div className="sign-up-container">
      <div className="main">
        <form className="sign-up-form" onSubmit={handleSubmit}>
          <h1>Forgot Password</h1>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="john@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button type="submit">Send</button>
          <img
            src="https://png.pngtree.com/png-clipart/20230321/original/pngtree-set-of-pink-roses-png-image_8998742.png"
            alt="img"
          />
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
