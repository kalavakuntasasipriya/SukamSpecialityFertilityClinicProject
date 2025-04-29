import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Testimonials.css"; // Same styling remains

const videoTestimonials = [
  {
    id: 1,
    url: "https://www.youtube.com/embed/AE8Z-0N8Lzc",
    title: "Fertile Window Explained: When are you most Likely to Conceive? | Dr. Anitha A Manoj",
  },
  {
    id: 2,
    url: "https://www.youtube.com/embed/sirKxcCdx9k",
    title: "What is Recurrent Pregnancy Loss, causes and its treatment | Dr. Anitha A Manoj",
  },
  {
    id: 3,
    url: "https://www.youtube.com/embed/ajhkuQssQ10",
    title: "Bleeding in Early Pregnancy? Here’s What You Need to Know | Dr. Anitha A Manoj",
  },
  {
    id: 4,
    url: "https://www.youtube.com/embed/mY25sY26Ztc",
    title: "     Fatty Liver Risks, Prevention & Treatment | Dr. Manoj Karthik S",
  },
  {
    id: 5,
    url: "https://www.youtube.com/embed/uuWYyEUjrkw",
    title: "             Surgery Preparation: Essential Steps| Dr. Manoj Kathik S",
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials-section">
      <h2>Testimonials from our happy couples</h2>
      <Swiper
        modules={[Navigation, Pagination]} // ❌ Only Navigation and Pagination
        navigation
        pagination={{ clickable: true }}
        loop={true}
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {videoTestimonials.map((video) => (
          <SwiperSlide key={video.id}>
            <div className="testimonial-card">
              <div className="video-container">
                <iframe
                  src={video.url}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <h4>{video.title}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;