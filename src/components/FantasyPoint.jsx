import React from "react";
import Points from "./Points";

const FantasyPoint = () => {
  return (
    <div>
      <section className="about my-5">
        <div className="container">
          <div className="heading">
            <h2>FANTASY POINT SYSTEM</h2>
          </div>
          <div className="kk-m">
            {/* <iframe
              id="iFrameID"
              style={{ border: 0, width: "100%", overflowY: "auto" }}
              src="https://Fookri.co.in/cmspages/how-to-play.html"
            /> */}
            <Points />
          </div>
        </div>
      </section>
    </div>
  );
};

export default FantasyPoint;
