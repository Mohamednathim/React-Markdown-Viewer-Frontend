import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div id="header">
          <div>🖋Markara</div>
        </div>
        <div className="navbarHeading">
          <ul className="navbar-nav">
            <li className="nav-item px-2">
              <button className="Homebtn" onClick={() => navigate("/login")}>
                <h4>Markdown</h4>
              </button>
            </li>
            <li className="nav-item px-2">
              <button className="Homebtn" onClick={() => navigate("/contact")}>
                <h4>Contact</h4>
              </button>
            </li>
            <li className="nav-item px-3">
              <button className="Homebtn" onClick={() => navigate("/login")}>
                <h4>Login</h4>
              </button>
            </li>
            <li className="nav-item px-2">
              <button className="Homebtn" onClick={() => navigate("/register")}>
                <h4>Sign up</h4>
              </button>
            </li>
          </ul>
        </div>
      </nav>
      <div>
        <div className="homeHeading animate-character">
          One best book is equal to hundred good friends but
        </div>
        <div className="homeHeading1 animate-character">
          One good friend is equal to a Library...
        </div>
        <div className="homeHeading2 animate-character">
          ~Dr.A.P.J.Abdul Kalam
        </div>
      </div>
      <div id="content">
        <img
          src="https://www.shutterstock.com/image-illustration/dr-apj-abdul-kalam-portrait-600nw-2310267175.jpg"
          alt="Kalam Sir"
        />
      </div>
    </>
  );
};

export default Home;
