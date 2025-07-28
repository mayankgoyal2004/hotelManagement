import React from "react";
import line from "../assets/Line.png";
import item from "../assets/Item.png";
import item2 from "../assets/Item2.png";
import item3 from "../assets/Item3.png";
import item4 from "../assets/Item4.png";
import item5 from "../assets/Item5.png";
import "../utils-css/Room.css";

const Room = () => {
  return (
    <section className="room-section">
      <div>
        <div className="room-line">
          <img src={line} alt="" />
        </div>
        <h1 className="heading">OUR ROOM CHOICES</h1>
        <div className="heading-room">
          <h1>LUXURY ROOMS & SUITES</h1>
        </div>
        <div className="image-upper">
          <img src={item} alt="" />
          <img src={item2} alt="" />
        </div>
        <div className="image-down">
          <img src={item3} alt="" />
          <img src={item4} alt="" />
          <img src={item5} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Room;
