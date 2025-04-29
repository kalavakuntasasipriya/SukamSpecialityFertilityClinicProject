import React from "react";
import { useNavigate } from "react-router-dom";
import "./TabbedServicesSection.css";
import img1 from "../assets/Website_Images-0101.jpg";
import img2 from "../assets/Website_Images-03.jpg";
import img3 from "../assets/Website_Images-04.jpg";

const ServicesShowcase = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "General Surgery",
      description: "Advanced surgical procedures with experienced specialists and modern equipment.",
      image: img2,
      doctorId: "dr-manoj-karthik",
      link: "/services/surgery",
      gradient: "linear-gradient(to right, #00c6ff, #0072ff)",
      icon: "💉", // Example icon, can replace with an actual one.
    },
    {
      title: "Obstetrics & Gynaecology",
      description: "Holistic care for women, from adolescence to maternity and beyond.",
      image: img1,
      doctorId: "dr-anitha-a-manoj",
      link: "/services/pregnancy",
      gradient: "linear-gradient(to right, #ff7e5f, #feb47b)",
      icon: "🤰", // Example icon, can replace with an actual one.
    },
    {
      title: "Reproductive Medicine",
      description: "Compassionate, science-backed fertility care tailored to your journey.",
      image: img3,
      doctorId: "dr-anitha-a-manoj",
      link: "/services/gynecology",
      gradient: "linear-gradient(to right, #8e2de2, #4a00e0)",
      icon: "👶", // Example icon, can replace with an actual one.
    },
  ];

  return (
    <div className="showcase-section">
      <h2 className="modern-section-title">Explore Our Services</h2>
      <div className="showcase-grid">
        {services.map((service, index) => (
          <div key={index} className="showcase-card" style={{ background: service.gradient }}>
            <div className="card-inner">
              <div className="card-front">
                <div className="card-img-wrapper">
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="card-body">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className="modern-buttons">
                  <button
  className="modern-btn primary"
  onClick={() => navigate(service.link)}
>
  Explore More
</button>
                    <button onClick={() => navigate(`/doctor-profile/${service.doctorId}`)} className="modern-btn secondary">
                      Find Doctor
                    </button>
                  </div>
                </div>
              </div>
              <div className="card-back">
                <div className="card-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesShowcase;
