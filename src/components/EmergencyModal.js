// src/components/EmergencyModal.js
import React from "react";
import { FaPhoneAlt, FaTimes } from "react-icons/fa";
import "./EmergencyModal.css";

const EmergencyModal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <div className="modal-header">
          <h3>Emergency Helpline</h3>
          <FaTimes className="close-icon" onClick={onClose} />
        </div>
        <hr />
        <div className="modal-content">
          <a href="tel:18001025555" className="phone-link">
            <span className="phone-number">+91 910 810 8980</span>
            <FaPhoneAlt className="phone-icon" />
          </a>
          <a href="tel:18002026666" className="phone-link">
            <span className="phone-number">+91 9449 6288 23</span>
            <FaPhoneAlt className="phone-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default EmergencyModal;
