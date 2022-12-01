import React from "react";
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

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
