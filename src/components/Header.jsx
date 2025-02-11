import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <header className="header-section header_top" id="header">
        <div className="header">
          <div className="header-bottom-area">
            <div className="container-fluid">
              <div className="header-menu-content">
                <nav className="navbar navbar-expand-xl p-0">
                  <Link to={"/"}>
                    <img src="images/Fookri-logo.png" alt="site-logo" style={{width:'85px'}}/>
                  </Link>
                  <input type="checkbox" id="check" />
                  <label htmlFor="check" className="button">
                    <span />
                    <span />
                    <span />
                  </label>
                  <div className="navbarmenu">
                    <ul className="navbar-nav main-menu ml-auto">
                      <li>
                        <Link to={"/"}>Home</Link>
                      </li>
                      <li>
                        <Link to={"/About"}>About</Link>
                      </li>
                      <li>
                        <Link to={"/Howtoplay"}>How to Play</Link>
                      </li>
                      <li>
                        <Link to={"/FantasyPoint"}>Fantasy Point System</Link>
                      </li>
                      <li>
                        <Link to={"/Contact"}>Contact Us</Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
