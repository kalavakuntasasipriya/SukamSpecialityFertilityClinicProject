import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./DoctorProfile.css";
import Testimonials from "../components/Testimonials"; 
import manoj from "../assets/doctor-manoj.jpg";
import anitha from "../assets/doctor-anitha.jpg";

const doctors = {
  "dr-manoj-karthik": {
    name: "Dr. Manoj Karthik",
    qualification: "MBBS, MS (General Surgery)",
    designation: "General Surgeon",
    regNumber: "674933",
    languages: ["English", "Kannada", "Hindi", "Tamil"],
    image: manoj,
    appointmentLink: "https://www.eka.care/doctor/dr-manoj-karthik-general-surgeon-bengaluru/calendar?cid=674933ac16f48e001dd639b6",
    phoneNumber: "+919876543210",
    about: "I am Dr. Manoj Karthik S, a General and Laparoscopic Surgeon with 22 years of experience..."
  },
  "dr-anitha-a-manoj": {
    name: "Dr. Anitha A Manoj",
    qualification: "MBBS, MS (OBG), FMAS, FRM",
    designation: "Senior Fertility Specialist",
    regNumber: "69779",
    languages: ["Kannada", "English", "Hindi", "Tamil", "Telugu"],
    image: anitha,
    appointmentLink: "https://www.eka.care/doctor/dr-anitha-a-manoj-obstetrics-and-gynecologist-bengaluru/calendar?cid=674933ac16f48e001dd639b6",
    phoneNumber: "+919876543211",
    about: "With over 17 years of experience in Obstetrics and Gynecology..."
  }
};

const DoctorProfile = () => {
  const { doctorId } = useParams();
  const navigate = useNavigate();
  const doctor = doctors[doctorId];

  // Scroll to the top when the component loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!doctor) {
    return <h2>Doctor not found</h2>;
  }

  return (
    <div className="doctor-profile">
      <div className="go-back-container">
        <button onClick={() => navigate(-1)} className="go-back-button">← Go Back</button>
      </div>

      <div className="profile-header">
        <img src={doctor.image} alt={doctor.name} className="profile-image" />
        <h2>{doctor.name}</h2>
        <p className="qualification">{doctor.qualification}</p>
        <p className="designation">{doctor.designation}</p>
        <p className="reg-number">
          <strong>Medical Registration Number (KMC):</strong> {doctor.regNumber}
        </p>
        <p className="languages">
          <strong>Languages Known:</strong> {doctor.languages.join(", ")}
        </p>
        <div className="action-buttons">
          <a href={`tel:${doctor.phoneNumber}`} className="call-button">
            Call ({doctor.phoneNumber})
          </a>
          <a href={doctor.appointmentLink} target="_blank" rel="noopener noreferrer" className="book-button">
            Book Now
          </a>
        </div>
      </div>

      <div className="about-doctor">
        <h3>About {doctor.name}</h3>
        <p>{doctor.about}</p>
      </div>

      <Testimonials />
    </div>
  );
};

export default DoctorProfile;
