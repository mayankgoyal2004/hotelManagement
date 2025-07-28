import React from 'react'
import line from "../assets/Line5.png";
import "../utils-css/addbutton.css";
import AddText from './Addtext';
import Editbutton from './Editbutton';

const Editedsection = () => {
  return (
     <section className="addbutton">
          <img src={line} alt="" />
          <h1>add your preference</h1>
          <h3>WELCOME TO OUR SITE</h3>
          <AddText />
        <Editbutton />
          </section>
  )
}

export default Editedsection