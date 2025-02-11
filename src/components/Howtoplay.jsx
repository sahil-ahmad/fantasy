import React from "react";
import Contanthowtoplay from "./Contanthowtoplay";

const Howtoplay = () => {
  return (
    <div>
      <section className="about my-5">
        <div className="container">
          <div className="heading">
            <h2>HOW TO PLAY</h2>
          </div>
          <div className="kk-m">
            <Contanthowtoplay />
            {/* <iframe
              id="iFrameID"
              style={{ border: 0, width: "100%", overflowY: "auto" }}
              src="https://Fookri.co.in/cmspages/how-to-play.html"
            /> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Howtoplay;
