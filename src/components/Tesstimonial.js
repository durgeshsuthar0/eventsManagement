import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Testimonials = () => {
  const testimonials = [
    { 
      id: 1,
      name: "Vikas Khanna",
      role: "Development Expert",
      rating: 5,
      text: "Our corporate event was executed flawlessly. From planning to execution, everything was organized and delivered with excellence.",
      avatar: "VK"
    },
    { 
      id: 2,
      name: "Anjali Mehta",
      role: "Development Expert",
      rating: 5,
      text: "What impressed us the most was the stress-free experience. The entire event was handled seamlessly, leaving us to simply enjoy the moment.",
      avatar: "AM"
    },
    { 
      id: 3,
      name: "Rahul Sharma",
      role: "Marketing Director",
      rating: 5,
      text: "The wedding planning service exceeded our expectations. Every detail was perfect, and the team was incredibly professional throughout.",
      avatar: "RS"
    }
  ];

  const StarRating = ({ rating }) => {
    return (
      <div className="star-rating">
        {[...Array(5)].map((_, index) => (
          <span 
            key={index} 
            className={`star ${index < rating ? 'filled' : ''}`}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <section id="testimonials" className="testimonials-section py-5">
      <Container>
        {/* Section Header */}
        <Row className="justify-content-center">
          <Col lg={8} className="text-center">
            <div className="section-header" data-aos="fade-down">
              <h6 className="section-subtitle">WHAT THEY SAY</h6>
              <h2 className="section-title">Why Our Customer Can't Stop Praising</h2>
              <div className="section-divider"></div>
              <p className="section-description">
                Discover why our clients trust us to make their events unforgettable
              </p>
            </div>
          </Col>
        </Row>

        {/* Testimonials Grid */}
        <Row className="g-4 justify-content-center">
          {testimonials.map((testimonial, index) => (
            <Col lg={4} md={6} key={testimonial.id}>
              <div 
                className="testimonial-card"
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                {/* Quote Icon */}
                <div className="quote-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
                  </svg>
                </div>

                {/* Testimonial Text */}
                <p className="testimonial-text">"{testimonial.text}"</p>

                {/* Star Rating */}
                <StarRating rating={testimonial.rating} />

                {/* Client Info */}
                <div className="client-info">
                  <div className="client-avatar">
                    {testimonial.avatar}
                  </div>
                  <div className="client-details">
                    <h5 className="client-name">{testimonial.name}</h5>
                    <p className="client-role">{testimonial.role}</p>
                  </div>
                </div>

                {/* Background Pattern */}
                <div className="testimonial-pattern"></div>
              </div>
            </Col>
          ))}
        </Row>

        {/* Stats Section */}
        <Row className="mt-5" data-aos="fade-up">
          <Col>
            <div className="stats-section">
              <Row className="g-4 text-center">
                <Col md={3} sm={6}>
                  <div className="stat-item">
                    <h3 className="stat-number">500+</h3>
                    <p className="stat-label">Events Managed</p>
                  </div>
                </Col>
                <Col md={3} sm={6}>
                  <div className="stat-item">
                    <h3 className="stat-number">98%</h3>
                    <p className="stat-label">Client Satisfaction</p>
                  </div>
                </Col>
                <Col md={3} sm={6}>
                  <div className="stat-item">
                    <h3 className="stat-number">50+</h3>
                    <p className="stat-label">Team Experts</p>
                  </div>
                </Col>
                <Col md={3} sm={6}>
                  <div className="stat-item">
                    <h3 className="stat-number">15+</h3>
                    <p className="stat-label">Years Experience</p>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;