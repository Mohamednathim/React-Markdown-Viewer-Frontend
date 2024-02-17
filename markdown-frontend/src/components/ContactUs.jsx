import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ContactUs = () => {
  const form = useRef();

  const Navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();

    const { user_name, user_email, message } = form.current;
    // console.log(user_email.value, user_name.value,message);

    if (user_name.value.trim() === "") {
      toast.warning("Name is required", {
        position: "top-right",
        theme: "dark",
      });
      return;
    }
    if (user_email.value.trim() === "") {
      toast.warning("Email is required", {
        position: "top-right",
        theme: "dark",
      });
      return;
    } else if (!/\S+@\S+\.\S+/.test(user_email.value)) {
      toast.error("Invalid Email", {
        position: "top-right",
        theme: "dark",
      });
      return;
    }
    if (message.value.trim() === "") {
      toast.warning("Message is required", {
        position: "top-right",
        theme: "dark",
      });
      return;
    }

    emailjs
      .sendForm("service_novikes", "template_v5v31i3", form.current, {
        publicKey: "Az9BB9sWnZ128Ml0y",
      })
      .then(() => {
        console.log("SUCCESS!");
        toast.success("Email Send Successfully...👍🏻", {
          position: "bottom-right",
          theme: "dark",
        });
        Navigate("/");
      })

      .catch((error) => {
        console.log("FAILED...", error.text);
        toast.error("Email Not Delivered...👎🏻", {
          position: "top-right",
          theme: "dark",
        });
        console.log(error);
      });
  };

  return (
    <div className="sign-up-container">
      <div className="main">
        <form className="sign-up-form" ref={form} onSubmit={sendEmail}>
          <h1>Contact Us</h1>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
