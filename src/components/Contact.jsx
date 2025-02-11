import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <section className="Contact_form_outer">
        <div className="container">
          <div className="Contact_form_outer_heading">
            <div className="row">
              <div className="col-md-12 col-sm-12">
                <h2>
                  Reach Out{" "}
                  <span className="Orange_color">
                    We're Here to Answer Your Questions
                  </span>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="Contact_form_outer_forms">
          <div className="container">
            <div className="row gx-5">
              <div className="col-md-6 col-sm-12">
                <div className="Contact_request">
                  <h3>
                    Request for <span>Contact</span>
                  </h3>
                  <div className="Contact_request_forms">
                    <div className="row">
                      <div className="col-md-12 col-sm-12 mb-2">
                        <div className="input-group">
                          <label>Your full name</label>
                          <input
                            className="form-control"
                            type="text"
                            name
                            placeholder
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 col-sm-12 mb-2">
                        <div className="input-group">
                          <label>Your email address</label>
                          <input
                            className="form-control"
                            type="text"
                            name
                            placeholder
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 col-sm-12 mb-2">
                        <div className="input-group">
                          <label>Short your personal message</label>
                          <textarea
                            className="form-control-large"
                            placeholder
                            name
                            defaultValue={""}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 col-sm-12 mt-4">
                        <div className="input-group">
                          <a
                            href="javascript:void(0);"
                            className="btn_signUp btn_large"
                          >
                            {" "}
                            Get Request
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <div className="Contact_request_map">
                  <div className="Contact_Map_img">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241316.5950574475!2d72.8789412!3d19.08255545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1739267030095!5m2!1sen!2sin"
                      
                      width="100%"
                      height="420"
                      style={{ border: 0, borderRadius: "10px" }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                  <div
                    style={{ borderRadius: "10px" }}
                    className="Contact_Details_Social"
                  >
                    <div className="Contact_Map_address">
                      <div className="row">
                        <div className="col-md-12 col-sm-12">
                          <label>
                            <a href="javascript:void(0);">
                              <i className="fa-light fa-location-dot" />
                            Fookri smart play solutions, 27, inspire cowork, 7th floor, mayuresh square, Plot no. 17,  Sector 15, CBD Belapur, Navi Mumbai, Maharashtra 400614
                            </a>
                          </label>
                        </div>
                        <div className="col-md-12 col-sm-12">
                          <label
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                            }}
                          >
                            <a
                              href="mailto:fookri081@gmail.com"
                              style={{
                                textDecoration: "none",
                                color: "inherit",
                                display: "flex",
                                alignItems: "center", 
                              }}
                            >
                              <FaEnvelope style={{ marginRight: "8px" }} />
                              fookri081@gmail.com
                            </a>
                          </label>
                        </div>
                        <div className="col-md-12 col-sm-12">
                          <label
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                            }}
                          >
                            {/* <a
                              href="tel:+91"
                              style={{
                                textDecoration: "none",
                                color: "inherit",
                                display: "flex",
                                alignItems: "center",
                              }}
                            >
                              <FaPhone style={{ marginRight: "8px" }} />
                              +91 92519 71522
                            </a> */}
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
