import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Testimonials.css"; // Custom styling
import img1 from "../assets/couple1.jpg";
import img2 from "../assets/couple2.jpg";
import img3 from "../assets/couple3.jpg";
import img4 from "../assets/couple4.jpg";
import img5 from "../assets/couple5.jpg";
import img6 from "../assets/couple6.jpg";
import img7 from "../assets/couple7.jpg";
import img8 from "../assets/couple8.jpg";
import img9 from "../assets/couple9.jpg";
import img10 from "../assets/couple10.jpg";

const testimonials = [
  {
    id: 1,
    image: img1, // Replace with actual image URL
    text: "The best clinic ever! very professional and caring.",
    author: "John Doe",
  },
  {
    id: 2,
    image: img2,
    text: "Highly recommended! Their service is top-notch.",
    author: "Jane Smith",
  },
  {
    id: 3,
    image: img3,
    text: "Great experience, very helpful staff!",
    author: "Alice Brown",
  },
  {
    id: 4,
    image: img4,
    text: "I feel so much better after my treatment here.",
    author: "Michael Lee",
  },
  {
    id: 5,
    image: img5,
    text: "Professional and kind doctors, highly recommend.",
    author: "Sarah Wilson",
  },
  {
    id: 6,
    image: img6,
    text: "Best clinic experience ever!",
    author: "David Johnson",
  },
  {
    id: 7,
    image: img7,
    text: "I was treated with great care and respect.",
    author: "Emma Davis",
  },
  {
    id: 8,
    image: img8,
    text: "The clinic is very clean and well-managed.",
    author: "Chris Martinez",
  },
  {
    id: 9,
    image: img9,
    text: "Excellent service and friendly staff!",
    author: "Sophia Taylor",
  },
  {
    id: 10,
    image: img10,
    text: "I highly recommend this clinic for anyone in need of care.",
    author: "Liam Anderson",
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials-section">
      <h2>Testimonials from our happy couples</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="testimonial-card">
              <img src={testimonial.image} alt="Testimonial" />
              <p>"{testimonial.text}"</p>
              <h4>- {testimonial.author}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
