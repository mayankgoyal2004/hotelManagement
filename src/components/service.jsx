import React from "react";
import "../utils-css/service.css";
import line from "../assets/Line.png";
import image from "../assets/Image.png";
import gym from "../assets/gym.png";
import right from "../assets/Right.png";
import spa from "../assets/spa.png";
import breakfast from "../assets/breakfast.png"


const Service = () => {
  return (
    <section className="service-section">
      <div>
        <div className="service-line">
          <img src={line} alt="" />
        </div>
        <h1 className="service-h">INTRODUCING OUR SERVICES</h1>
        <div className="service-headding">
          <h1>Amenities that you can Enjoy </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugiat
            blanditiis deleniti perspiciatis minus itaque.
          </p>
        </div>
        <div >
          <div className="service-items">
            <img src={image} alt="" />
            <div className="s-items">
              <img src={gym} alt="" />
              <h6>Workout & Yoga Rooms</h6>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Excepturi nobis alias nisi omnis? Officiis, architecto.
              </p>
              <button>
              <span>  Discover More </span>
                <span>
                  <img src={right} alt="" />
                </span>
              </button>
            </div>
          </div>
          <div className="service-items second">
            
            <div className="s-items">
              <img src={spa} alt="" />
              <h6>Spa. Massage & Sauna</h6>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Excepturi nobis alias nisi omnis? Officiis, architecto.
              </p>
              <button>
              <span>  Discover More </span>
                <span>
                  <img src={right} alt="" />
                </span>
              </button>
            </div>
            <img src={image} alt="" />
          </div>
           <div className="service-items third ">
             <img src={image} alt="" />
            <div className="s-items">
              <img src={breakfast} alt="" />
              <h6>Multiple Cuisines & Beverages</h6>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Excepturi nobis alias nisi omnis? Officiis, architecto.
              </p>
              <button>
              <span>  Discover More </span>
                <span>
                  <img src={right} alt="" />
                </span>
              </button>
            </div>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
