import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container, Row, Col, Card, Button, Carousel } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import AppBar from "./components/AppBar";
import Footer from "./components/Footer";
import FundTable from "./components/FundTable";
import FundPlanCard from "./components/FundPlanCard";
import HowItWorks from "./components/HowItWorks";
import img1 from "../assets/diwali-chit-fund-banner-D2a1cjBH (1).jpeg";
import img2 from "../assets/money_img.jpg";
import { fundPlans, testimonials, steps } from "./components/Data";
import API_DOMAIN from "../config/config";

const Home = () => {
  const [feedback, setFeedback] = useState([]);
  const [feedbackLoading, setFeedbackLoading] = useState(true);
  const [plans, setPlans] = useState([]); 
  const [loading, setLoading] = useState(true);

  const fetchSchemes = async () => {
    try {
      const response = await fetch(API_DOMAIN + "/scheme_api.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: "list",
        }),
      });
      const data = await response.json();

      if (data.head.code === 200 && data.body.schemes) {
        setPlans(data.body.schemes);
      } else {
        console.error("Failed to fetch schemes:", data.head.msg);
        setPlans([]);
      }
    } catch (error) {
      console.error("Error fetching schemes:", error);
      setPlans([]);
    } finally {
      setLoading(false);
    }
  };
 

  const fetchFeedback = async () => {
    try {
      const response = await fetch(API_DOMAIN + "/feedback.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
         search_text: "",
        }),
      });
      const data = await response.json();

      if (data.head.msg === "Success" && data.body.feedback) {
        const formattedFeedback = data.body.feedback.map((item) => ({
          quote: item.customer_feedback_message,
          name: item.customer_name , 
        }));
        setFeedback(formattedFeedback);
      } else {
        console.error("Failed to fetch feedback:", data.head.msg);
        setFeedback(testimonials);
      }
    } catch (error) {
      console.error("Error fetching feedback:", error);
      setFeedback(testimonials);
    } finally {
      setFeedbackLoading(false);
    }
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      delay: 200,
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
    });
    fetchSchemes();
    fetchFeedback();
  }, []);

  const cardPlans = plans.map((scheme) => ({
    image: img1,
    amount: parseFloat(scheme.schemet_due_amount).toFixed(0),
    title: scheme.scheme_name,
    monthsText: `${
      scheme.duration_unit === "month"
        ? "₹" + scheme.schemet_due_amount + " X " + scheme.duration + " MONTHS"
        : "₹" + scheme.schemet_due_amount + " X " + scheme.duration + " Weeks"
    }`,
    bonusText: `₹${(
      parseFloat(scheme.schemet_due_amount) * scheme.duration
    ).toFixed(2)} + ₹${parseFloat(scheme.scheme_bonus).toFixed(2)}`,
    totalText: parseFloat(scheme.scheme_maturtiy_amount).toFixed(0),
  }));

  return (
    <>
      <AppBar />
      <div className="main-content">
        {/* Hero Section - ID for smooth scroll */}
        <section
          id="home"
          className="hero-section position-relative overflow-hidden"
        >
          <div className="hero-bg"></div>
          <Container className="position-relative z-2 py-5">
            <Row className="align-items-center min-vh-70">
              <Col lg={6} className="order-lg-1 order-2">
                <div
                  className="hero-content text-dark pe-lg-5"
                  data-aos="fade-right"
                >
                  <h1 className="display-3 fw-bold mb-4 lh-1 hero-title">
                    Diwali Crackers Fund 2026
                  </h1>
                  <p className="lead fs-4 mb-4 opacity-90 hero-desc">
                    Secure your festive joy with easy monthly installments. Get
                    1.5 months free bonus + 60% discount on bookings. Guaranteed
                    delivery before Diwali!
                  </p>
                  <div className="d-flex gap-3 flex-wrap">
                    <Button
                      variant="warning"
                      size="lg"
                      className="px-5 py-3 fw-bold rounded-pill shadow-lg hero-btn-primary"
                      data-aos="zoom-in"
                      data-aos-delay="200"
                    >
                      Start Booking Now
                    </Button>
                    <Button
                      variant="outline-warning"
                      size="lg"
                      className="px-5 py-3 fw-bold rounded-pill shadow-lg hero-btn-secondary"
                      data-aos="zoom-in"
                      data-aos-delay="400"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </Col>
              <Col lg={6} className="order-lg-2 order-1 mb-4 mb-lg-0">
                <div
                  className="hero-image-wrapper"
                  data-aos="fade-left"
                  data-aos-delay="600"
                >
                  <img
                    src={img1}
                    className="hero-img img-fluid rounded-4 shadow-xl"
                    alt="Diwali Crackers Fund"
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Fund Details Section - ID for smooth scroll */}
        <section
          id="plans"
          className="fund-details-section py-5 bg-gradient-primary"
        >
          <Container>
            <Row className="justify-content-center mb-5">
              <Col lg={10}>
                <h2
                  className="text-center fw-bold display-4 mb-3 section-title"
                  data-aos="fade-down"
                >
                  Fund Details & Savings Plans
                </h2>
                <p className="text-center text-muted lead mb-0">
                  Transparent, secure, and tailored for your Diwali celebrations
                </p>
              </Col>
            </Row>
            <Row className="g-4">
              <Col lg={12}>
                <Card
                  className="fund-card h-70 border-0 shadow-xl bg-white"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <Card.Body className="p-4 p-lg-5">
                    <Card.Title className="h3 fw-bold text-gold mb-4 text-center fund-table-title">
                      Plan Summary
                    </Card.Title>
                    {loading ? (
                      <div className="text-center">Loading Plans...</div>
                    ) : plans.length > 0 ? (
                      <FundTable data={plans} />
                    ) : (
                      <div className="text-center">No plans available.</div>
                    )}
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={12}>
                <Row className="justify-content-center align-items-stretch g-4">
                  {/* Left Side Image */}
                  <Col lg={3} md={3} className="d-none d-lg-block"></Col>

                  {/* Center Key Information */}
                  <Col lg={6} md={6}>
                    <Card
                      className="fund-card h-100 border-0 shadow-xl bg-white text-center"
                      data-aos="fade-up"
                    >
                      <Card.Body className="p-4 p-lg-5 d-flex flex-column justify-content-center">
                        <Card.Title className="h3 fw-bold text-gold mb-4 d-flex align-items-center justify-content-center">
                          <i className="fas fa-info-circle me-2 fs-4"></i>Key
                          Information
                        </Card.Title>
                        <ul className="list-unstyled ps-0">
                          {[
                            {
                              icon: "fas fa-calendar-alt",
                              text: "Fund Period: October 2025 - July 2026",
                              colorClass: "text-info",
                            },
                            {
                              icon: "fas fa-credit-card",
                              text: "Installments: Due before 10th of every month",
                              colorClass: "text-success",
                            },
                            {
                              icon: "fas fa-tag",
                              text: "Booking: 10 Aug 2026 | 60% Discount Applied",
                              colorClass: "text-warning",
                            },
                            {
                              icon: "fas fa-truck",
                              text: "Dispatch: End of Aug 2026 | Parcel Service",
                              colorClass: "text-primary",
                            },
                            {
                              icon: "fas fa-exclamation-triangle",
                              text: "Missed Payment: 60% Discount | No Bonus",
                              colorClass: "text-danger",
                            },
                            {
                              icon: "fas fa-shipping-fast",
                              text: "Free Shipping: Tamilnadu Only",
                              colorClass: "text-secondary",
                            },
                          ].map((item, idx) => (
                            <li
                              key={idx}
                              className={`mb-3 p-3 bg-light rounded-3 d-flex align-items-start justify-content-center info-item ${item.colorClass}`}
                            >
                              <i
                                className={`${item.icon} me-3 fs-4 mt-1 flex-shrink-0`}
                              ></i>
                              <div className="text-start flex-grow-1">
                                <strong className="d-block mb-1">
                                  {item.text.split(":")[0]}:
                                </strong>
                                <span>{item.text.split(":")[1]}</span>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </Card.Body>
                    </Card>
                  </Col>

                  {/* Right Side Image */}
                  <Col lg={3} md={3} className="d-none d-lg-block"></Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Plans Section - ID for smooth scroll */}
        <section className="plans-section py-5 bg-gradient-secondary">
          <Container>
            <Row className="justify-content-center mb-5">
              <Col lg={8}>
                <h2
                  className="text-center fw-bold display-4 mb-3 section-title"
                  data-aos="fade-down"
                >
                  Choose Your Plan
                </h2>
                <p className="text-center text-muted lead">
                  Flexible options to suit every budget – Light up Diwali
                  brighter!
                </p>
              </Col>
            </Row>
            <Row className="justify-content-center g-4">
              {loading ? (
                <Col lg={12} className="text-center">
                  Loading Plans...
                </Col>
              ) : cardPlans.length > 0 ? (
                // ⬅️ Now using the dynamically created cardPlans
                cardPlans.map((plan, index) => (
                  <Col lg={3} md={6} xs={12} key={index}>
                    <div data-aos="zoom-in" data-aos-delay={index * 150}>
                      <FundPlanCard {...plan} />
                    </div>
                  </Col>
                ))
              ) : (
                <Col lg={12} className="text-center">
                  No plans available to display.
                </Col>
              )}
            </Row>
          </Container>
        </section>

        {/* HowItWorks - ID for smooth scroll */}
        <HowItWorks title="How this works" steps={steps} />
        <section className="testimonials-section py-5 bg-gradient-tertiary">
          <Container>
            <Row className="justify-content-center mb-5">
              <Col lg={8}>
                <h2
                  className="text-center fw-bold display-4 mb-3 section-title"
                  data-aos="fade-down"
                >
                  What Our Customers Say
                </h2>
                <p className="text-center lead mb-0 text-muted">
                  Join thousands who saved big this Diwali
                </p>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col lg={8}>
                {feedbackLoading ? (
                  <div className="text-center">
                    Loading Customer Feedback...
                  </div>
                ) : (
                  <Carousel
                    interval={3000}
                    indicators={false}
                    controls={true}
                    className="testimonials-carousel"
                    data-aos="fade-up"
                  >
                    {/* ⬅️ Use the state variable 'feedback' */}
                    {feedback.map((testimonial, index) => (
                      <Carousel.Item key={index}>
                        <Card className="border-0 shadow-xl bg-white mx-3">
                          <Card.Body className="p-5 text-center">
                            <i className="fas fa-quote-left text-gold fs-1 mb-3"></i>
                            <p className="lead mb-4 text-dark opacity-90 fs-5">
                              "{testimonial.quote}"
                            </p>
                            <h6 className="fw-bold text-gold">
                              {testimonial.name}
                            </h6>
                          </Card.Body>
                        </Card>
                      </Carousel.Item>
                    ))}
                  </Carousel>
                )}
              </Col>
            </Row>
          </Container>
        </section>

        {/* CTA Section - ID for smooth scroll */}
        <section id="download" className="cta-section py-5 bg-gradient-primary">
          <Container>
            <Row className="justify-content-center">
              <Col lg={8} className="text-center">
                <h2 className="fw-bold mb-3 text-dark display-5 cta-title">
                  Ready to Sparkle This Diwali?
                </h2>
                <p className="lead text-muted mb-4">
                  Download the app for seamless tracking, reminders, and
                  exclusive offers
                </p>
                <Button
                  as="a"
                  href="/HemnathCrackers.apk"
                  download="HemnathCrackers.apk"
                  variant="warning"
                  size="lg"
                  className="px-5 py-3 fw-bold rounded-pill shadow-lg fs-5 cta-btn"
                  target="_blank"
                >
                  <i className="fas fa-download me-2"></i>Download APK Now
                </Button>
              </Col>
            </Row>
          </Container>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Home;
