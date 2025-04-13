import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "./TabbedServicesSection.css";
import img1 from "../assets/slide1.jpg";
import img2 from "../assets/slide2.jpg";
import img3 from "../assets/slide3.jpg";
import img4 from "../assets/slide4.jpg";

const TabbedServicesSection = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      id: 1,
      title: "Pregnancy Care",
      description: "Comprehensive maternity support and prenatal care throughout your journey.",
      image: img4,
      link: "/services/pregnancy",
      doctorId: "dr-anitha-a-manoj", // Same doctor
    },
    {
      id: 2,
      title: "General Surgery",
      description: "Safe and advanced surgical procedures with experienced surgeons.",
      image: img2,
      link: "/services/surgery",
      doctorId: "dr-manoj-karthik", // Match DoctorProfile key
    },
    {
      id: 3,
      title: "Gynecology",
      description: "Personalized care for women's health, from adolescence to menopause.",
      image: img3,
      link: "/services/gynecology",
      doctorId: "dr-anitha-a-manoj", // Same doctor
    },
    {
      id: 4,
      title: "Fertility Treatments",
      description: "Comprehensive fertility treatments with expert care tailored to your needsComprehensive fertility treatments with expert care tailored to your needsComprehensive fertility treatments with expert care tailored to your needsComprehensive fertility treatments with expert careComprehensive fertility treatments with expert care tailored to your needsComprehensive fertility treatments with expert care tailored to your needsComprehensive fertility treatments with expert care tailored to your needsComprehensive fertility treatments with expert care tailored to your needsComprehensive fertility treatments with expert care tailored to your needs tailored to your needs.",
      image: img1,
      link: "/services/fertility",
      doctorId: "dr-anitha-a-manoj", // Match DoctorProfile key // Same doctor
    },
    {
      id: 5,
      title: "Pregnancy Care",
      description: "Comprehensive maternity support and prenatal care throughout your journey.",
      image: img4,
      link: "/services/pregnancy",
      doctorId: "dr-anitha-a-manoj", // Same doctor
    },
  ];

  const handlePrev = () => {
    setActiveTab((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveTab((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="services-section-tabbed">
      <h2>Explore More Services</h2>
      <div className="service-tabs-wrapper">
        <div className="service-tabs">
          {services.map((service, index) => (
            <button
              key={service.id}
              className={`service-tab ${index === activeTab ? "active" : ""}`}
              onClick={() => setActiveTab(index)}
            >
              {service.title}
            </button>
          ))}
        </div>
      </div>

      {/* Card */}
      <div className="tabbed-service-card">
        <div className="arrow left" onClick={handlePrev}>
          <FontAwesomeIcon icon={faChevronLeft} className="arrow-icon" />
        </div>

        <div className="card-left">
          <div className="explore-services-image-wrapper">
            <img
              src={services[activeTab].image}
              alt={services[activeTab].title}
              className="explore-services-image"
            />
          </div>
        </div>

        <div className="card-right">
          <h3>{services[activeTab].title}</h3>
          <p>{services[activeTab].description}</p>
          <div className="card-buttons">
            <a className="explore-btn" href={services[activeTab].link}>
              Explore More
            </a>
            <button
              className="find-btn"
              onClick={() => navigate(`/doctor-profile/${services[activeTab].doctorId}`)}
            >
              Find Doctor
            </button>
          </div>
        </div>

        <div className="arrow right" onClick={handleNext}>
          <FontAwesomeIcon icon={faChevronRight} className="arrow-icon" />
        </div>
      </div>
    </section>
  );
};

export default TabbedServicesSection;
