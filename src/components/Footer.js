import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaEnvelope
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h4>Home</h4>
          <ul>
            <li><Link to="/promotions">Promotions</Link></li>
            <li><Link to="/experience">Experience</Link></li>
            <li><Link to="/treatments">Treatments</Link></li>
            <li><Link to="/testimonials">Testimonials</Link></li>
            <li><Link to="/approach">Versatile Approach</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/blogs">Recent Blogs</Link></li>
            <li><Link to="/reviews">Reviews</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>About</h4>
          <ul>
            <li><Link to="doctor-profile/dr-manoj-karthik">Dr. Manoj Karthik</Link></li>
            <li><Link to="doctor-profile/dr-anitha-a-manoj">Dr. Anitha A Manoj</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Treatments</h4>
          <ul>
            <li><Link to="PregnancyTreatment">Pregnancy</Link></li>
            <li><Link to="/treatments/pcod">PCOD</Link></li>
            <li><Link to="/treatments/uterine-ovarian-surgeries">Uterine / Ovarian Surgeries</Link></li>
            <li><Link to="/treatments/fertility">Fertility Issues</Link></li>
            <li><Link to="/treatments/thyroid-surgeries">Thyroid Surgeries</Link></li>
            <li><Link to="/treatments/liver-disease">Chronic Liver Disease</Link></li>
            <li><Link to="/treatments/endoscopy">Endoscopy</Link></li>
            <li><Link to="/treatments/pancreatic-problems">Pancreatic Problems</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Resources</h4>
          <ul>
            <li><Link to="/blogs">Blogs</Link></li>
            <li><Link to="/events">Events</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Location</h4>
          <ul>
            <li><Link to="locations">Uttarahalli</Link></li>
          </ul>
        </div>
      </div>

      <hr className="footer-divider" />

      <div className="footer-social">
        <a
          href="https://www.facebook.com/sukamspeciality/"
          className="social-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.instagram.com/sukamspecialityclinic/"
          className="social-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="#"
          className="social-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="#"
          className="social-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp />
        </a>
        <a
          href="#"
          className="social-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope />
        </a>
      </div>

      <div className="footer-copyright">
        <p>© 2025 Sukam Speciality and Fertility Clinic, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
