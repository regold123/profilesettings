import React from "react";
import "./Header.css";

const Header = ({name}) => {

  return(
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid navbar-container">
        <a className="navbar-brand" href="">
          <img className="img-responsive" src="../logomain.png" alt="Home"/>
        </a>
        <div className="navbar-nav ml-auto">

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#toggleNavbar" aria-controls="toggleNavbar" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <ul className="navbar-nav collapse navbar-collapse" id="toggleNavbar">
            <li className="nav-item">
              {name}
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><img className="img-responsive" src="../avataricon.png" alt="avatar"/></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><img className="img-responsive" src="../emailicon.png" alt="email"/></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><img className="img-responsive" src="../plugicon.png" alt="plug"/></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );

}

export default Header;
