import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
            Hey there, 
            <span className="purple">  let me introduce myself!</span>
            </h1>
            <p className="home-about-body">
              I’m currently diving deep into the world of Data Science at Lewis University, with my grand finale (graduation) set for May 2025! As I near the end of this journey, I’m on the lookout for roles like Data Analyst, Python Developer, Data Scientist, and Database Developer. Basically, if it involves data, I’m in!
              <br />
              <br />
              I’ve got a solid toolkit packed with Python, machine learning, LangChain (yes, I’m that person who’s obsessed with AI), and all things database. When I’m not wrangling data, you’ll find me tinkering with language models and building cool, brainy apps that solve real-world problems.
              <br />
              <br />
              I’m all about making tech work in the smartest, quirkiest ways possible. So, if you need someone who’s equally passionate about data and AI (and possibly making some bad puns along the way), I’m your person!
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
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/kowshik2532"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/guru-kowshik-anumolu/"
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
