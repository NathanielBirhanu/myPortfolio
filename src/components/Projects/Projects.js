import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Professional <strong className="purple">Focus </strong>
        </h1>
        <p style={{ color: "white" }}>
          A few areas I work on across ERP implementation and automation.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Odoo ERP Implementations"
              description="Leading ERP implementation work from requirement gathering and business process analysis through configuration, deployment, and user-ready workflows."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Custom Odoo Modules"
              description="Developing custom Odoo modules that adapt ERP behavior to real business needs, improve internal workflows, and support operational reporting."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="API and Third-Party Integrations"
              description="Connecting ERP systems with external services through REST APIs and reliable integration patterns for smoother data exchange."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Data Migration and Optimization"
              description="Handling ERP data migration, server deployment, system performance optimization, and production readiness for business applications."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="AI-Powered Workflow Automation"
              description="Applying automation ideas to reduce repetitive work, improve process flow, and make ERP-driven operations easier to manage."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
