import React, { useState, useEffect } from "react";
import "./GoogleReviews.css";

const reviews = [
  {
    id: 1,
    name: "Priyanka V K",
    profilePic: "https://i.pravatar.cc/100?img=1",
    rating: 5,
    text: "Doctor Manoj was very kind, and was helpful in answering all our questions asked. Gave us the right suggestions for the cause, Great experience for the first time and will be going for all my future needs",
    bgColor: "#FFDADA", // Light Red
  },
  {
    id: 2,
    name: "Pallavi Pallavi",
    profilePic: "https://i.pravatar.cc/100?img=2",
    rating: 5,
    text: "I had an excellent experience Dr.Anitha was incredible, professional and compassionate, making me feel cared for throughout my visit. The facilities were clean and well-maintained, and I appreciated the clear communication from my healthcare team regarding my treatment plan. I would highly recommend to anyone in need of medical care",
    bgColor: "#DFFFEF", // Light Green
  },
  {
    id: 3,
    name: "Shubham Dwivedi",
    profilePic: "https://i.pravatar.cc/100?img=3",
    rating: 5,
    text: "I've visited many clinics, and this one stands out for its professionalism. The staff is courteous, and the doctor exudes expertise. The seamless coordination between the team members reflects a commitment to patient well-being.",
    bgColor: "#FFEFC1", // Light Yellow
  },
  {
    id: 4,
    name: "John Mthews",
    profilePic: "https://i.pravatar.cc/100?img=4",
    rating: 5,
    text: "The doctor at this clinic is a true gem. Their compassionate and attentive approach makes each visit a pleasant one. They take the time to explain everything thoroughly, ensuring you leave with a clear understanding of your health",
    bgColor: "#D9ECFF", // Light Blue
  },
  {
    id: 5,
    name: "Ashish Seni",
    profilePic: "https://i.pravatar.cc/100?img=5",
    rating: 4,
    text: "This center is a healing haven. From the soothing ambiance to the caring demeanor of the doctor, it's evident that patient comfort is a top priority. A place where health and hospitality come together seamlessly",
    bgColor: "#E3C7EC", // Light Purple
  },
];

const GoogleReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length
    );
  };

  useEffect(() => {
    const interval = setTimeout(() => {
      nextReview();
    }, 8000);
    return () => clearTimeout(interval);
  }, [currentIndex]);

  return (
    <div className="reviews-container">
      <h2 className="reviews-title">What Our Patients Say</h2>

      <div className="review-wrapper">
        <button className="prevbtn" onClick={prevReview}>⏪</button>

        <div
          className="review-card"
          style={{ backgroundColor: reviews[currentIndex].bgColor }}
        >
          <img
            src={reviews[currentIndex].profilePic}
            alt={reviews[currentIndex].name}
            className="review-avatar"
          />
          <h3>{reviews[currentIndex].name}</h3>
          <p className="review-text">"{reviews[currentIndex].text}"</p>
          <div className="rating">
            {"★".repeat(reviews[currentIndex].rating)}
            {"☆".repeat(5 - reviews[currentIndex].rating)}
          </div>
        </div>

        <button className="nextbtn" onClick={nextReview}>⏩</button>
      </div>
    </div>
  );
};

export default GoogleReviews;
