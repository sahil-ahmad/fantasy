import React from "react";
import img1 from "../../public/images/element/element-81.png";
import "../css/style.css";
import FeatureSilder from "./FeatureSilder";
import SlickSlider from "./Gameslider";
import TestimonialsSlider from "./TestimonialsSlider";
import { FaDownload } from "react-icons/fa";
const Home = () => {
  return (
    <div>
      <section
        className="banner-section bg_img"
        style={{
          backgroundImage: "url(./images/bg/bg-5.png)",
        }}
      >
      
        <div className="banner-element-two">
          <img src="./images/element/element-26.png" alt="Fookri" />
        </div>
        <div className="banner-thumb-area">
          <div className="banner-thumb-element-one">
            <img src="./images/element/element-11.png" alt="Fookri" />
          </div>
          <div className="banner-thumb-element-two">
            <img src="./images/element/element-12.png" alt="Fookri" />
          </div>
          <div
            className="banner-thumb"
            // data-aos="fade-up"
            data-aos-duration={2500}
          >
            <img src={img1} alt="Fookri" />
          </div>
        </div>

        <div className="container-fluid">
          <div className="row align-items-end mb-30-none">
            <div className="col-xl-6 col-lg-12 mb-30">
              <div
                className="banner-content"
                // data-aos="fade-right"
                data-aos-duration={1800}
              >
                <div className="Mobile_Ver_App">
                  <span className="sub-title">Join India's Most Loved</span>
                  <h1 className="title">
                    Fantasy <span>Sports App</span>
                  </h1>
                  <h3 className="inner-title">
                    Download Fookri Today &amp; Build Your Dream Team!
                  </h3>
                  <ul>
                    <li>Over 4.2M Downloads &amp; Counting!</li>
                    <li>Craft Your Ultimate Fantasy Team</li>
                    <li>
                      Proudly{" "}
                      <a href="https://fifs.in/certificates/certificate-fookri/">
                        <img src="./images/fifs_logo.png" alt="Fifs Logo" />
                      </a>{" "}
                      Certified for Fair Play
                    </li>
                  </ul>
                  <div className="banner-arrow">
                    <img
                      src="./images/element/element-10.png"
                      alt="Fantasy Sports App"
                    />
                  </div>
                </div>
                <div className="banner-widget">
                  <div className="banner-widget-wrapper">
                    <div className="banner-widget-left">
                      <div className="banner-widget-thumb">
                        <span className="playStore_Btn">
                          <a href="#">
                            <img
                              src="./images/play_store_logo.png"
                              alt="Play Store"
                            />
                          </a>
                        </span>
                      </div>
                    </div>
                    {/* <div className="banner-widget-right">
                      <div className="banner-widget-btn">
                        <a
                          style={{ display: "flex", gap: "3px" }}
                          href="public/Fookri.apk"
                          className="btn--base"
                          // download={Fookri}
                          // target="_blank"
                          // rel="noopener noreferrer"
                        >
                          Download Apk
                          <FaDownload />
                        </a>
                      </div>
                    </div> */}
                    <div className="banner-widget-right">
                      <div className="banner-widget-btn">
                        <a
                          style={{ display: "flex", gap: "3px" }}
                          href="/apk/fookri.apk"
                          className="btn--base"
                          download="fookri.apk"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Download Apk
                          <FaDownload />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="about-section bg-overlay-black bg_img"
        style={{
          backgroundImage: "url(./images/bg/bg-2.png)",
        }}
      >
        <div className="section-logo-text">
          <span className="title">Fookri</span>
        </div>
        <div className="container">
          <div className="row justify-content-center mb-30-none">
            <div className="col-xl-12 col-lg-12 mb-30">
              <div className="about-content-area">
                <div className="section-header white">
                  <h2 className="section-title">
                    ABOUT <span>Fookri</span>
                  </h2>
                  <p>
                    Experience the thrill of fantasy sports on Fookri, India's
                    fastest-growing fantasy sports app with over 4.2 M+ plus
                    downloads. Showcase your skills, join multiple contests, and
                    compete to be the champion. Win exciting prizes while
                    enjoying your favorite sports. Download Fookri now and
                    unleash your competitive spirit!
                  </p>
                </div>
                <div className="about-item-area">
                  <div className="about-item mb-30">
                    <div className="about-icon">
                      <img
                        src="./images/icon/icon-1.png"
                        alt="CHOOSE YOUR SQUAD"
                      />
                    </div>
                    <div className="about-content">
                      <h3 className="title">CHOOSE YOUR SQUAD</h3>
                      <p>
                        Take your turn drafting your dynasty. Choose your squad
                        and knock out opponents in a fun and exciting way.
                      </p>
                    </div>
                  </div>
                  <div className="about-item mb-30">
                    <div className="about-icon">
                      <img src="./images/icon/icon-2.png" alt="REALISTIC" />
                    </div>
                    <div className="about-content">
                      <h3 className="title">REALISTIC</h3>
                      <p>
                        Manage player bonuses, rewards, loyalty points in
                        real-time. Monitor your player, track and calculate your
                        earnings.
                      </p>
                    </div>
                  </div>
                  <div className="about-item mb-30">
                    <div className="about-icon">
                      <img
                        src="./images/icon/icon-2-1.png"
                        alt="PRACTICE TEST"
                      />
                    </div>
                    <div className="about-content">
                      <h3 className="title">PRACTICE TEST</h3>
                      <p>
                        Beat out competitors and get hands-on practice play
                        against other players to get ready for higher
                        performance in upcoming games.
                      </p>
                    </div>
                  </div>
                  <div className="about-item mb-30">
                    <div className="about-icon">
                      <img
                        src="./images/icon/icon-2-2.png"
                        alt="ROUND THE CLOCK CUSTOMER SERVICE SUPPORT"
                      />
                    </div>
                    <div className="about-content">
                      <h3 className="title">
                        ROUND THE CLOCK CUSTOMER SERVICE SUPPORT
                      </h3>
                      <p>
                        We focus on providing the best customer service possible
                        to the community. Our customer service advisers are
                        trained and dedicated to catering solutions to all your
                        queries.
                      </p>
                    </div>
                  </div>
                  <div className="about-item mb-30">
                    <div className="about-icon">
                      <img
                        src="./images/icon/icon-2-3.png"
                        alt="SECURE CHECKOUT AND EASY PAYMENT"
                      />
                    </div>
                    <div className="about-content">
                      <h3 className="title">
                        SECURE CHECKOUT AND EASY PAYMENT
                      </h3>
                      <p>
                        WWW accept multiple payment options as per the
                        flexibility of the user to purchase. Get your winning
                        amount instantly transferred to your account.
                      </p>
                    </div>
                  </div>
                  <div className="about-item mb-30">
                    <div className="about-icon">
                      <img
                        src="./images/icon/icon-2-4.png"
                        alt="A TRUSTED RETAILER IN THE INDUSTRY"
                      />
                    </div>
                    <div className="about-content">
                      <h3 className="title">
                        A TRUSTED RETAILER IN THE INDUSTRY
                      </h3>
                      <p>
                        Over the years, we have been working to ensure that
                        customers meet their expectations and demands. Over
                        time, the community has grown with more than thousands
                        of happy and loyal customers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="feature-section feature-gray bg--gray">
        <div
          className="feature-element"
          // data-aos="fade-right"
          data-aos-duration={1200}
        >
          <img src="./images/element/element-3.png" alt="Fantasy Sports" />
        </div>
        <div className="container">
          <div className="row justify-content-center mb-40-none">
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30">
              <div
                className="feature-item"
                //
                data-aos-duration={1200}
              >
                <div className="feature-icon-area">
                  <div className="feature-icon">
                    <img src="./images/icon/icon-6.png" alt="SIGN UP" />
                  </div>
                  <div className="feature-number">
                    <span>01</span>
                  </div>
                </div>
                <div className="feature-content">
                  <h4 className="title">SIGN UP</h4>
                  <p>
                    You can easily sign up on Fookri and get ₹300 joining bonus.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30">
              <div
                className="feature-item"
                //
                data-aos-duration={1200}
              >
                <div className="feature-icon-area">
                  <div className="feature-icon">
                    <img src="./images/icon/icon-7.png" alt="DEPOSIT" />
                  </div>
                  <div className="feature-number">
                    <span>02</span>
                  </div>
                </div>
                <div className="feature-content">
                  <h4 className="title">DEPOSIT</h4>
                  <p>The deposit process is very easy on Fookri.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30">
              <div
                className="feature-item"
                //
                data-aos-duration={1200}
              >
                <div className="feature-icon-area">
                  <div className="feature-icon">
                    <img src="./images/icon/icon-62.png" alt="WIN" />
                  </div>
                  <div className="feature-number">
                    <span>03</span>
                  </div>
                </div>
                <div className="feature-content">
                  <h4 className="title">WIN</h4>
                  <p>
                    Join &amp; win multiple content on Fookri- your choice
                    fantasy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="trainer-section bg-overlay-black bg_img"
        style={{
          backgroundImage: "url(./images/bg/bg-2.png)",
        }}
      >
        <div className="container-fluid">
          <div className="row justify-content-center mb-30-none">
            <div className="boxItems">
              <div
                className="trainer-item"
                //
                data-aos-duration={1200}
              >
                <div className="trainer-thumb">
                  <img
                    src="./images/trainer/trainer-1.png"
                    alt="App Download"
                  />
                  <div className="trainer-overlay">
                    <div className="share-area">
                      <ul className="social-list">
                        <li>
                          <a href="#0">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#0">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#0">
                            <i className="fab fa-google-plus-g" />
                          </a>
                        </li>
                        <li>
                          <a href="#0">
                            <i className="fab fa-instagram" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="trainer-content">
                  <h3 className="title">
                    <a href="javascript:void(0);">4.2 M+</a>
                  </h3>
                  <span className="sub-title">APP DOWNLOADS</span>
                </div>
              </div>
            </div>
            <div className="boxItems">
              <div
                className="trainer-item"
                //
                data-aos-duration={1200}
              >
                <div className="trainer-thumb">
                  <img src="./images/trainer/trainer-2.png" alt="PLAYERS" />
                  <div className="trainer-overlay">
                    <div className="share-area">
                      <ul className="social-list">
                        <li>
                          <a href="#0">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#0">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#0">
                            <i className="fab fa-google-plus-g" />
                          </a>
                        </li>
                        <li>
                          <a href="#0">
                            <i className="fab fa-instagram" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="trainer-content">
                  <h3 className="title">
                    <a href="javascript:void(0);">3.5 M+</a>
                  </h3>
                  <span className="sub-title">PLAYERS</span>
                </div>
              </div>
            </div>
            <div className="boxItems">
              <div className="trainer-item" data-aos-duration={1200}>
                <div className="trainer-thumb">
                  <img src="./images/trainer/trainer-3.png" alt="WINNERS" />
                  <div className="trainer-overlay">
                    <div className="share-area">
                      <ul className="social-list">
                        <li>
                          <a href="#0">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#0">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#0">
                            <i className="fab fa-google-plus-g" />
                          </a>
                        </li>
                        <li>
                          <a href="#0">
                            <i className="fab fa-instagram" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="trainer-content">
                  <h3 className="title">
                    <a href="javascript:void(0);">1.3 M+</a>
                  </h3>
                  <span className="sub-title">WINNERS</span>
                </div>
              </div>
            </div>
            <div className="boxItems">
              <div className="trainer-item" data-aos-duration={1200}>
                <div className="trainer-thumb">
                  <img src="./images/trainer/trainer-4.png" alt="TOTAL TEAMS" />
                  <div className="trainer-overlay">
                    <div className="share-area">
                      <ul className="social-list">
                        <li>
                          <a href="#0">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#0">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#0">
                            <i className="fab fa-google-plus-g" />
                          </a>
                        </li>
                        <li>
                          <a href="#0">
                            <i className="fab fa-instagram" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="trainer-content">
                  <h3 className="title">
                    <a href="javascript:void(0);">16458716</a>
                  </h3>
                  <span className="sub-title">TOTAL TEAMS</span>
                </div>
              </div>
            </div>
            <div className="boxItems">
              <div className="trainer-item" data-aos-duration={1200}>
                <div className="trainer-thumb">
                  <img
                    src="./images/trainer/trainer-5.png"
                    alt="App Download"
                  />
                  <div className="trainer-overlay">
                    <div className="share-area">
                      <ul className="social-list">
                        <li>
                          <a href="#0">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#0">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#0">
                            <i className="fab fa-google-plus-g" />
                          </a>
                        </li>
                        <li>
                          <a href="#0">
                            <i className="fab fa-instagram" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="trainer-content">
                  <h3 className="title">
                    <a href="javascript:void(0);">500+</a>
                  </h3>
                  <span className="sub-title">Lakhpati's</span>
                </div>
              </div>
            </div>
            <div className="boxItems">
              <div className="trainer-item" data-aos-duration={1200}>
                <div className="trainer-thumb">
                  <img src="./images/trainer/trainer-6.png" alt="PLAYERS" />
                  <div className="trainer-overlay">
                    <div className="share-area">
                      <ul className="social-list">
                        <li>
                          <a href="#0">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#0">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#0">
                            <i className="fab fa-google-plus-g" />
                          </a>
                        </li>
                        <li>
                          <a href="#0">
                            <i className="fab fa-instagram" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="trainer-content">
                  <h3 className="title">
                    <a href="javascript:void(0);">100+</a>
                  </h3>
                  <span className="sub-title">Crorepati's</span>
                </div>
              </div>
            </div>
            <div className="boxItems">
              <div className="trainer-item" data-aos-duration={1200}>
                <div className="trainer-thumb">
                  <img src="./images/trainer/trainer-7.png" alt="WINNERS" />
                  <div className="trainer-overlay">
                    <div className="share-area">
                      <ul className="social-list">
                        <li>
                          <a href="#0">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#0">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#0">
                            <i className="fab fa-google-plus-g" />
                          </a>
                        </li>
                        <li>
                          <a href="#0">
                            <i className="fab fa-instagram" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="trainer-content">
                  <h3 className="title">
                    <a href="javascript:void(0);">10 Cr+</a>
                  </h3>
                  <span className="sub-title">Daily Winnings</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="training-section">
        <div className="container">
          {/* <div className="row">
            <div className="col-xl-12">
              <div className="section-header-wrapper">
                <div className="section-header">
                  <span className="section-Small_title">
                    Features of Fookri
                  </span>
                  <h2 className="section-title">
                    Fantasy <span>Sports App</span>
                  </h2>
                  <p>
                    A set of features that makes Fookri fantasy unique from
                    other fantasy apps.
                  </p>
                </div>
                <div className="slider-nav-area">
                  <div className="slider-prev">
                    <i className="fas fa-chevron-left" />
                  </div>
                  <div className="slider-next">
                    <i className="fas fa-chevron-right" />
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="row justify-content-center">
            <div className="col-xl-12">
              <div className="training-slider-area">
                <div className="training-slider">
                  <div className="swiper-wrapper">
                    {/* <div className="swiper-slide">
                      <div className="training-item text-center">
                        <div className="training-icon">
                          <img
                            src="./images/icon/fantasy_sports_icon01.png"
                            alt="Live Scoring"
                          />
                        </div>
                        <div className="training-content">
                          <h3 className="title">
                            <a href="javascript:void(0);">Live Scoring</a>
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="training-item text-center">
                        <div className="training-icon">
                          <img
                            src="./images/icon/fantasy_sports_icon02.png"
                            alt="League Creation"
                          />
                        </div>
                        <div className="training-content">
                          <h3 className="title">
                            <a href="javascript:void(0);">League Creation</a>
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="training-item text-center">
                        <div className="training-icon">
                          <img
                            src="./images/icon/fantasy_sports_icon03.png"
                            alt="Team Management"
                          />
                        </div>
                        <div className="training-content">
                          <h3 className="title">
                            <a href="javascript:void(0);">Team Management</a>
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="training-item text-center">
                        <div className="training-icon">
                          <img
                            src="./images/icon/fantasy_sports_icon04.png"
                            alt="Player Statistics"
                          />
                        </div>
                        <div className="training-content">
                          <h3 className="title">
                            <a href="javascript:void(0);">Player Statistics</a>
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="training-item text-center">
                        <div className="training-icon">
                          <img
                            src="./images/icon/fantasy_sports_icon05.png"
                            alt="Leaderboards"
                          />
                        </div>
                        <div className="training-content">
                          <h3 className="title">
                            <a href="javascript:void(0);">Leaderboards</a>
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="training-item text-center">
                        <div className="training-icon">
                          <img
                            src="./images/icon/fantasy_sports_icon06.png"
                            alt="Social Integration"
                          />
                        </div>
                        <div className="training-content">
                          <h3 className="title">
                            <a href="javascript:void(0);">Social Integration</a>
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="training-item text-center">
                        <div className="training-icon">
                          <img
                            src="./images/icon/fantasy_sports_icon07.png"
                            alt="Push Notifications"
                          />
                        </div>
                        <div className="training-content">
                          <h3 className="title">
                            <a href="javascript:void(0);">Push Notifications</a>
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="training-item text-center">
                        <div className="training-icon">
                          <img
                            src="./images/icon/fantasy_sports_icon08.png"
                            alt="Customization"
                          />
                        </div>
                        <div className="training-content">
                          <h3 className="title">
                            <a href="javascript:void(0);">Customization</a>
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="training-item text-center">
                        <div className="training-icon">
                          <img
                            src="./images/icon/fantasy_sports_icon09.png"
                            alt="Multiple Sports"
                          />
                        </div>
                        <div className="training-content">
                          <h3 className="title">
                            <a href="javascript:void(0);">Multiple Sports</a>
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="training-item text-center">
                        <div className="training-icon">
                          <img
                            src="./images/icon/fantasy_sports_icon10.png"
                            alt="Fair Play"
                          />
                        </div>
                        <div className="training-content">
                          <h3 className="title">
                            <a href="javascript:void(0);">Fair Play</a>
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="training-item text-center">
                        <div className="training-icon">
                          <img
                            src="./images/icon/fantasy_sports_icon11.png"
                            alt="Payment Integration"
                          />
                        </div>
                        <div className="training-content">
                          <h3 className="title">
                            <a href="javascript:void(0);">
                              Payment Integration
                            </a>
                          </h3>
                        </div>
                      </div>
                    </div> */}
                    <FeatureSilder />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="screen_slider_section bg-overlay-black bg_img"
        // data-background="./images/bg/bg-3.png"
        style={{
          backgroundImage: "url(./images/bg/bg-1.png)",
          // backgroundSize: 'cover',
          // backgroundPosition: 'center center',
          // backgroundRepeat: 'no-repeat',
          // height: '100%',
        }}
      >
        {/* <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section-header-wrapper">
                <div className="section-header">
                  <h2 className="section-title">
                    Get in the Game{" "}
                    <span>Play Your Favorite Sports on Fookri!</span>
                  </h2>
                  <p>
                    Join the action-packed world of sports on Fookri! Play your
                    favorite games and experience the thrill of competition
                    firsthand.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="screen_slider_section_sliders">
          <div className="row justify-content-center">
            <div className="col-xl-12">
              {/* <div className="clientreviews_slider-area">
                <div className="ScreenSlide_slider">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="screen_slider_section_sliders_content">
                        <span>
                          <img
                            src="./images/screen_slider01.png"
                            alt="Fantasy Sports Contest"
                          />
                        </span>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="screen_slider_section_sliders_content">
                        <span>
                          <img
                            src="./images/screen_slider02.png"
                            alt="Fantasy Sports Contest"
                          />
                        </span>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="screen_slider_section_sliders_content">
                        <span>
                          <img
                            src="./images/screen_slider03.png"
                            alt="Fantasy Sports Contest"
                          />
                        </span>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="screen_slider_section_sliders_content">
                        <span>
                          <img
                            src="./images/screen_slider04.png"
                            alt="Fantasy Sports Contest"
                          />
                        </span>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div> */}
              <SlickSlider />
            </div>
          </div>
        </div>
      </section>

      <section className="training-section">
        <div className="container">
          {/* <div className="row">
            <div className="col-xl-12">
              <div className="section-header-wrapper">
                <div className="section-header">
                  <h2 className="section-title">
                    What Our <span>Clients Say</span>
                  </h2>
                  <p>
                    Fookri is a purely skilled-based games platform that offers
                    free leagues or private matches thrilling experiences
                    similar to real-life games.
                  </p>
                </div>
                <div className="slider-nav-area">
                  <div className="slider-prev">
                    <i className="fas fa-chevron-left" />
                  </div>
                  <div className="slider-next">
                    <i className="fas fa-chevron-right" />
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="row justify-content-center">
            <div className="col-xl-12">
              <div className="clientreviews_slider-area">
                <div className="clientreviews_slider">
                  <TestimonialsSlider />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
