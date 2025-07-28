import React from "react";
import line from "../assets/Line.png";
import image11 from "../assets/ite_m.png";
import item22 from "../assets/item22.png";
import item33 from "../assets/item33.png";
import item44 from "../assets/item44.png";
import "../utils-css/team.css";

const Team = () => {
  return (
    <section className="team">
      <div>
        <img src={line} alt="" />
      </div>
      <div className="team-items">
        <h1>MEET OUT TEAM</h1>
        <h2>Expert Team Persons </h2>
      </div>
      <div className="team-image">
        <img src={image11} alt="" />
        <img src={item22} alt="" />
        <img src={item33} alt="" />
        <img src={item44} alt="" />
      </div>
    </section>
  );
};

export default Team;
