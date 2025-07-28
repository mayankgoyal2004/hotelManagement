import React from 'react'
import "../../utils-css/hero2css/team2.css"
import line from "../../assets/Line.png"
import team from "../../assets/team2.png"
import team2 from "../../assets/team23.png"


const TeamM = () => {
  return (
    <section className='team2'>
        <img src={line} alt="" />
        <h1>MEET OUR TEAM </h1>
        <h3>Expert Team Persons</h3>
        <div>
            <img src={team} alt="" />
            <img src={team2} alt="" />
            <img src={team} alt="" />
            <img src={team} alt="" />
        </div>
    </section>
  )
}

export default TeamM