import React from 'react'
import "../utils-css/client.css"
import line from "../assets/Line5.png"
import client1 from "../assets/client1.png"
import star from "../assets/Star.png"

export const Client = () => {
  return (
    <section className='client'>

        <div className='client-upper'>
<img src={line} alt="" />
<h1>OUR CUSTOMER REVIEW</h1>
<h3>What Our Client Says</h3>
</div>
<div className='client-lower'>
    <img src={client1} alt="" />
    <div className='client-items'> 
        <div className='sta'>
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
        </div>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, numquam fugiat.<br/> Voluptas ipsa iusto dolores culpa rerum, et maxime sapiente?</p>
        <h6>Jackson Dean</h6>
<h1>Guest</h1>
    </div>
</div>

    </section>
  )
}
