import React from "react";
import "./Header.css";

const Header = ({name}) => {

  return(
    <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="container-fluid navbar-container">
        <a class="navbar-brand" href="">
          <img class="img-responsive" src="../logomain.png" alt="Home"/>
        </a>
        <div class="navbar-nav ml-auto">

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#toggleNavbar" aria-controls="toggleNavbar" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <ul class="navbar-nav collapse navbar-collapse" id="toggleNavbar">
            <li class="nav-item">
              {name}
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><img class="img-responsive" src="../avataricon.png" alt="avatar"/></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><img class="img-responsive" src="../emailicon.png" alt="email"/></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><img class="img-responsive" src="../plugicon.png" alt="plug"/></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );

}

export default Header;
