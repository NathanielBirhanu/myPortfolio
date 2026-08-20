import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiCoursera, SiLinux, SiPostman, SiVisualstudiocode } from "react-icons/si";
import { TbFileDatabase } from "react-icons/tb";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="Linux">
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Visual Studio Code">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Postman">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Database Tools">
        <TbFileDatabase />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Coursera">
        <SiCoursera />
      </Col>
    </Row>
  );
}

export default Toolstack;
