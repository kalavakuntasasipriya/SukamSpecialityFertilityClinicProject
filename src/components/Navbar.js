import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.jpg";
import { FaPhoneAlt } from "react-icons/fa";
import EmergencyModal from "./EmergencyModal";
import { FaHome, FaFileMedicalAlt, FaCalendarAlt } from 'react-icons/fa';
import { useLocation } from "react-router-dom";



const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [subDropdownOpen, setSubDropdownOpen] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showEmergencyModal, setShowEmergencyModal] = useState(false);

  const navigate = useNavigate();




  const location = useLocation();

  const handleHomeLinkClick = (e) => {
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      closeMenu();
    }
  };
  const handleLogoClick = (e) => {
    e.preventDefault();
    // Navigate to the home page
    navigate("/");
    // Scroll to the top of the page after navigating
    window.scrollTo({ top: 0, behavior: "smooth" });
    closeMenu();
  };
  const closeMenu = () => {
    setMenuOpen(false);
    setDropdownOpen(null);
    setSubDropdownOpen(null);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo" onClick={handleLogoClick}>
          <img src={logo} alt="Logo" />
        </Link>

        <button className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "❌" : "☰"}
        </button>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <Link to="/" onClick={handleHomeLinkClick}>Home</Link>
          <Link to="/about" onClick={closeMenu}>About</Link>

          {/* Treatment Dropdown */}
<div
  className="dropdown"
  onMouseEnter={() => setDropdownOpen("treatment")}
  onMouseLeave={() => {
    setDropdownOpen(null);
    setSubDropdownOpen(null);
  }}
>
  <div className="dropbtn">Specialties ▾</div>
  <div className={`dropdown-content ${dropdownOpen === "treatment" ? "show" : ""}`}>
    
    {/* General Surgery */}
    <div
      className="dropdown-subsection"
      onMouseEnter={() => setSubDropdownOpen("generalSurgery")}
      onMouseLeave={() => setSubDropdownOpen(null)}
    >
      <div className="sub-btn">General Surgery</div>
      <div className={`sub-dropdown ${subDropdownOpen === "generalSurgery" ? "show" : ""}`}>
        <Link to="/services/surgery" onClick={closeMenu}>Hernia</Link>
        <Link to="/services/surgery" onClick={closeMenu}>Varicose Veins</Link>
        <Link to="/services/surgery" onClick={closeMenu}>Fatty Liver</Link>
        <Link to="/services/surgery" onClick={closeMenu}>Piles</Link>
        <Link to="/services/surgery" onClick={closeMenu}>Foot Ulcer Care</Link>
        <Link to="/services/surgery" onClick={closeMenu}>Gall stones</Link>
        <Link to="/services/surgery" onClick={closeMenu}>Neck swellings</Link>
        <Link to="/services/surgery" onClick={closeMenu}>Testicular swellings</Link>
      </div>
    </div>

    {/* Obstetrics & Gynaecology */}
    <div
      className="dropdown-subsection"
      onMouseEnter={() => setSubDropdownOpen("obgyn")}
      onMouseLeave={() => setSubDropdownOpen(null)}
    >
      <div className="sub-btn">Obstetrics & Gynaecology</div>
      <div className={`sub-dropdown ${subDropdownOpen === "obgyn" ? "show" : ""}`}>
        <Link to="/services/pregnancy" onClick={closeMenu}>Pregnancy Care</Link>
        <Link to="/services/pregnancy" onClick={closeMenu}>Deliveries</Link>
        <Link to="/services/pregnancy" onClick={closeMenu}>Menstrual and Bleeding</Link>
        <Link to="/services/pregnancy" onClick={closeMenu}>Ectopic Pregnancies</Link>
        <Link to="/services/pregnancy" onClick={closeMenu}>Menopausal Care</Link>
        <Link to="/services/pregnancy" onClick={closeMenu}>Family Planning</Link>
        <Link to="/services/pregnancy" onClick={closeMenu}>Hysteroscopy</Link>
        <Link to="/services/pregnancy" onClick={closeMenu}>Laparoscopy</Link>
        <Link to="/services/pregnancy" onClick={closeMenu}>Uterine and Ovarian Surgeries</Link>
      </div>
    </div>

    {/* Reproductive Medicine */}
    <div
      className="dropdown-subsection"
      onMouseEnter={() => setSubDropdownOpen("reproductive")}
      onMouseLeave={() => setSubDropdownOpen(null)}
    >
      <div className="sub-btn">Reproductive Medicine</div>
      <div className={`sub-dropdown ${subDropdownOpen === "reproductive" ? "show" : ""}`}>
        <Link to="/services/gynecology" onClick={closeMenu}>PCOD</Link>
        <Link to="/services/gynecology" onClick={closeMenu}>Infertility Issues</Link>
        <Link to="/services/gynecology" onClick={closeMenu}>OITI</Link>
        <Link to="/services/gynecology" onClick={closeMenu}>IUI</Link>
      </div>
    </div>
  </div>
</div>

          {/* Resources Dropdown */}
          <div
            className="dropdown"
            onMouseEnter={() => setDropdownOpen("resources")}
            onMouseLeave={() => setDropdownOpen(null)}
          >
            <div className="dropbtn">Insights ▾</div>
            <div className={`dropdown-content ${dropdownOpen === "resources" ? "show" : ""}`}>
              <Link to="/blogs" onClick={closeMenu}>Blogs</Link>
              <Link to="/gallery" onClick={closeMenu}>Gallery</Link>
              <Link to="/faq" onClick={closeMenu}>FAQ</Link>
            </div>
          </div>

          <Link to="/Contact" onClick={closeMenu}>Contact</Link> {/* Contact link */}
        </div>

        {/* Right Section */}
        <div className="right-section">
          <button className="btns" onClick={() => navigate("/access-lab-reports")}>
            Access Lab Reports
          </button>
          <button className="btns" onClick={() => navigate("/appointment")}>
            Book an Appointment
          </button>
          <button className="btns" id="emergency" onClick={() => setShowEmergencyModal(true)}>
            <FaPhoneAlt className="text-white text-xl mr-1" /> Emergency
          </button>
        </div>
      </div>

      {showEmergencyModal && <EmergencyModal onClose={() => setShowEmergencyModal(false)} />}


                {/* Mobile Bottom Navigation */}
              <div className="bottom-mobile-nav">
                {/* Home Button */}
                <button onClick={() => navigate("/")}>
                  <FaHome /> Home {/* Icon for Home */}
                </button>
                {/* Lab Reports Button */}
                <button onClick={() => navigate("/access-lab-reports")}>
                  <FaFileMedicalAlt /> Lab Reports {/* Icon for Lab Reports */}
                </button>
                {/* Appointment Booking Button */}
                <button onClick={() => navigate("/appointment")}>
                  <FaCalendarAlt /> Book {/* Icon for Appointment Booking */}
                </button>
                {/* Emergency Button */}
                <button id="emergency-bottom" onClick={() => setShowEmergencyModal(true)}>
                  <FaPhoneAlt /> Emergency {/* Icon for Emergency */}
                </button>
              </div>
    </nav>
  );
};

export default Navbar;