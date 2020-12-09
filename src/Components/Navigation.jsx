import React from 'react';
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
    return (
<div className="navigation">
      <nav className="">
            <ul className="">
              <li>
                <Link className="" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="" to="/dashboard">
                  Dashboard
                </Link>
              </li>
            </ul>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);
