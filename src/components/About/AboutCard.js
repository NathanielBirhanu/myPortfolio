import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Natnael B. Regasa </span>
            from <span className="purple">Addis Ababa, Ethiopia.</span>
            <br />
            I am currently a Senior ERP Developer at ZERGAW CLOUD SERVICE
            PROVIDER.
            <br />
            Previously, I worked as an Odoo Developer at GraceERP Consultancy
            PLC in Ethiopia.
            <br />
            I hold a Bachelor's degree in Computer Science from Hawassa
            University, with additional training in Machine Learning through
            Coursera and Software Engineering through Holberton School.
            <br />
            <br />
            The areas I work on most often include:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> ERP implementation and business process analysis
            </li>
            <li className="about-activity">
              <ImPointRight /> Odoo custom module development
            </li>
            <li className="about-activity">
              <ImPointRight /> API integrations, data migration, and deployment
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Building ERP systems that make business workflows clearer,
            faster, and easier to manage."{" "}
          </p>
          <footer className="blockquote-footer">Natnael B. Regasa</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
