import React from 'react'
import "../../utils-css/hero2css/room2.css"
import image from "../../assets/Image.png";
import roominfo from "../../assets/Room info.png";
import line from "../../assets/Line.png"
import slider from "../../assets/Slider.png"




const Roomc = () => {
  return (
   <section className='room-sec'>
    <div>
        <img src={line} alt="" />
        <h2>OUR ROOM CHOICES </h2>
        <h3>Luxury Rooms & Suites</h3>
        <div className='romm-img'>
        <img className='room' src={roominfo} alt="" />
        <img className='room-2' src={image} alt="" />

        </div>
        <img className='sliderr' src={slider} alt="" />
    </div>
   </section>
  )
}

export default Roomc