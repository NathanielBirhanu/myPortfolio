import React from "react";
import { Col, Row } from "react-bootstrap";
import { AiOutlineDeploymentUnit } from "react-icons/ai";
import {
  SiJavascript,
  SiNginx,
  SiPostgresql,
  SiPython,
} from "react-icons/si";
import {
  TbApi,
  TbCloudComputing,
  TbDatabaseExport,
  TbServerCog,
} from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="Odoo ERP">
        <AiOutlineDeploymentUnit />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Python">
        <SiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="JavaScript">
        <SiJavascript />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="REST APIs">
        <TbApi />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="API Integration">
        <TbCloudComputing />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Data Migration">
        <TbDatabaseExport />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="PostgreSQL">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Nginx">
        <SiNginx />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Server Optimization">
        <TbServerCog />
      </Col>
    </Row>
  );
}

export default Techstack;
