import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // 🧭 Import navigation
import AOS from "aos";
import "aos/dist/aos.css";
import aboutLogo from "../assets/aboutLogo.png"; // ✅ Should be a transparent PNG
import "./HomeWelcomeBanner.css";

const HomeWelcomeBanner = () => {
  const navigate = useNavigate(); // 🧭 Initialize useNavigate

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleAppointmentClick = () => {
    navigate("/appointment"); // 🧭 Navigate on click
  };

  return (
    <section className="home-banner-section" data-aos="fade-up">
      <div className="home-banner-text">
        <h1>
          Exceptional Care for <span>Everyone</span>
        </h1>
        <p>
        Founded with a vision to bring together clinical excellence and personalized care, our clinic is led by a dedicated team of experienced specialists who bring deep knowledge, skill, and understanding to every patient interaction. Over the years, we’ve had the privilege of walking alongside countless individuals and families on their journey to healing, motherhood, and better health.
          
          <em>"At Sukam, we don’t just treat conditions — we care for people."</em>
        </p>
        <button
          className="appointment-btn"
          data-aos="zoom-in"
          data-aos-delay="300"
          onClick={handleAppointmentClick}
        >
          Appointment
        </button>
      </div>
      <div className="home-banner-image" data-aos="fade-left" data-aos-delay="500">
        <img src={aboutLogo} alt="Welcome" className="home-logo-shadow" />
      </div>
    </section>
  );
};

export default HomeWelcomeBanner;
