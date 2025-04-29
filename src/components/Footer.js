import React from "react";
import "./Footer.css";
import { HashLink as Link } from 'react-router-hash-link';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaEnvelope
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
  <div className="footer-container">

    <div className="footer-section">
      <h4>Home</h4>
      <ul>
        <li><Link smooth to="/#carousel">Promotions</Link></li>
        <li><Link smooth to="/#exceptional-care">Exceptional Care</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link smooth to="/#fertility-experts">Our Expertise</Link></li>
        <li><Link smooth to="/#testimonials">Testimonials</Link></li>
        <li><Link to="/blogs">Recent Blogs</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link smooth to="/#reviews">Reviews</Link></li>
      </ul>
    </div>

    <div className="footer-section">
      <h4>About</h4>
      <ul>
        <li><Link to="/doctor-profile/dr-manoj-karthik">Dr. Manoj Karthik</Link></li>
        <li><Link to="/doctor-profile/dr-anitha-a-manoj">Dr. Anitha A Manoj</Link></li>
      </ul>
    </div>

    <div className="footer-section">
      <h4>Treatments</h4>
      <ul>
        <li><Link to="/services/surgery">General Surgery</Link></li>
        <li><Link to="/services/pregnancy">Obstetrics & Gynaecology</Link></li>
        <li><Link to="/services/gynecology">Reproductive Medicine</Link></li>
      </ul>
    </div>

    <div className="footer-section">
      <h4>Resources</h4>
      <ul>
        <li><Link to="/blogs">Blogs</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
      </ul>
    </div>

    <div className="footer-section">
      <h4>Contact</h4>
      <ul>
        <li><Link to="/Contact">Address</Link></li>
        <li><Link to="/appointment">Book Appointment</Link></li>
        <li><Link to="/access-lab-reports">Lab Access Reports</Link></li>
      </ul>
    </div>

  </div>
</footer>
  );
};

export default Footer;
