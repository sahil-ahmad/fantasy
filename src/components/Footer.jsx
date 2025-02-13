import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="footer-section pt-120">
        <div className="footer-bg">
          <img src="images/bg/bg-4.png" alt="bg" />
        </div>
        <div className="footer-element">
          <img src="images/element/element-6.png" alt="element" />
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-12">
              <div className="footer-top">
                <div className="footer-logo">
                  <a href="index.html" className="site-logo">
                    <img src="images/Fookri.png" alt="logo" style={{width:'85px'}}/>
                  </a>
                </div>
                <ul className="footer-social">
                  <li>
                    <a href="https://www.facebook.com/games.fookri?igsh=b2I5aXZ4MnMyZHBh">
                      <FaFacebook />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/games.fookri?igsh=b2I5aXZ4MnMyZHBh">
                      <FaInstagram />
                    </a>
                  </li>
                  <li>
                    <a href="https://x.com/fookri2?t=csyNspspwzbMPJVZJhsrSg&s=09">
                      <FaTwitter />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="footer-widget">
                <p>
                  Fookri is neither associated or affiliated not claims any
                  association or affiliation in any manner with any sports
                  governing leagues or authorities, including (but not limited
                  to) the Board of Control for Cricket in India (BCCI), unless
                  specified otherwise.
                </p>
                <p>
                  <a href="mailto:support@Fookri.co.in">fookri081@gmail.com</a>
                </p>
                <span>
                  <a href="https://play.google.com/store/apps/details?id=com.Fookri.fantasy">
                    <img
                      src="images/play_store_logo.png"
                      alt="Play Store Logo"
                    />
                  </a>
                </span>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3">
              <div className="footer-widget">
                <h3>Pages</h3>
                <ul className="footer-list">
                  <li>
                    <Link to={"/"}>
                      <a>Home</a>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/About"}>
                      <a>About</a>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/Howtoplay"}>
                      <a>How to play</a>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/FantasyPoint"}>
                      <a>Fantasy Point System</a>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/Contact"}>
                      <a>Contact Us</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3">
              <div className="footer-widget">
                <h3>Information</h3>
                <ul className="footer-list">
                  <li>
                    <a href="/PrivacyPolicy">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="/TermCondition">Terms &amp; Conditions</a>
                  </li>
                  <li>
                    <a href="/">Withdrawal Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-12 text-center">
              <div className="copyright-area">
                <div className="row">
                  <div className="col-lg-7 col-md-12 col-sm-12 text-lg-start text-md-center text-sm-center ">
                    <p>
                      Copyright © 2025 Fookri All right reserved.
                    </p>
                  </div>
                  {/* <div className="col-lg-5 col-md-12 col-sm-12 text-lg-end">
                    <p>
                      Developed by
                      <a
                        href="#"
                        className="company-name "
                      >
                        
                      </a>
                    </p>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
