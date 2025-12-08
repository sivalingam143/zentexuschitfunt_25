import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Marquee from "react-fast-marquee";

const AppBar = () => {
  return (
    <div className="appbar-bg">
      <Container fluid>
        <Row className="align-items-center">
          <Col
            xs={12}
            sm={4}
            lg={3}
            className="d-flex justify-content-center justify-content-lg-start align-items-center mb-2 mb-lg-0"
          >
            <img
              src={require("../../assets/logo.png")}
              className="img-fluid logo-img"
              alt="Logo"
            />
          </Col>

          {/* Heading */}
          <Col xs={12} sm={4} lg={6} className="text-center my-2 my-lg-0">
            <h4 className="appbar-title">Hemnath Crackers Chit Fund</h4>
          </Col>

          {/* CTA Button */}
        <Col
            xs={12}
            sm={4}
            lg={3}
            className="d-flex justify-content-center justify-content-lg-end mb-2 mb-lg-0"
          >
            <a
              href="/HemnathCrackers.apk"
              download="HemnathCrackers.apk"
              className="btn btn-cta blink-btn text-white"
              target="_blank"
            >
              Download APK <i className="fas fa-arrow-right ms-2"></i>
            </a>
          </Col>
        </Row>
      </Container>

      {/* Marquee */}
      <Container fluid className="marquee-container py-1">
        <Row>
          <Col xs={12} className="text-center">
            <Marquee speed={100} gradient={false} className="marquee-text">
              Welcome To Hemnath Crackers Chit Fund - Light Up Your Diwali 2026!
            </Marquee>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AppBar;
