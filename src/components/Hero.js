import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import img1 from '../img/evetn1.webp'
import img2 from '../img/event2.webp'
import img3 from '../img/event3.webp'
import img4 from '../img/event4.webp'
const Hero = () => {
  return (
    <div id="home" style={{paddingTop: "7rem", paddingBottom: "3rem"}} className=" bg-white">
      <Container>
        <Row className="align-items-center">
          {/* Left Content */}
          <Col md={6} data-aos="fade-right">
            <h1 className="fw-bold display-5">
              Effortlessly <br />
              <span style={{ color: "#a92c48" }}>plan your events</span>
            </h1>
            <p className="text-muted my-4">
              Make event planning easy with our comprehensive platform. From
              start to finish, we streamline the process and offer dedicated
              support to make your event a success.
            </p>
            <div className="d-flex gap-3">
              <Button
                style={{
                  backgroundColor: "#a92c48",
                  border: "none",
                  borderRadius: "30px",
                  padding: "10px 25px",
                }}
              >
                Plan an Event
              </Button>
              <Button
                variant="outline-dark"
                style={{
                  borderRadius: "30px",
                  padding: "10px 25px",
                }}
              >
                Find an Expert
              </Button>
            </div>
          </Col>

          {/* Right Images */}
          <Col md={6} className="mt-4 mt-md-0" data-aos="fade-left">
            <Row className="g-3">
              <Col xs={6}>
                <img
                  src={img1}
                  alt="event1"
                  className="w-100 rounded shadow-sm"
                />
              </Col>
              <Col xs={6}>
                <img
                  src={img2}
                  alt="event2"
                  className="w-100 rounded shadow-sm"
                />
              </Col>
              <Col xs={6}>
                <img
                  src={img3}
                  alt="event3"
                  className="w-100 rounded shadow-sm"
                />
              </Col>
              <Col xs={6}>
                <img
                  src={img4}
                  alt="event4"
                  className="w-100 rounded shadow-sm"
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
