import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";

const TestimonialsSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  // Array of testimonial data
  const testimonials = [
    {
      name: "Anushka Singh",
      location: "Pune, Maharashtra",
      rating: 5,
      feedback:
        "Very nice fantasy app for IPL because it gives giveaway and mega contest giveaway free mega contest. Download it now @Fookri!",
    },
    {
      name: "Irfan Khan",
      location: "Bangalore, Karnataka",
      rating: 5,
      feedback:
        "Very good fantasy app. Instant withdrawal available any time. Very good helpline customer support system 24/7💥.",
    },
    {
      name: "Nagraj Kudari",
      location: "Hyderabad, Telangana",
      rating: 5,
      feedback:
        "I am very happy that your app follows these rules: minimum of 1 player across all player categories allowed and a maximum of 10 players from one team allowed.",
    },
  ];

  return (
    <section className="training-section">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="section-header-wrapper">
              <div className="section-header">
                <h2 className="section-title">
                  What Our <span>Clients Say</span>
                </h2>
                <p>
                  Fookri is a purely skilled-based games platform that offers
                  free leagues or private matches thrilling experiences similar
                  to real-life games.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-12">
            <div className="clientreviews_slider-area">
              <Slider {...settings}>
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="clientreviews_slider_content">
                    <div className="Right_part">
                      <div className="clientreviews_slider_boxes">
                        <div className="clientreviews_slider_boxes_Left">
                          <h3>{testimonial.name}</h3>
                          <p>{testimonial.location}</p>
                        </div>
                        <div className="clientreviews_slider_boxes_Right">
                          <span>
                            {Array.from({ length: testimonial.rating }).map(
                              (_, starIndex) => (
                                <FaStar
                                  key={starIndex}
                                  style={{
                                    color: "gold",
                                    fontSize: "20px",
                                    margin: "2px",
                                  }}
                                />
                              )
                            )}
                          </span>
                        </div>
                      </div>
                      <p>{testimonial.feedback}</p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
