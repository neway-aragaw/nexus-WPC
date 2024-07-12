import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">NEWAY ARAGAW </span>
            from <span className="purple"> Baltimore, Maryland.</span>
            <br />
            I am currently employed as a software developer at Evangadi Tech.
            <br />
            I have completed BSC in Computer and Information Science, BSC in Public Health,MPH in Reproductive Health 
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            
            <li className="about-activity">
              <ImPointRight /> Playing Soccer
            </li>
            <li className="about-activity">
              <ImPointRight /> Techical Drawing 
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing b
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p> */}
          {/* <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
