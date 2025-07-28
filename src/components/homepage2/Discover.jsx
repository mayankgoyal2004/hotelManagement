import React from "react";
import "../../utils-css/hero2css/discover.css";
import line from "../../assets/Line.png";
import discoverm from "../../assets/discoverb.png";
import video from "../../assets/VideoButton.png";
import right from "../../assets/Right.png";


const Discover = () => {
  return (
    <section className="discover">
      <div className="discover-right">
        <img className="dis" src={discoverm} alt="" />
        <img className="video" src={video} alt="" />
      </div>
      <div className="discover-left">
        <img src={line} alt="" />
        <h1>Discover our hotel</h1>
        <h2>Enjoy a luxury experience </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
          assumenda hic nulla, eos quisquam ad magnam amet dolores itaque
          doloribus.
        </p>
        <div className="bottom-line1">
          <span className="bottom-line-text1">Discover Rooms</span>
          <span className="arrow-11">
            <img src={right} alt="" />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Discover;
