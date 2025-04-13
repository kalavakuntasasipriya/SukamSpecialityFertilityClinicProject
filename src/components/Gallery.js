import React, { useState, useEffect, useRef } from "react";
import "./Gallery.css";
import img1 from "../assets/gallery1.png";
import img2 from "../assets/gallery2.png";
import img3 from "../assets/gallery3.png";
import img4 from "../assets/gallery4.png";
import img5 from "../assets/gallery5.png";
import img6 from "../assets/gallery6.png";
import img7 from "../assets/gallery7.png";
import img8 from "../assets/gallery8.png";


const allImages = [
  { id: 1, src: img1, category: "Reception" },
  { id: 2, src: img2, category: "Hospital" },
  { id: 3, src: img3, category: "Hospital" },
  { id: 4, src: img4, category: "Reception" },
  { id: 5, src: img5, category: "Hospital" },
  { id: 6, src: img6, category: "Labs" },
  { id: 7, src: img7, category: "Labs" },
  { id: 8, src: img8, category: "Hospital" },
];

const categories = ["All", "Hospital", "Wards", "Labs", "Reception"];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [fade, setFade] = useState(false);
  const [inView, setInView] = useState(false);
  const galleryRef = useRef(null);

  const filteredImages =
    selectedCategory === "All"
      ? allImages
      : allImages.filter((img) => img.category === selectedCategory);

  const prevImage = () => {
    const newIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
    setFade(true);
    setTimeout(() => {
      setSelectedImage(filteredImages[newIndex]?.src);
      setCurrentIndex(newIndex);
      setFade(false);
    }, 300);
  };

  const nextImage = () => {
    const newIndex = currentIndex === filteredImages.length - 1 ? 0 : currentIndex + 1;
    setFade(true);
    setTimeout(() => {
      setSelectedImage(filteredImages[newIndex]?.src);
      setCurrentIndex(newIndex);
      setFade(false);
    }, 300);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }

    return () => {
      if (galleryRef.current) {
        observer.unobserve(galleryRef.current);
      }
    };
  }, []);

  return (
    <div className={`gallery-container ${inView ? "animate" : ""}`} ref={galleryRef}>
      <h2 className="gallery-title">Our Hospital Gallery</h2>

      {/* Category Filters */}
      <div className="gallery-filters">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-btn ${selectedCategory === category ? "active" : ""}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="gallery-grid">
        {filteredImages.length > 0 ? (
          filteredImages.map((image, index) => (
            <img
              key={image.id}
              src={image.src}
              alt={image.category}
              className="gallery-image"
              onClick={() => {
                setSelectedImage(image.src);
                setCurrentIndex(index);
              }}
            />
          ))
        ) : (
          <p className="no-images">No images available in this category.</p>
        )}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <button className="prev-btn" onClick={(e) => { e.stopPropagation(); prevImage(); }}>❮</button>
          <img
            src={selectedImage}
            alt="Enlarged View"
            className={`lightbox-image ${fade ? "fade-out" : "fade-in"}`}
            onClick={(e) => e.stopPropagation()}
          />
          <button className="next-btn" onClick={(e) => { e.stopPropagation(); nextImage(); }}>❯</button>
          <button className="close-lightbox" onClick={() => setSelectedImage(null)}>✖</button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
