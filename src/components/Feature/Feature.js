import React from "react";
import Marquee from "react-fast-marquee";
import image from "./dot.svg";

const Feature = () => {
  return (
    <div className="feature">
      <h2>
        Featured In <span style={{ color: "aqua" }}>Publications</span>
      </h2>
      <Marquee className="marquee"  gradient={false} speed={40}>
        <img src={image} />
        <img src={image} />
        <img src={image} />
      
      </Marquee>
    </div>
  );
};

export default Feature;
