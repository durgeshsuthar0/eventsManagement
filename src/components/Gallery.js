import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img1 from '../img/evetn1.webp';
import img2 from '../img/event2.webp';
import img3 from '../img/event3.webp';
import img4 from '../img/event4.webp';
import img5 from '../img/event5.webp';
import img6 from '../img/eent6.webp';
import img7 from '../img/event7.webp';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('All Photos');

  // Gallery data with your imported images
  const galleryImages = [
    {
      id: 1,
      category: 'Campus',
      image: img1,
      title: 'University Campus'
    },
    {
      id: 2,
      category: 'Students',
      image: img2,
      title: 'Student Life'
    },
    {
      id: 3,
      category: 'Teachers',
      image: img3,
      title: 'Faculty Members'
    },
    {
      id: 4,
      category: 'Campus',
      image: img4,
      title: 'Campus Facilities'
    },
    {
      id: 5,
      category: 'Students',
      image: img5,
      title: 'Student Activities'
    },
    {
      id: 6,
      category: 'Teachers',
      image: img6,
      title: 'Teaching Excellence'
    },
    {
      id: 7,
      category: 'Campus',
      image: img7,
      title: 'Campus Events'
    },
    {
      id: 8,
      category: 'Students',
      image: img1, // Reusing img1 for demonstration
      title: 'Graduation Ceremony'
    }
  ];

  const filters = ['All Photos', 'Campus', 'Students', 'Teachers'];

  const filteredImages = activeFilter === 'All Photos' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === activeFilter);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header" data-aos="fade-down">
          <h2 className="section-title">View Our Gallery</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Explore the vibrant life and beautiful moments at our institution
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="filter-buttons" data-aos="fade-up">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="gallery-item"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="image-container">
                <img 
                  src={image.image} 
                  alt={image.title}
                  className="gallery-image"
                  onError={(e) => {
                    // Fallback if image fails to load
                    e.target.src = 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
                  }}
                />
                <div className="image-overlay">
                  <div className="overlay-content">
                    <h3 className="image-title">{image.title}</h3>
                    <span className="image-category">{image.category}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="view-more-container" data-aos="fade-up">
          <button className="view-more-btn">
            View More Photos
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;