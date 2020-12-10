import React, { useState, useEffect } from "react";
import Logo from "../logo512.png";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";

function Home() {
  const [auth, setAuth] = useState("");

  axios.post("https://mock-api.bluesquad.co/auth", {
      user: "asha.d.franchi@gmail.com",
      password: "OdXhiQnx"
  })
  .then((response) => {
    console.log(response);
  }, (error) => {
    console.log(error);
  });

  return (
    <div className="login">
            <form noValidate autoComplete="off">
              <img className="login-logo" src={Logo} alt="Logo" height="200" width="300"/>
              <div className="wrap-input">
              <input className="input" type="text" name="email" placeholder="Email"/>
              </div>
              <div className="wrap-input">
              <input className="input" type="text" name="password" placeholder="Password" />
              </div>
              <Link className="link" to="/dashboard">
            <button type="submit" className="login-button">
              Login
            </button>
            </Link>
            <div className="terms-text">
              Terms of Use––Privacy Policy
            </div>
        </form>
        <div>{auth}</div>
    </div>
  );
}

export default withRouter(Home);