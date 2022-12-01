// import React from 'react'

import "./App.css";
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Counter from "./components/Counter";

let App = () => {
  return (
    <>
      {/* <NavBar bg="dark" expand="lg" variant="dark">
        <Container>
          <NavBar.Brand href="/">+Livros</NavBar.Brand>
        </Container>
      </NavBar> */}

      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="/">+Livros</Navbar.Brand>
        </Container>
      </Navbar>

      <Counter/>
    </>
  );
};

export default App;

{
  /* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */
}
