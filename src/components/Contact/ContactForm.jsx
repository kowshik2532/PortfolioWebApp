import React, { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import emailjs from 'emailjs-com'
const ContactForm = () => {
  const style={
    width: '60%', // Adjust this value as needed
    margin: '12% auto', // Vertically and horizontally centered
    padding: '15px', // Adjust padding as needed
    boxSizing: 'border-box', // Include padding in width calculation
  }




  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_2raesgc','template_vp4gthm',e.target,'YSRNiC2v6tBTEpTAt')
    .then(res=>{
      
      if(res.status==200){
        alert("message sent!!");               
        // window.location.reload();
      }
      
    }).catch(err=>{
      alert(`Error while sending message,${err}Try After some Time`);
      // console.log(err)
    })

    // console.log(name);
    // console.log(email);
    // console.log(message);
    
  };

  return (
      
    
    <Container style={style}>
        <h1 className="project-heading">
          Contact <strong className="purple">Form</strong>
        </h1>
    <form onSubmit={handleSubmit}>
     <Row style={{ justifyContent: "center", padding: "10px" }}>
      <input style={{padding:"10px"}}
        type="text"
        name="name"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

</Row>

<Row style={{ justifyContent: "center", padding: "10px" }}>
      <input style={{padding:"10px"}}
        type="email"
        name="email"
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

</Row>
<Row style={{ justifyContent: "center", padding: "10px" }}>
      <textarea style={{padding:"10px"}}
        name="message"
        placeholder="Your message"
        value={message}
        rows={2}
        onChange={(e) => setMessage(e.target.value)}
      />
      <br />      
      </Row>
      <button type="submit" style={{ justifyContent: "center", padding: "11px", backgroundColor:"purple", color:"white" ,width:"300px"}} >Submit</button>
    </form>
    <br />
    </Container>
  );
};

export default ContactForm;