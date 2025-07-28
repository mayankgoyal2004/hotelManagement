import React from "react";
import right from "../assets/Right.png";
import LeftArrow from "../assets/left Arrow.png";
import RightArrow from "../assets/Right Arrow.png";
import calender from "../assets/calender.png";
import "../utils-css/Hero.css";

const Hero = () => {
  return (
    <section className="section">
      <div className="section-content">
        <p className="p-line">BEST PLACE TO RELAX & ENJOY</p>
        <h1 className="center-line">
          A Luxurious Way To <br /> Enjoy Your Lif
        </h1>
        <div className="content-line">
          <div className="bottom-line">
            <span className="bottom-line-text">Discover Rooms</span>
            <span className="arrow-1">
              <img src={right} alt="" />
            </span>
          </div>
        </div>
      </div>
      <div className="hero-button">
        <button>
          <img src={LeftArrow} alt="" />
        </button>
        <button>
          <img src={RightArrow} alt="" />
        </button>
      </div>
      <div className="bottom-section">
        <div className="Check value">
          <label htmlFor="">Check In</label>
          <div className="wraper">
          <input type="date" />
          <span>
            <img src={calender} alt="" />
          </span>
          </div>
        </div>
        
       <div className="Check value">
          <label htmlFor="">Check Out</label>
          <div className="wraper">
          <input type="date" />
          <span>
            <img src={calender} alt="" />
          </span>
          </div>
        </div>
        <div className="select value">
          <label htmlFor="">Room</label>
          <select name="" id="">
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
          </select>
        </div>
        <div className="button value">
          <button>
            Check Availability
            <span>
              <img src={right} alt="" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
