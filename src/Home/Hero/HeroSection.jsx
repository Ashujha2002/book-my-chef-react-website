import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import styles from "./HeroSection.module.css";

// Fallback images
import slide1 from "../../assets/1.jpg";
import slide2 from "../../assets/28.jpeg";

// Decorative images
import deco from "../../assets/deco.png";
import deco2 from "../../assets/deco2.png";

// Video path
const videoSrc =
  "https://rdunimaxpharma.com/Videos/3195369-hd_1280_720_25fps.mp4";

function HeroSection() {
  const slides = [slide1, slide2, slide1];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [videoError, setVideoError] = useState(false);

  // Slideshow fallback if video not loaded
  useEffect(() => {
    if (videoError) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [slides.length, videoError]);

  // Responsive switch (video on desktop, slideshow on mobile)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVideoError(true); // force slideshow on small screens
      } else {
        setVideoError(false); // allow video on larger screens
      }
    };

    handleResize(); // run once on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.hero}>
      {/* Background video */}
      {!videoError && (
        <video
          autoPlay
          loop
          muted
          playsInline
          className={styles.videoBackground}
          onError={() => setVideoError(true)}
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Fallback slideshow */}
      {videoError &&
        slides.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className={`${styles.slide} ${
              index === currentSlide ? styles.active : ""
            }`}
          />
        ))}

      {/* 🔹 Overlay background (applies to both video & slideshow) */}
      <div className={styles.overlayBackground}></div>

      {/* Overlay text & button */}
      <div className={styles.overlay}>
        <h3 className={styles.heroText}>
          Delightful Experiences, Anytime, Anywhere
        </h3>
        <img src={deco} alt="decorative" />
        <h1 className={styles.heroText1}>Welcome to Chef Choice Menu</h1>
        <p className={styles.heroText2}>
          Discover the finest dishes crafted with love
        </p>
        <img src={deco2} alt="decorative" />
        <Link to="/book-chef">
          <button className={styles.button}>Book Your Chef</button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
