import React from "react";
import Logo from "/Users/asha/Documents/BlueSquadChallenge/public/logo512.png";

function Home() {
  return (
    <div className="login">
          <div>
            <div className="login-card">
              <img src={Logo} alt="Logo" />
              <div className="email">
              <input class="input" type="text" name="email" placeholder="Email" />
              </div>
              <div className="password">
              <input class="input" type="text" name="password" placeholder="Password" />
              </div>
            <button className="login-button">
              Login
            </button>
            <div className="terms-text">
              Terms of Use––Privacy Policy
            </div>
            </div>
        </div>
    </div>
  );
}

export default Home;