import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FertilityExperts.css";
import manoj from "../assets/doctor-manoj.jpg";
import anitha from "../assets/doctor-anitha.jpg";

// Expert Data (Same IDs as in DoctorProfile.js)
const experts = [
  {
    id: "dr-manoj-karthik", // Must match DoctorProfile.js
    name: "Dr. Manoj Karthik",
    qualification: "MBBS, MS (General Surgery)",
    designation: "General Surgeon",
    image: manoj,
  },
  {
    id: "dr-anitha-a-manoj", // Must match DoctorProfile.js
    name: "Dr. Anitha A Manoj",
    qualification: "MBBS, MS (OBG), FMAS, FRM",
    designation: "Senior Fertility Specialist",
    image: anitha,
  },
];

const FertilityExperts = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("All");

  // Filter experts based on category tab
  const filteredExperts =
    activeTab === "All"
      ? experts
      : experts.filter((expert) =>
          activeTab === "General Surgeon"
            ? expert.designation.includes("General Surgeon")
            : expert.designation.includes("Fertility Specialist")
        );

  return (
    <section className="experts-section">
      <h2 className="experts-heading">Meet Our Fertility Experts</h2>
      <p className="experts-subtext">Our team of specialists is here to help you.</p>

      {/* Category Tabs */}
      <div className="category-tabs">
        {["All", "General Surgeon", "Fertility Specialist"].map((category) => (
          <button
            key={category}
            className={`tab-button ${activeTab === category ? "active" : ""}`}
            onClick={() => setActiveTab(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Expert Cards */}
      <div className="experts-grid">
        {filteredExperts.map((expert) => (
          <div
            key={expert.id}
            className="expert-card"
            onClick={() => navigate(`/doctor-profile/${expert.id}`)}
          >
            <div className="expert-image">
              <img src={expert.image} alt={expert.name} />
            </div>
            <h3 className="expert-name">{expert.name}</h3>
            <p className="expert-qualification">{expert.qualification}</p>
            <p className="expert-designation">{expert.designation}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FertilityExperts;
