import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg={6} md={12}>
            <h5 className="fw-bold text-gold mb-3">
              Hemnath Crackers Chit Fund
            </h5>
            <p className="mb-0 opacity-90">
              Trusted festive savings for over 10 years. Light up your Diwali
              with confidence and joy.
            </p>
          </Col>
          <Col lg={3} md={6} className="mt-3 mt-lg-0">
            <h6 className="fw-bold text-gold mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a
                  href="#home"
                  className="footer-link"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("home");
                  }}
                >
                  <i className="fas fa-home me-2"></i>Home
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#plans"
                  className="footer-link"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("plans");
                  }}
                >
                  <i className="fas fa-file-alt me-2"></i>Plans
                </a>
              </li>
              <li>
                <a
                  href="#download"
                  className="footer-link"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("download");
                  }}
                >
                  <i className="fas fa-download me-2"></i>Download
                </a>
              </li>
            </ul>
          </Col>
          <Col lg={3} md={6} className="mt-3 mt-lg-0">
            <h6 className="fw-bold text-gold mb-3">Contact</h6>
            <p className="mb-1 footer-text">
              <i className="fas fa-phone me-2"></i>+91-9363762876
            </p>
            <p className="mb-1 footer-text">
              <i className="fas fa-envelope me-2"></i>support@zentexus.com
            </p>
            <p className="footer-text">
              <i className="fas fa-map-marker-alt me-2"></i>Tamilnadu, India
            </p>
          </Col>
        </Row>
        <hr className="my-4 opacity-25" />
        <Row className="text-center">
          <Col>
            <p className="mb-0 footer-text">
              &copy; 2025 Hemnath Crackers. All rights reserved. | Designed for
              Diwali Joy
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
