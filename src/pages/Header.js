import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import "../styles/Header.css";

function Header(props) {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a class="navbar-brand" href="#">
          <img
            src={props.avt}
            alt="Liferay"
            width="96"
            height="24"
            class="d-inline-block align-text-top"
          />
        </a>
        <a className="nav-link active" href="/">
          Home
        </a>
        <a className="nav-link" href="/">
          Register Activity
        </a>
        <a className="nav-link" href="/">
          Institutions
        </a>
        <a className="nav-link" href="/">
          Forms
        </a>
        <a className="nav-link" href="/">
          Requests
        </a>
        <a className="nav-link" href="/">
          Register Forms
        </a>
      </div>
    </nav>
  );
}

export default Header;
