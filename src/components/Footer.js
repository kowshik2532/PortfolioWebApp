import React from "react";
import { Container } from "react-bootstrap";

function Footer() {
  return (
    <Container 
      fluid 
      className="footer" 
      style={{ padding: "0.5rem 0", minHeight: "50px" }}
    >
      <div style={{ textAlign: "center" }}>
        <h3>&copy; Guru Kowshik Anumolu</h3>
      </div>
    </Container>
  );
}

export default Footer;
