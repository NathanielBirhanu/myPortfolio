import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.jpg";
import Tilt from "react-parallax-tilt";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a Senior Odoo Developer and ERP Consultant based in
              <span className="purple"> Addis Ababa, Ethiopia.</span>
              <br />
              <br />I work across the full ERP implementation cycle, from
              requirement gathering and business process analysis to deployment,
              customization, and support.
              <br />
              <br />
              My strongest areas are
              <i>
                <b className="purple">
                  {" "}
                  Odoo module development, REST APIs, third-party integrations,
                  and data migration.
                </b>
              </i>
              <br />
              <br />
              I also focus on
              <i>
                <b className="purple">
                  {" "}
                  server deployment, Nginx configuration, performance
                  optimization, and AI-powered workflow automation.
                </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/natnael-birhanu1234"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
