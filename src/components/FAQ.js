import React, { useState } from "react";
import "./FAQ.css"; // Import the CSS file

const faqData = [
  {
    question: "Where does Dr. Manoj Karthik S practice?",
    answer:
      "Dr. Manoj Karthik S practices at Sukam Speciality Clinic - Uttarahalli, Raksha Hospital - Uttarahalli.",
  },
  {
    question: "What Dr. Manoj Karthik S's education qualification?",
    answer: "Dr. Manoj Karthik S has the following qualifications - MBBS, MS - General Surgery, FMAS",
  },
  {
    question: "Why do patients visit Dr. Manoj Karthik S?",
    answer: "Patients frequently visit Dr. Manoj Karthik S for Piles Surgery, Liver Surgery, Anal Fissure Surgery",
  },
  {
    question: "Where does Dr. Manoj Karthik S practice?",
    answer:
      "Dr. Manoj Karthik S practices at Sukam Speciality Clinic - Uttarahalli, Raksha Hospital - Uttarahalli.",
  },
  {
    question: "What Dr. Manoj Karthik S's education qualification?",
    answer: "Dr. Manoj Karthik S has the following qualifications - MBBS, MS - General Surgery, FMAS",
  },
  {
    question: "Why do patients visit Dr. Manoj Karthik S?",
    answer: "Patients frequently visit Dr. Manoj Karthik S for Piles Surgery, Liver Surgery, Anal Fissure Surgery",
  },
  
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2 className="faq-heading">Frequently Asked Questions</h2>
      <div className="faq-container">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? "open" : ""}`}
          >
            <div
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              <span>{item.question}</span>
              <span className="faq-icon">
                {openIndex === index ? "˄" : "˅"}
              </span>
            </div>
            {openIndex === index && (
              <div className="faq-answer">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
