import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
        <p style={{ textAlign: "justify" }}>
    Hey there, I'm <span className="purple">Guru Kowshik Anumolu</span> (yes, it’s a pretty long name, you can call me Kowshik).
    I kicked off my journey with a Bachelor's in Civil Engineering from the National Institute of Technology, Agartala—where I learned more about architectural designs and structures than I ever thought I would. Along the way, I faced several mathematical and statistical challenges that, without warning, woke up the data geek in me. 
    </p>
    <p style={{ textAlign: "justify" }}>After that, I jumped into the world of software development at Axis My India, where I wore so many hats on various projects that I started wondering if I was secretly a circus performer.
          </p>
    <p style={{ textAlign: "justify" }}>
    Currently, I'm diving deep into Data Science at Lewis University, where I’m on a mission to graduate this summer—hopefully with my sanity intact.
</p>
          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Manish</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
