import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { DiHtml5, DiCss3, DiJavascript1, DiReact, DiNodejs, DiMongodb, DiPython } from "react-icons/di";
import { SiDjango, SiMysql } from "react-icons/si";
import { FaBrain } from "react-icons/fa"; // For AI & ML representation
import { GiArtificialIntelligence } from "react-icons/gi"; // For Data Science representation

const style = {
  ptag: {
    fontSize: "1.3rem",
  },
};

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <p style={style.ptag}>Python</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
        <p style={style.ptag}>C</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <p style={style.ptag}>JavaScript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p style={style.ptag}>ReactJS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <p style={style.ptag}>Node.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDjango />
        <p style={style.ptag}>Django</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
        <p style={style.ptag}>HTML</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
        <p style={style.ptag}>CSS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
        <p style={style.ptag}>MySQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <p style={style.ptag}>MongoDB</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaBrain />
        <p style={style.ptag}>Machine Learning</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GiArtificialIntelligence />
        <p style={style.ptag}>Artificial Intelligence</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GiArtificialIntelligence />
        <p style={style.ptag}>Data Science</p>
      </Col>
    </Row>
  );
}

export default Techstack;
