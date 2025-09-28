import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    // Import AOS dynamically to avoid SSR issues
    const loadAOS = async () => {
      if (typeof window !== 'undefined') {
        const AOS = await import('aos');
        AOS.init({
          duration: 800,
          easing: 'ease-in-out',
          once: true,
        });
      }
    };
    loadAOS();
  }, []);

  const services = [
    {
      icon: '📸',
      title: 'Photography & Videography',
      description: 'Capturing your special moments with perfection.'
    },
    {
      icon: '🍽️',
      title: 'Premium Catering Services',
      description: 'Delicious food & hospitality for every celebration.'
    }
  ];

  return (
    <section id="about" className="about-section" ref={ref}>
      <div className="about-container">
        {/* ABOUT US Title Section */}
        <div className="about-us-title" data-aos="fade-down">
          <h1 className="main-title">ABOUT US</h1>
          <div className="title-underline"></div>
        </div>

        {/* Header Section */}
        <div className="about-header" data-aos="fade-up">
          <div className="brand-tagline">
            <span className="accent-text">Jai Shri Mahakal Events</span>
            <div className="motto-container">
              <div className="motto-line"></div>
              <h2 className="motto">Your Satisfaction is Our Motto</h2>
              <div className="motto-line"></div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="about-content">
          {/* Left Side - Main Description */}
          <div className="about-text" data-aos="fade-right">
            <p className="intro-text">
              At <span className="highlight">Jai Shri Mahakal Events</span>, we believe every celebration deserves to be extraordinary. With years of expertise in event planning and management, we specialize in creating unforgettable experiences tailored to your vision.
            </p>
            
            <p className="description">
              From grand weddings and destination celebrations to corporate gatherings, birthday parties, product launches, and social events, our dedicated team ensures every detail is managed with perfection.
            </p>

            <div className="cta-section" data-aos="zoom-in" data-aos-delay="300">
              <div className="promise-text">
                Whether it's a small personal gathering or a large-scale corporate event, <span className="highlight">Jai Shri Mahakal Events</span> is here to turn your special moments into lifetime memories.
              </div>
            </div>
          </div>

          {/* Right Side - Services */}
          <div className="services-section" data-aos="fade-left" data-aos-delay="200">
            <h3 className="services-title">Our Premium Services</h3>
            <div className="services-grid">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="service-card"
                  data-aos="flip-up"
                  data-aos-delay={300 + (index * 100)}
                >
                  <div className="service-icon">{service.icon}</div>
                  <h4 className="service-title">{service.title}</h4>
                  <p className="service-description">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="floating-elements">
          <div className="floating-element element-1" data-aos="fade"></div>
          <div className="floating-element element-2" data-aos="fade" data-aos-delay="400"></div>
          <div className="floating-element element-3" data-aos="fade" data-aos-delay="800"></div>
        </div>
      </div>
    </section>
  );
};

export default About;