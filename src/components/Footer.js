import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from '../img/logo.webp'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="custom-footer">
      <Container>
        <Row className="footer-content">
          {/* Brand Section */}
          <Col lg={4} md={6} className="mb-4">
            <div className="footer-brand">
                <img src={logo} width={170}></img>
              {/* <h3 className="brand-title">Mahakal Events</h3> */}
              <p className="mt-2 brand-description">
                From weddings to corporate gatherings, Mahakal Events delivers seamless planning 
                and flawless execution for every occasion.
              </p>
              <div className="social-links">
                <a href="#" className="social-link">
                  <span className="social-icon">📘</span>
                </a>
                <a href="#" className="social-link">
                  <span className="social-icon">📷</span>
                </a>
                <a href="#" className="social-link">
                  <span className="social-icon">🐦</span>
                </a>
                <a href="#" className="social-link">
                  <span className="social-icon">💼</span>
                </a>
              </div>
            </div>
          </Col>

          {/* Quick Links */}
          <Col lg={2} md={6} className="mb-4">
            <div className="footer-links">
              <h5 className="links-title">Quick Links</h5>
              <ul className="links-list">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#service">Service</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
          </Col>

          {/* Information */}
          <Col lg={3} md={6} className="mb-4">
            <div className="footer-info">
              <h5 className="info-title">Information</h5>
              <div className="contact-info">
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <a href="tel:+918000009580" className="contact-text">
                    +91-800.000 9580
                  </a>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <a href="mailto:jayshreemahakalevents@gmail.com" className="contact-text">
                    jayshreemahakalevents@gmail.com
                  </a>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <span className="contact-text">
                    H - 103, Saptak Vihar Complex, Opo, Virtual Plaza, 
                    Near Sadhi Mata Temple, Vasant Vihar 2, Naroda, 
                    Ahmedabad, Gujarat 382330
                  </span>
                </div>
              </div>
            </div>
          </Col>

          {/* Gallery Links */}
          <Col lg={3} md={6} className="mb-4">
            <div className="footer-gallery">
              <h5 className="gallery-title">Gallery</h5>
              <div className="gallery-links">
                <a href="#home" className="gallery-link">Home</a>
                <a href="#blog" className="gallery-link">Blog</a>
                <a href="#gallery" className="gallery-link">Gallery</a>
                <a href="#service" className="gallery-link">Service</a>
                <a href="#contact" className="gallery-link">Contact</a>
              </div>
            </div>
          </Col>
        </Row>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <Row className="align-items-center">
            <Col md={6} className="text-center text-md-start">
              <p className="copyright-text">
                Copyright © {currentYear} Jay Shree Mahakal Event. All Rights reserved.
              </p>
            </Col>
            <Col md={6} className="text-center text-md-end">
              <div className="footer-bottom-links">
                <a href="#home">Home</a>
                <a href="#about">About Us</a>
                <a href="#blog">Blog</a>
                <a href="#gallery">Gallery</a>
                <a href="#service">Service</a>
                <a href="#contact">Contact</a>
              </div>
            </Col>
          </Row>
        </div>
      </Container>

      {/* Background Elements */}
      <div className="footer-background">
        <div className="bg-element elem-1"></div>
        <div className="bg-element elem-2"></div>
        <div className="bg-element elem-3"></div>
      </div>
    </footer>
  );
};

export default Footer;