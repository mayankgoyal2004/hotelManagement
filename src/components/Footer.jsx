import React from "react";
import logo from "../assets/Logo.png";
import active from "../assets/Active.png";
import line from "../assets/lin55.png";
import social from "../assets/SocialM.png";
import "../utils-css/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-upper">
        <div className="footer-logo-section">
          <img src={logo} alt="" className="f-logo" />
          <p className="footer-content">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero quis unde minima ex, quisquam autem?
          </p>
        </div>

        <div className="footer-links">
          <h4>USEFUL LINKS</h4>
          <div className="link-section">
            <Link className="link">HOME</Link>
            <Link className="link">ABOUT</Link>
            <Link className="link">SERVICE</Link>
            <Link className="link">ROOM</Link>
          </div>
        </div>

        <div className="footer-subscribe">
          <h4>SUBSCRIBE</h4>
          <p>Don't miss to subscribe our news,<br /> kindly fill the form below</p>
          <div className="subscribe-box">
            <input type="email" placeholder="Your Email Here" />
            <button><img src={active} alt="" /></button>
          </div>
        </div>
      </div>


      <div className="footer-social">
      <img className="img-f" src={line} alt="" />
      
        <img src={social} alt="" />
     
      <img src={line} alt="" />
        
      </div>

    
      <div className="footer-bottom">
        <p>© 2025 Imperial Grand Hotel. All Rights Reserved.</p>
        <div className="footer-links-bottom">
          <span>Privacy Policy</span>
          <span>Terms of Use</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
