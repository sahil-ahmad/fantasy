import React from "react";
import Slider from "react-slick";

const SlickSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768, // Screen width at which settings will apply
        settings: {
          slidesToShow: 1, // Show 1 slide on smaller screens
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Slider data in an array
  const sliderData = [
    {
      id: 1,
      src: "./images/screen_slider01.jpeg",
      alt: "Fantasy Sports Contest 1",
    },
    {
      id: 2,
      src: "./images/screen_slider02.jpeg",
      alt: "Fantasy Sports Contest 2",
    },
    {
      id: 3,
      src: "./images/screen_slider03.jpeg",
      alt: "Fantasy Sports Contest 3",
    },
    {
      id: 4,
      src: "./images/screen_slider04.jpeg",
      alt: "Fantasy Sports Contest 4",
    },
    {
      id: 5,
      src: "./images/screen_slider05.jpeg",
      alt: "Fantasy Sports Contest 5",
    },
    {
      id: 7,
      src: "./images/screen_slider06.jpeg",
      alt: "Fantasy Sports Contest 6",
    },
    {
      id: 8,
      src: "./images/screen_slider07.jpeg",
      alt: "Fantasy Sports Contest 7",
    },
  ];

  return (
    <div className="screen_slider_section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-12">
            <div className="section-header-wrapper">
              <div className="section-header">
                <h2 className="section-title">
                  Get in the Game
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
      </div>

      {/* Slider Component */}
      <Slider {...settings}>
        {sliderData.map((slide) => (
          <div key={slide.id}>
            <img src={slide.src} alt={slide.alt} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlickSlider;
