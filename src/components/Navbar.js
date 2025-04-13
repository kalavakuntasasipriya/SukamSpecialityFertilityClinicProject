import React, { useState } from "react"; // Import React and useState hook for state management
import { Link, useNavigate } from "react-router-dom"; // Import Link for routing and useNavigate for navigation
import "./Navbar.css"; // Import CSS for styling the Navbar
import logo from "../assets/logo.jpg";
import { FaPhoneAlt, FaHome, FaCalendarAlt, FaFileMedicalAlt } from "react-icons/fa";
import EmergencyModal from "./EmergencyModal"; // Import Emergency Modal component

const Navbar = () => {
  // State to manage the open/closed state of the menu and dropdowns
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [showEmergencyModal, setShowEmergencyModal] = useState(false); // State for showing/hiding the emergency modal

  const navigate = useNavigate(); // Hook to programmatically navigate between pages

  // Toggle the menu between open and closed on mobile view
  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the menu open state
    setDropdownOpen(null); // Close any open dropdowns when the menu is toggled
  };

  // Toggle dropdown visibility when a specific dropdown is clicked
  const toggleDropdown = (dropdown) => {
    setDropdownOpen(dropdownOpen === dropdown ? null : dropdown); // Open/close the dropdown based on the current state
  };

  // Close the menu and reset any open dropdowns
  const closeMenu = () => {
    setMenuOpen(false); // Close the mobile menu
    setDropdownOpen(null); // Reset the dropdown state
  };

  return (
    <nav className="navbar"> {/* Main Navbar container */}
      <div className="container">
        {/* Logo Section */}
        <Link to="/" className="logo" onClick={closeMenu}> {/* Logo linking to the homepage */}
          <img src={logo} alt="Logo" /> {/* Display logo */}
        </Link>

        {/* Mobile Menu Toggle Button */}
        <button className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? "❌" : "☰"} {/* Show close icon when menu is open, otherwise show hamburger icon */}
        </button>

        {/* Navigation Links - These will be shown in both mobile and desktop views */}
        <div className={`nav-links ${menuOpen ? "active" : ""}`}> {/* Apply 'active' class when menu is open */}
          <Link to="/" onClick={closeMenu}>Home</Link> {/* Home link */}
          <Link to="/about" onClick={closeMenu}>About</Link> {/* About link */}

          {/* Treatment Dropdown */}
          <div className="dropdown">
            <button className="dropbtn" onClick={() => toggleDropdown("treatment")}>
              Treatment ▾ {/* Button text with dropdown arrow */}
            </button>
            <div className={`dropdown-content ${dropdownOpen === "treatment" ? "show" : ""}`}>
              {/* Links for the Treatment dropdown */}
              <Link to="/PregnancyTreatment" onClick={closeMenu}>Pregnancy</Link>
              <Link to="/ThyroidSurgeries" onClick={closeMenu}>Thyroid Surgeries</Link>
              <Link to="/PCODTreatment" onClick={closeMenu}>PCOD</Link>
              <Link to="/chronic" onClick={closeMenu}>Chronic Liver Disease</Link>
              <Link to="/uterine" onClick={closeMenu}>Uterine/Ovarian Surgeries</Link>
              <Link to="/endoscopy" onClick={closeMenu}>Endoscopy</Link>
              <Link to="/fertility" onClick={closeMenu}>Fertility Issues</Link>
              <Link to="/pancreas" onClick={closeMenu}>Pancreatic Problems</Link>
            </div>
          </div>

          {/* Resources Dropdown */}
          <div className="dropdown">
            <button className="dropbtn" onClick={() => toggleDropdown("resources")}>
              Resources ▾ {/* Button text with dropdown arrow */}
            </button>
            <div className={`dropdown-content ${dropdownOpen === "resources" ? "show" : ""}`}>
              {/* Links for the Resources dropdown */}
              <Link to="/blogs" onClick={closeMenu}>Blogs</Link>
              <Link to="/gallery" onClick={closeMenu}>Gallery</Link>
              <Link to="/faq" onClick={closeMenu}>FAQ</Link>
            </div>
          </div>

          <Link to="/contact" onClick={closeMenu}>Contact</Link> {/* Contact link */}

                  {/* Right Section Buttons */}
                  <div className="right-section">
                    {/* Button to access lab reports */}
                    <button className="btns" onClick={() => navigate("/access-lab-reports")}>
                      Access Lab Reports
                    </button>
                    {/* Button to book an appointment */}
                    <button className="btns" onClick={() => navigate("/appointment")}>
                      Book an Appointment
                    </button>
                    {/* Button to open emergency modal */}
                    <button className="btns" id="emergency" onClick={() => setShowEmergencyModal(true)}>
                      <FaPhoneAlt className="text-white text-xl mr-1" /> Emergency
                    </button>
                  </div>
        </div>
      </div>

      {/* Emergency Modal */}
      {showEmergencyModal && <EmergencyModal onClose={() => setShowEmergencyModal(false)} />} {/* Show EmergencyModal if state is true */}


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

export default Navbar; // Export Navbar component for use in other parts of the application
