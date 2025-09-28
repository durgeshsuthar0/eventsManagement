import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const VideoSection = () => {

  return (
    <section id="highlights" className="video-section">
      <Container>
        {/* Header Section */}
        <div className="video-header text-center" data-aos="fade-up">
          <h2 className="section-title">Our Event Highlights</h2>
          <p className="section-subtitle">Witness the magic we create - From dreams to unforgettable memories</p>
          <div className="title-divider"></div>
        </div>

        <Row className="align-items-center">
          {/* Video Player Section */}
          <Col lg={8} className="mb-4">
            <div className="video-container" data-aos="zoom-in" data-aos-delay="200">
              <div className="video-wrapper">
                <div className="video-play-button">
                  <div className="play-icon">▶</div>
                </div>
                <iframe
                  src="https://www.youtube.com/embed/6stlCkUDG_s?autoplay=1&mute=1&loop=1&playlist=6stlCkUDG_s&controls=0&modestbranding=1&rel=0&showinfo=0"
                  title="Jai Shri Mahakal Events Highlights"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="video-iframe"
                  loading="lazy"
                ></iframe>
              </div>
              
              {/* Video Overlay Content */}
              <div className="video-overlay" data-aos="fade-up" data-aos-delay="400">
                <div className="overlay-content">
                  <span className="live-badge">🎥 LIVE PREVIEW</span>
                  <h4>Creating Unforgettable Moments</h4>
                  <p>Watch how we transform visions into reality</p>
                </div>
              </div>
            </div>
          </Col>

          {/* Content Section */}
          <Col lg={4}>
            <div className="content-side" data-aos="fade-left" data-aos-delay="300">
              <div className="content-header">
                <h3 className="content-title">
                  Why Choose <span className="brand-name">Jai Shri Mahakal Events</span>?
                </h3>
                <p className="content-description">
                  We don't just plan events - we create experiences that last a lifetime. Every detail matters, every moment counts.
                </p>
              </div>

              {/* Features List */}
              <div className="features-list">
                <div className="feature-item" data-aos="fade-left" data-aos-delay="400">
                  <div className="feature-icon">✨</div>
                  <div className="feature-content">
                    <h5>Creative Excellence</h5>
                    <p>Innovative designs and unique concepts for every event</p>
                  </div>
                </div>

                <div className="feature-item" data-aos="fade-left" data-aos-delay="500">
                  <div className="feature-icon">⚡</div>
                  <div className="feature-content">
                    <h5>Seamless Execution</h5>
                    <p>Flawless coordination from planning to completion</p>
                  </div>
                </div>

                <div className="feature-item" data-aos="fade-left" data-aos-delay="600">
                  <div className="feature-icon">🎯</div>
                  <div className="feature-content">
                    <h5>Attention to Detail</h5>
                    <p>No detail is too small when perfection is the goal</p>
                  </div>
                </div>

                <div className="feature-item" data-aos="fade-left" data-aos-delay="700">
                  <div className="feature-icon">💫</div>
                  <div className="feature-content">
                    <h5>Memorable Experiences</h5>
                    <p>Creating moments that you'll cherish forever</p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="video-cta" data-aos="zoom-in" data-aos-delay="800">
                <a href="#contact" className="cta-button">
                  <span className="cta-icon">🎬</span>
                  Plan Your Event Today
                </a>
              </div>
            </div>
          </Col>
        </Row>


        {/* Testimonial Quote */}
        <div className="testimonial-quote" data-aos="fade-up" data-aos-delay="400">
          <div className="quote-icon">❝</div>
          <blockquote>
            "Jai Shri Mahakal Events turned our dream wedding into a fairy tale. Their attention to detail and 
            professional approach made everything perfect. Truly the best event planners in Ahmedabad!"
          </blockquote>
          <div className="quote-author">
            <strong>- Happy Client</strong>
          </div>
        </div>
      </Container>

      {/* Background Elements */}
      <div className="background-elements">
        <div className="bg-element element-1"></div>
        <div className="bg-element element-2"></div>
        <div className="bg-element element-3"></div>
      </div>
    </section>
  );
};

export default VideoSection;