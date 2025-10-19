// Home.jsx
import React, { useState } from "react";
import LuxuryCard from "../components/LuxuryCard";
import "../styles/Home.css";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200",
      alt: "Luxury oceanfront resort view",
      title: "Endless Horizons"
    },
    {
      src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200",
      alt: "Elegant resort suite interior",
      title: "Refined Elegance"
    },
    {
      src: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1200",
      alt: "Infinity pool at sunset",
      title: "Infinite Tranquility"
    },
    {
      src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200",
      alt: "Beachfront dining experience",
      title: "Coastal Dining"
    },
    {
      src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200",
      alt: "Spa and wellness sanctuary",
      title: "Wellness Sanctuary"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <main className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Welcome to The Luminary Shores</h1>
          <p className="hero-subtitle">Where the horizon meets tranquility</p>
        </div>
        
        {/* Decorative Wave SVG */}
        <svg className="hero-wave" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            fill="#FCFDFC"
          />
        </svg>
      </section>

      {/* Cards Section */}
      <section className="cards-section">
        <div className="section-header">
          <h2 className="section-title">Experience Luminescence</h2>
          <div className="title-accent"></div>
        </div>
        
        <div className="card-holder">
          <LuxuryCard
            title="Oceanfront Suite"
            description="Panoramic ocean views, glass walls, and golden sunrise ambiance."
            iconType="ocean"
            linkTo="/rooms"
          />
          <LuxuryCard
            title="Sunset Villa"
            description="Luxury villa with private infinity pool and luminescent glow."
            iconType="sunset"
            linkTo="/sunset-rooms"
          />
        </div>
      </section>

      {/* Carousel Gallery Section */}
      <section className="gallery-section">
        <div className="section-header">
          <h2 className="section-title">A Glimpse of Paradise</h2>
          <div className="title-accent"></div>
          <p className="section-subtitle">Discover the serene beauty that awaits</p>
        </div>

        <div className="carousel-container">
          <div className="carousel-wrapper">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="carousel-image"
                />
                <div className="carousel-overlay">
                  <h3 className="carousel-title">{image.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button 
            className="carousel-nav carousel-prev" 
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button 
            className="carousel-nav carousel-next" 
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;