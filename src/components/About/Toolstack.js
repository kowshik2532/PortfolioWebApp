import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiEclipseide,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobepremierepro,
} from "react-icons/si";
import {DiGit,DiPhp} from "react-icons/di";


const style={
  ptag:{
    fontSize:"1.3rem",    
  }
}

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <p style={style.ptag}>Git</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <p style={style.ptag}>Visual Studio</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <p style={style.ptag}>Postman</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPhp />
        <p style={style.ptag}>PhpMyAdmin</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiEclipseide />
        <p style={style.ptag}>Eclipse</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobephotoshop />
        <p style={style.ptag}>PhtoShop</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        < SiAdobeillustrator />
        <p style={style.ptag}>Illustrator</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobepremierepro />
        <p style={style.ptag}>Premiere Pro</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
