import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";
import "../utils-css/NavBar.css";
import xml from "../assets/arrow.png"
const NavBar = () => {
  return (
    <nav className="nav">
      <div className="top">
        <div>
          <img src={logo} alt="" className="img" />
        </div>
        <div className="nav-items">
          <div className="down-items">
            <button>HOME <span className="arrow"><img src={xml}alt="" /></span></button>
            <div className="down-link" >
              <Link to="/" className="link-down">HOME 1</Link>
              <Link to="/home2" className="link-down" >HOME 2</Link>
            </div>
          </div >
          <Link className="link">ABOUT</Link>
          <Link className="link">SERVICE</Link>
          <div  className="down-items">
            <button className="down-button">PAGES <span className="arrow"><img src={xml} alt="" /></span></button>
            <div className="down-link">
              <Link className="link-down">Room</Link>
              <Link className="link-down">SINGLE ROOM</Link>
              <Link className="link-down"> BLOG</Link>
              <Link className="link-down">SINGLE BLOG</Link>
              <Link className="link-down">404 PAGE</Link>
            </div>
          </div>
          <Link  className="link">CONTACT US</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
