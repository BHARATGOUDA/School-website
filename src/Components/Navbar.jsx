import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="https://th.bing.com/th/id/OIP.Xd9VTm9-De9hhstPCTcM4wAAAA?pid=ImgDet&rs=1" alt="" />
      </div>
      <ul className="nav-links">
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/academics"}>Academics</Link></li>
        <li><Link to={"/facilities"}>Facilities</Link></li>
        <li><Link to={"/admission"}>Admission</Link></li>
        <li><Link to={"/login"}>Parent Login</Link></li>
      </ul>
      <div className="social-icons">
        <a href="https://www.facebook.com"><i className="fab fa-facebook"></i></a>
        <a href="https://www.youtube.com"><i className="fab fa-youtube"></i></a>
        <a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a>
      </div>
    </nav>
  );
};

export default Navbar;
