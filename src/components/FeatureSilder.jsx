import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./FeatureSlider.css"; // Add custom styles for buttons

const FeatureSilder = () => {
  const sliderRef = useRef(null); // Create a reference for the Slider component

  const slides = [
    {
      id: 1,
      title: "Live Scoring",
      icon: "./images/icon/fantasy_sports_icon01.png",
    },
    {
      id: 2,
      title: "League Creation",
      icon: "./images/icon/fantasy_sports_icon02.png",
    },
    {
      id: 3,
      title: "Team Management",
      icon: "./images/icon/fantasy_sports_icon03.png",
    },
    {
      id: 4,
      title: "Player Statistics",
      icon: "./images/icon/fantasy_sports_icon04.png",
    },
    {
      id: 5,
      title: "Leaderboards",
      icon: "./images/icon/fantasy_sports_icon05.png",
    },
    {
      id: 6,
      title: "Social Integration",
      icon: "./images/icon/fantasy_sports_icon06.png",
    },
    {
      id: 7,
      title: "Push Notifications",
      icon: "./images/icon/fantasy_sports_icon07.png",
    },
  ];

  // Custom Next Arrow
  const NextArrow = () => (
    <div className="slider-next" onClick={() => sliderRef.current.slickNext()}>
      <i className="fas fa-chevron-right" />
    </div>
  );

  // Custom Previous Arrow
  const PrevArrow = () => (
    <div className="slider-prev" onClick={() => sliderRef.current.slickPrev()}>
      <i className="fas fa-chevron-left" />
    </div>
  );

  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // Disable the default arrows
    centerMode: true, // Enable center mode
    centerPadding: "10px", // Add padding between slides
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: "20px", // Adjust gap for medium screens
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerPadding: "40px", // Adjust gap for small screens
        },
      },
    ],
  };

  return (
    <section className="training-section">
      <div className="container">
        <div className="section-header">
          <span className="section-Small_title">Features of Fookri</span>
          <h2 className="section-title">
            Fantasy <span>Sports App</span>
          </h2>
          <p>
            A set of features that makes Fookri fantasy unique from other
            fantasy apps.
          </p>
        </div>

        {/* Navigation Arrows */}
        {/* <div className="slider-nav-area">
          <NextArrow />
          <PrevArrow />
        </div> */}

        {/* Slider Component */}
        <Slider ref={sliderRef} {...settings}>
          {slides.map((slide) => (
            <div key={slide.id} className="training-item text-center">
              <div className="training-icon">
                <img src={slide.icon} alt={slide.title} />
              </div>
              <div className="training-content">
                <h3 className="title">{slide.title}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default FeatureSilder;
