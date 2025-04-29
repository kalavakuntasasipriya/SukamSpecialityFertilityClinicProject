import React from "react";
import { useNavigate } from "react-router-dom";
import "./ExperienceSection.css";
import doctorImg from "../assets/expertise.jpg"; // Ensure the image path is correct

const ExperienceSection = () => {
  const navigate = useNavigate();

  return (
    <section className="experience-section">
      {/* LEFT SIDE - Image */}
      <div className="experience-image">
        <img src={doctorImg} alt="Expertise" />
      </div>

      {/* RIGHT SIDE - Text */}
      <div className="experience-content">
        <h1 className="hero-title">
          Where Hope Meets Expertise
          <span className="hero-sub"> – Bangalore, India</span>
        </h1>
        <p className="hero-desc">
          Sukam Specialty Fertility Clinic is a leading healthcare center
          dedicated to advanced infertility treatments and specialized care.
          Equipped with state-of-the-art infrastructure and cutting-edge
          technology, Sukam aims to provide comprehensive solutions for
          individuals and couples facing fertility challenges. Founded by a team
          of experienced medical professionals and healthcare specialists, the
          clinic is led by Dr. Anitha A. Manoj and Dr. Manoj Karthik, a renowned
          gynecologist and fertility expert. Sukam is recognized for its high
          success rates, patient-centric approach, and commitment to delivering
          compassionate and effective fertility treatments.
        </p>
        <div className="hero-buttons">
          <button className="btn blue-btn" onClick={() => navigate("/contact")}>
            View Location
          </button>
          <button className="btn border-btn" onClick={() => navigate("/appointment")}>
            Connect Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
