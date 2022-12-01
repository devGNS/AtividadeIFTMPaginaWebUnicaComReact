import React from "react";
import { Container } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";

let Top = () => {
  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="/">+Livros</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default Top;
