import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light container-fluid border-bottom">
      <div className="container-fluid">
        <a className="navbar-brand" href="#q">
          MY TUTOR
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item mx-2">
              <a className="nav-link active" href="#q">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-2" href="/dashboard">
                Dashboard
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#q">
                About us
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#q">
                Contact us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login">
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
