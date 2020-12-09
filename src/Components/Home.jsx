import React from "react";
import Logo from "../logo512.png";
import { Link, withRouter } from "react-router-dom";

function Home() {
  return (
    <div className="login">
            <div className="login-card">
              <img className="login-logo" src={Logo} alt="Logo" height="200" width="300"/>
              <div className="wrap-input">
              <input className="input" type="text" name="email" placeholder="Email" />
              </div>
              <div className="wrap-input">
              <input className="input" type="text" name="password" placeholder="Password" />
              </div>
              <Link className="" to="/dashboard">
            <button className="login-button">
              Login
            </button>
            </Link>
            <div className="terms-text">
              Terms of Use––Privacy Policy
            </div>
        </div>
    </div>
  );
}

export default withRouter(Home);