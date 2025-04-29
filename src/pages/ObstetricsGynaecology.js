import React from 'react';
import { Link } from "react-router-dom";
import './ObstetricsGynaecology.css';
import heroBg from '../assets/Website_Images-03.jpg';
import anitha from '../assets/profile1.png';

const ObstetricsGynaecology = () => {
  return (
    <div className="general-surgery-page">
      {/* Top Banner Section */}
      <div className="surgery-banner">
        <div className="hero-section" style={{ backgroundImage: `url(${heroBg})` }}>
        </div>
        <div className="surgery-hero-text">
          <h1>Comprehensive Obstetrics Gynaecology Care</h1>
          <p>Your health is in expert hands – safe, advanced, and compassionate surgical solutions</p>
          <Link to="/doctor-profile/dr-anitha-a-manoj" className="consult-button-anitha">Consult Now</Link>
        </div>
      </div>

      <section className="doctor-treatments-section">
            {/* Left: Doctor Profile & Expertise */}
            <div className="doctor-profile-box-anitha">
                <img src={anitha} alt="Dr. Anitha A Manoj" className="doctor-img-anitha" />
                <h2>Dr. Anitha A Manoj</h2>
                <p className="qualification-anitha">MBBS, MS (OBG), FMAS, FRM</p>
                <p className="designation-anitha">Senior Consultant Obstetrician & Gynecologist | Fertility Specialist</p>
                <ul className="expertise-list">
                    <li className= "year-of-epxerience"><span >👨‍⚕️</span> 16+ Years of Experience</li>
                    <li><span>🧬</span> Infertility evaluation and treatment</li>
                    <li><span>🤰</span> High-risk pregnancy care</li>
                    <li><span>🧫</span> Uterine and Ovarian disorders</li>
                    <li><span>🩺</span> Menstrual and hormonal disorders</li>
                    <li><span>🔬</span> Hystero-Laparoscopic surgeries</li>
                </ul>
                <Link to="/doctor-profile/dr-anitha-a-manoj" className="consult-button-anitha">
                        Consult Now
                </Link>
            </div>
            

            {/* Right: Treatment Categories */}
            <div className="treatment-categories-box-anitha">
                <h2>Our Treatment Categories</h2>
                <div className="treatment-grid-anitha">
                  <div className="treatment-card-anitha">
                    <span className="icon-large">🤰</span>
                    <h3>Pregnancy Care</h3>
                    <p>Expert care for a healthy and safe pregnancy journey.</p>
                  </div>
                  <div className="treatment-card-anitha">
                    <span className="icon-large">👶</span>
                    <h3>Deliveries</h3>
                    <p>Safe and smooth delivery experiences for both mother and baby.</p>
                  </div>
                  <div className="treatment-card-anitha">
                    <span className="icon-large">🔴</span>
                    <h3>Menstrual and Bleeding</h3>
                    <p>Expert care for menstrual health and abnormal bleeding issues.</p>
                  </div>
                  <div className="treatment-card-anitha">
                    <span className="icon-large">🩸</span>
                    <h3>Ectopic Pregnancies</h3>
                    <p>Expert care for ectopic pregnancies, ensuring safety.</p>
                  </div>
                  <div className="treatment-card-anitha">
                    <span className="icon-large">🌸</span>
                    <h3>Menopausal Care</h3>
                    <p>Expert care and guidance for managing menopausal symptoms and ensuring comfort.</p>
                  </div>
                  <div className="treatment-card-anitha">
                    <span className="icon-large">👨‍👩‍👧‍👦</span>
                    <h3>Family Planning</h3>
                    <p>Personalized advice and options for effective family planning and reproductive health.</p>
                  </div>
                  <div className="treatment-card-anitha">
                    <span className="icon-large">🔬</span>
                    <h3>Hysteroscopy</h3>
                    <p>Minimally invasive procedure to examine and treat conditions inside the uterus.</p>
                  </div>
                  <div className="treatment-card-anitha">
                    <span className="icon-large">🔍</span>
                    <h3>Laparoscopy</h3>
                    <p>Minimally invasive surgery for accurate diagnosis and treatment with small incisions.</p>
                  </div>
                  <div className="treatment-card-anitha">
                    <span className="icon-large">🩺</span>
                    <h3>Uterine and Ovarian Surgeries</h3>
                    <p>Advanced surgical treatments for uterine and ovarian conditions with precision and care.</p>
                  </div>
                </div>
              </div>

        </section>



      {/* Overview and Key Aspects */}
      <section className="department-overview-anitha-og">
          <div className="overview-content-anitha-og">
            <h2 className="overview-title-anitha-og">About Our Obstetrics & Gynecology Department</h2>
            <p className="overview-description-anitha-og">
              Our Obstetrics & Gynecology department at Sukham Speciality Clinic is dedicated to women’s 
              health across all stages of life—from adolescence to pregnancy, childbirth, and menopause. 
              We blend compassionate care with modern treatments for every woman’s unique needs.
            </p>
          </div>

          <div className="why-choose-section-anitha-og">
            <h3 className="why-title-anitha-og">Why Choose Us?</h3>
            <div className="benefits-grid-anitha-og">
              <div className="benefit-card-anitha-og">
                <i className="fas fa-female"></i>
                <h4>Holistic Women's Care</h4>
                <p>Comprehensive health services tailored to each stage of a woman’s life.</p>
              </div>
              <div className="benefit-card-anitha-og">
                <i className="fas fa-baby"></i>
                <h4>Safe Pregnancy & Delivery</h4>
                <p>Expert prenatal, birthing, and postnatal care in a nurturing environment.</p>
              </div>
              <div className="benefit-card-anitha-og">
                <i className="fas fa-heartbeat"></i>
                <h4>Advanced Diagnostics</h4>
                <p>Ultrasound, scans, and lab facilities ensure accurate and timely results.</p>
              </div>
              <div className="benefit-card-anitha-og">
                <i className="fas fa-user-nurse"></i>
                <h4>Compassionate Team</h4>
                <p>Female-friendly staff and gynecologists who listen, support, and guide.</p>
              </div>
            </div>
          </div>
        </section>

    </div>
  );
};

export default ObstetricsGynaecology;
