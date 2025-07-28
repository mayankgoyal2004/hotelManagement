import React from "react";
import line from "../../assets/Line.png";
import slider from "../../assets/Slider.png";
import star from "../../assets/Star.png"
import circle from "../../assets/circelm.png";
import "../../utils-css/hero2css/Client.css"



const Clientm = () => {
  return (
    <section className="client-2">
      <div>
        <img src={line} alt="" />
        <h1 className="h1">OUR CUSTOMER REVIEW</h1>
        <h3 className="h3">What Our Client Says</h3>
        <div className="star-1">
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
        </div>
        <p className="p2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          suscipit dolore asperiores nam minus a, exercitationem quae accusamus
          minima labore mollitia, ipsum perferendis voluptate eum magni incidunt
          corrupti ex voluptatibus neque? Quasi exercitationem repudiandae
          dolorem ratione enim, ducimus voluptatum accusantium.
        </p>
        <div className="circle-1">
          <img src={circle} alt="" />
          <div>
            <h6 className="jack">jacksonDean</h6>
            <h3 className="guest">Guest</h3>
          </div>
          
        </div>
        <img className="slider-1" src={slider} alt="" />
      </div>
    </section>
  );
};

export default Clientm;
