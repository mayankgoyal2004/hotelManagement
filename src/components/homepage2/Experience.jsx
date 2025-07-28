import React from 'react'
import "../../utils-css/hero2css/experience.css"
import right from "../../assets/Right.png";


const Experience = () => {
  return (
    <section className='Experience'>
        <h3>Get A Luxurious Experience <br /> With 35% Off Now</h3>
        <button><span>Book Now</span><span><img src={right} alt="" /></span></button>
    </section>
  )
}

export default Experience