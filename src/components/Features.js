import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Features = () => {
  const services = [
    { 
      title: "Wedding Planning", 
      desc: "We craft unforgettable wedding experiences with meticulous attention to detail. From venue selection to vendor coordination, we ensure your special day is perfectly executed and stress-free.", 
      icon: "💍" 
    },
    { 
      title: "Corporate Events", 
      desc: "Professional event management for businesses of all sizes. We handle conferences, seminars, product launches, and team-building activities with precision and corporate excellence.", 
      icon: "🏢" 
    },
    { 
      title: "Concerts & Shows", 
      desc: "Creating magical live experiences that audiences remember forever. We manage everything from artist coordination to stage production and audience engagement.", 
      icon: "🎶" 
    },
  ];

  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <section id="service" className="services-section py-5">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-5" data-aos="fade-down">
          <h2 className="section-title">Our Services</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Professional event management services tailored to create unforgettable experiences
          </p>
        </div>

        {/* Services Cards */}
        <Row className="g-4">
          {services.map((service, idx) => (
            <Col lg={4} md={6} className="mb-4" key={idx}>
              <div 
                className="service-card"
                data-aos="fade-up" 
                data-aos-delay={idx * 200}
              >
                <div className="service-icon">
                  {service.icon}
                </div>
                <div className="service-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.desc}</p>
                </div>
                <div className="service-hover-effect"></div>
              </div>
            </Col>
          ))}
        </Row>

        {/* Additional Info Section */}
        <Row className="mt-5" data-aos="fade-up">
          <Col className="text-center">
            <div className="cta-section">
              <h4 className="cta-title">Ready to Create Unforgettable Moments?</h4>
              <p className="cta-text">Let's discuss your event vision and bring it to life</p>
              <button className="cta-button">
                Get Started Today
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
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Features;