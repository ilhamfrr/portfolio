import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ilham Faturahman </span>
            from <span className="purple"> Jakarta, Indonesia.</span>
            <br />
            I am currently employed  as a freelance software developer on various freelance platforms such as upwork.
            <br />
            I have completed the Full Stack Developer Class at Codepolitan and Buildwithangga.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Perbaiki penyebabnya, bukan gejalanya!"{" "}
          </p>
          <footer className="blockquote-footer">IlhamFrr</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
