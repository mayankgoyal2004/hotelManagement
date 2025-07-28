import React from "react";
import line from "../../assets/Line5.png";
import circle from "../../assets/circelm.png";
import star from "../../assets/Star.png";
import LeftArrow from "../../assets/left Arrow.png";
import RightArrow from "../../assets/Right Arrow.png";
import calender from "../../assets/calender.png";
import right from "../../assets/Right.png";
import "../../utils-css/hero2css/homem.css"


const HomeMain = () => {
  return (
    <section className="hero">
      <div className="hero-div-sec">
        <img src={line} alt="" />
        <h1 className="hero-p">BEST PLACE TO RELAX & ENJOY</h1>
        <h1 className="hero-heading">
          Perfect Place to Enjoy <br /> Your Life
        </h1>
        <div className="rating">
          <div className="circle">
            <img src={circle} alt="" />
            <img src={circle} alt="" />
            <img src={circle} alt="" />
          </div>
          <div className="rating-text">
            <p>4.8 Rated Around The World</p>
            <div className="star">
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </div>
          </div>
        </div>
        <div className="hero-arrows">
          <button>
            <img src={LeftArrow} alt="" />
          </button>
          <button>
            <img src={RightArrow} alt="" />
          </button>
        </div>
      </div>
      <div className="right-box">
        <div className="items">
          <label htmlFor=""> Check In</label>
          <div className="wrapper">
            <input type="date" />
            <span>
              <img src={calender} alt="" />
            </span>
          </div>
        </div>
        <div className="items">
          <label htmlFor=""> Check Out</label>
          <div className="wrapper">
            <input type="date" />
            <span>
              <img src={calender} alt="" />
            </span>
          </div>
        </div>
        <div className="box-selection">
          <div className="items">
            <label htmlFor="">Room</label>
            <select name="" id="">
              <option >1</option>
              <option >2</option>
              <option >3</option>
            </select>
          </div>
          <div className="items">
            <label htmlFor="">Guest</label>
            <select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
        </div>
        <div className="bottom-line"><span >Check Availability </span><span><img src={right} alt="" /></span></div>
      </div>
    </section>
  );
};

export default HomeMain;
