import React from "react";
import { Container, Row, Col } from "react-bootstrap";


const Location = () => {
  const contactInfo = [
    {
      icon: "📍",
      title: "Our Address",
      details: "Shop No. 10, Madhav Complex, Near Madhav Farm, Nikol Gam Road, Nikol, Ahmedabad, Gujarat 382350",
      link: "https://maps.app.goo.gl/your-location"
    },
    {
      icon: "📞",
      title: "Phone Number",
      details: "+91 98244 11232",
      link: "tel:+919824411232"
    },
    {
      icon: "📧",
      title: "Email Address",
      details: "info@jaishrimahakalevents.com",
      link: "mailto:info@jaishrimahakalevents.com"
    },
    {
      icon: "🕒",
      title: "Working Hours",
      details: "Mon - Sun: 9:00 AM - 9:00 PM",
      link: null
    }
  ];

  return (
    <section id="contact" className="location-section">
      <Container>
        {/* Header Section */}
        <div className="location-header text-center" data-aos="fade-up">
          <h2 className="section-title">Visit Our Office</h2>
          <p className="section-subtitle">Come meet us at our Ahmedabad office - we'd love to help you plan your perfect event!</p>
          <div className="title-divider"></div>
        </div>

        <Row className="align-items-stretch">
          {/* Contact Information - Left Side */}
          <Col lg={6} className="mb-4">
            <div className="contact-card" data-aos="fade-right">
              <div className="contact-header">
                <div className="contact-icon-wrapper">
                  <span className="contact-main-icon">🏢</span>
                </div>
                <h3 className="contact-title">Jai Shri Mahakal Events</h3>
                <p className="contact-description">
                  Your premier event management partner in Ahmedabad. Visit our office to discuss your event requirements and let us bring your vision to life.
                </p>
              </div>

              <div className="contact-info-list">
                {contactInfo.map((item, index) => (
                  <div 
                    key={index} 
                    className="contact-item"
                    data-aos="fade-right"
                    data-aos-delay={100 * index}
                  >
                    <div className="contact-item-icon">
                      <span>{item.icon}</span>
                    </div>
                    <div className="contact-item-content">
                      <h5 className="contact-item-title">{item.title}</h5>
                      {item.link ? (
                        <a 
                          href={item.link} 
                          className="contact-item-detail"
                          target={item.link.startsWith('http') ? "_blank" : "_self"}
                          rel={item.link.startsWith('http') ? "noopener noreferrer" : ""}
                        >
                          {item.details}
                        </a>
                      ) : (
                        <span className="contact-item-detail">{item.details}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Call to Action */}
              <div className="contact-cta" data-aos="zoom-in" data-aos-delay="500">
                <div className="cta-content">
                  <h5>Ready to Plan Your Event?</h5>
                  <p>Contact us today for a free consultation at our Ahmedabad office!</p>
                  <div className="cta-buttons">
                    <a href="tel:+919824411232" className="cta-btn primary">
                      📞 Call Now
                    </a>
                    <a href="https://wa.me/919824411232" className="cta-btn secondary" target="_blank" rel="noopener noreferrer">
                      💬 WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          {/* Map - Right Side */}
          <Col lg={6}>
            <div className="map-container" data-aos="fade-left" data-aos-delay="200">
              <div className="map-header">
                <h4 className="map-title">
                  <span className="map-icon">🗺️</span>
                  Our Location in Ahmedabad
                </h4>
                <p className="map-subtitle">Visit our office in Nikol, Ahmedabad</p>
              </div>
              
              <div className="map-wrapper shadow-lg">
                <div className="ratio ratio-16x9">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3668.731175285749!2d72.6706105753378!3d23.07837907909405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8179d751b66f%3A0x380aa66d97573221!2sJay%20Shree%20Mahakal%20Events%20%26%20Management!5e0!3m2!1sen!2sin!4v1695654321000!5m2!1sen!2sin"
                    title="Jai Shri Mahakal Events & Management - Ahmedabad Office"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="map-iframe"
                  ></iframe>
                </div>
              </div>

              {/* Location Highlights */}
              <div className="location-highlights" data-aos="fade-up" data-aos-delay="300">
                <div className="highlight-item">
                  <span className="highlight-icon">🚗</span>
                  <span>Ample Parking Available</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">🏙️</span>
                  <span>Easy to Find Location</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">🛣️</span>
                  <span>Main Road Access</span>
                </div>
              </div>

              {/* Map Actions */}
              <div className="map-actions" data-aos="fade-up" data-aos-delay="400">
                <a 
                  href="https://maps.app.goo.gl/your-location" 
                  className="direction-btn"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  📍 Get Directions
                </a>
              </div>
            </div>
          </Col>
        </Row>

        {/* Additional Info Section */}
        <Row className="mt-5">
          <Col md={4} data-aos="fade-up" data-aos-delay="100">
            <div className="info-card text-center">
              <div className="info-icon">🚗</div>
              <h5>Easy Parking</h5>
              <p>Convenient parking space available for our clients</p>
            </div>
          </Col>
          <Col md={4} data-aos="fade-up" data-aos-delay="200">
            <div className="info-card text-center">
              <div className="info-icon">⏰</div>
              <h5>Flexible Timings</h5>
              <p>Open 7 days a week to accommodate your schedule</p>
            </div>
          </Col>
          <Col md={4} data-aos="fade-up" data-aos-delay="300">
            <div className="info-card text-center">
              <div className="info-icon">💼</div>
              <h5>Free Consultation</h5>
              <p>Visit us for a complimentary event planning session</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Location;