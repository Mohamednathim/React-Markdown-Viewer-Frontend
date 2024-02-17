import React, { useState } from "react";
import axios from "axios";
import { API } from "../Global";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const [password, setPassword] = useState("");

  const { token } = useParams();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!password.trim()) {
      toast.warning("Password is required", {
        position: "top-right",
        theme: "dark",
      });
    }

    axios
      .post(`${API}/auth/reset-password/${token}`, {
        password,
      })
      .then((res) => {
        if (res.data.status) {
          toast.success("Password Updated Successfully...👍🏻", {
            position: "top-right",
            theme: "dark",
          });
          navigate("/login");
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Invalid Password", {
          position: "top-right",
          theme: "dark",
        });
      });
  };

  return (
    <div className="sign-up-container">
      <div className="main">
        <form className="sign-up-form" onSubmit={handleSubmit}>
          <h1>Reset Password</h1>
          <label htmlFor="password">New Password</label>
          <input
            type="password"
            name="password"
            placeholder="*********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Reset Password</button>
          <img
            src="https://png.pngtree.com/png-clipart/20230321/original/pngtree-beautifull-pink-rose-flowers-with-green-leaves-png-image_8998741.png"
            alt="img"
          />
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
