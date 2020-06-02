import React from 'react';
import {
  Link
} from 'react-router-dom';
import Logo from "../../images/Logo.jpg";

function Header() {
  return (
    <header>
    <nav className="navbar navbar-expand-md bg-black sticky-top">
        <button
          class="navbar-toggler ml-auto custom-toggler"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand ">
          <Link className="nav-link" to="/">
            <img className="logo" alt="Logo" src={Logo}></img>
          </Link>
        </a>

        <div className="companyname">
          College
        </div>
        <div className="companynameunder">
          Book
        </div>

        <div class="navbar-collapse collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li className="nav-item  first">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <div className="alumniHeader">
                <li className="nav-item">
                  <a href="/webpage1.html">
                    Alumni
                  </a>
                </li>
            </div>
            <li className="nav-item">
              <Link className="nav-link" to="/FAQ">
                FAQ
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Meet-The-Team">
                Meet The Team
              </Link>
            </li>
            <li className="nav-item last">
              <Link className="nav-link" to="/Contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
