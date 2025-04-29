import React from 'react';
import { Link } from "react-router-dom";
import './GeneralSurgery.css';
import heroBg from '../assets/pregnency1.jpg';
import manoj from '../assets/profile2.png';

const GeneralSurgeryPage = () => {
  return (
    <div className="general-surgery-page">
      {/* Top Banner Section */}
      <div className="surgery-banner">
        <div className="hero-section" style={{ backgroundImage: `url(${heroBg})` }}>
        </div>
        <div className="surgery-hero-text">
          <h1>Comprehensive General Surgery Care</h1>
          <p>Your health is in expert hands – safe, advanced, and compassionate surgical solutions</p>
          <Link to="/doctor-profile/dr-manoj-karthik" className="consult-button-manoj">Consult Now</Link>
        </div>
      </div>

      <section className="doctor-treatments-section">
            {/* Left: Doctor Profile & Expertise */}
            <div className="doctor-profile-box-manoj">
                <img src={manoj} alt="Dr. Manoj Karthik" className="doctor-img-manoj" />
                <h2>Dr. Manoj Karthik</h2>
                <p className="qualification-manoj">MBBS, MS (General Surgery)</p>
                <p className="designation-manoj">Senior General, Laparoscopic & Endoscopic Surgeon</p>
                <ul className="expertise-list">
                    <li><span>👨‍⚕️</span> 22+ Years of Surgical Experience</li>
                    <li><span>🔧</span> Laparoscopic surgeries (gallbladder, appendix, hernia)</li>
                    <li><span>💉</span> Anorectal procedures (piles, fissure, fistula)</li>
                    <li><span>🦋</span> Thyroid and breast surgeries</li>
                    <li><span>🍽️</span> Gastrointestinal surgeries</li>
                    <li><span>🚨</span> Surgical emergencies</li>
                </ul>
                <Link to="/doctor-profile/dr-manoj-karthik" className="consult-button-manoj">
                        Consult Now
                </Link>
            </div>

            {/* Right: Treatment Categories */}
            <div className="treatment-categories-box-manoj">
                <h2>Our Treatment Categories</h2>
                <div className="treatment-grid-manoj">
                  
                    <Link to="/treatments/IndividualTreatment" className="treatment-card-manoj">
                      <span className="icon-large">💢</span>
                      <h3>Hernia</h3>
                      <p>Advanced laparoscopic procedure for effective hernia repair.</p>
                    </Link>

                    <div className="treatment-card-manoj">
                    <span className="icon-large">🦵</span>
                    <h3>Varicose Veins</h3>
                    <p>Laser and minimally invasive treatments for varicose veins.</p>
                    </div>
                    <div className="treatment-card-manoj">
                    <span className="icon-large">🩻</span>
                    <h3>Fatty Liver</h3>
                    <p>Comprehensive care for effective fatty liver management.</p>
                    </div>
                    <div className="treatment-card-manoj">
                    <span className="icon-large">🚽</span>
                    <h3>Piles</h3>
                    <p>Advanced treatment for painless piles relief and recovery.</p>
                    </div>
                    <div className="treatment-card-manoj">
                    <span className="icon-large">🦶</span>
                    <h3>Foot Ulcer Care</h3>
                    <p>Effective treatment for quick healing and relief from foot ulcers.</p>
                    </div>
                    <div className="treatment-card-manoj">
                    <span className="icon-large">🪙</span>
                    <h3>Gall Stones</h3>
                    <p>Minimally invasive treatments for effective gall stone removal.</p>
                    </div>
                    <div className="treatment-card-manoj">
                    <span className="icon-large">🦠</span>
                    <h3>Neck Swellings</h3>
                    <p>Expert care for accurate diagnosis and effective treatment options.</p>
                    </div>
                    <div className="treatment-card-manoj">
                    <span className="icon-large">🩺</span>
                    <h3>Testicular Swellings</h3>
                    <p>Comprehensive treatment for accurate diagnosis and care.</p>
                    </div>
                </div>
                </div>

    </section>
    <section className="department-overview-manoj">
        <div className="overview-content-manoj">
          <h2 className="overview-title-manoj">About Our General Surgery Department</h2>
          <p className="overview-description-manoj">
            At Sukham Speciality Clinic, our General Surgery department delivers precision-based care 
            using minimally invasive techniques, modern tools, and compassionate expertise. 
            We prioritize safe outcomes and faster recovery for every patient.
          </p>
        </div>
        <div className="why-choose-section-manoj">
          <h3 className="why-title-manoj">Why Choose Us?</h3>
          <div className="benefits-grid-manoj">
            <div className="benefit-card-manoj">
              <i className="fas fa-user-md"></i>
              <h4>Expert Surgeons</h4>
              <p>Certified professionals with years of advanced surgical experience.</p>
            </div>
            <div className="benefit-card-manoj">
              <i className="fas fa-microscope"></i>
              <h4>Advanced Tools</h4>
              <p>Equipped with the latest laparoscopic and diagnostic technologies.</p>
            </div>
            <div className="benefit-card-manoj">
              <i className="fas fa-hand-holding-heart"></i>
              <h4>Personalized Care</h4>
              <p>Tailored recovery plans with hands-on pre & post-operative support.</p>
            </div>
            <div className="benefit-card-manoj">
              <i className="fas fa-clinic-medical"></i>
              <h4>Hygienic Facility</h4>
              <p>Modern infrastructure that ensures patient safety and comfort.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default GeneralSurgeryPage;
