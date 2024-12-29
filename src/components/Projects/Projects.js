import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import weather from "../../Assets/Projects/weather.png";
import crypto from "../../Assets/Projects/crypto.png";
import todo from "../../Assets/Projects/todo.png";
import fmportal from "../../Assets/Projects/fmportal.png";
import suicide from "../../Assets/Projects/suicide.png";
import HousePricePredictor from "../../Assets/Projects/HousePricePredictor.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
           <strong className="purple">Recent Engagements </strong>
        </h1>
        <p style={{ color: "white" }}>
        A few projects I've contributed
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fmportal}
              isBlog={false}
              title="Field Monitoring"
              description="Developed a field monitoring web application using JSP, designed to collect, analyze, filter, and monitor survey data from the field. Played a critical role as a Database Administrator."
              ghLink="https://github.com/kowshik2532/FieldMonitoringProject"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={HousePricePredictor}
              isBlog={false}
              title="House Price Predicton"
              description="This project focuses on developing a robust house price prediction model using advanced machine learning techniques, including ensemble methods such as XGBoost, LightGBM, and CatBoost. It involves comprehensive data preprocessing, including handling missing values, encoding categorical variables, and scaling numerical features to prepare the dataset for modeling. "
              ghLink="https://github.com/kowshik2532/HousePricePrediction"
             // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
