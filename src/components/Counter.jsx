import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Badge from 'react-bootstrap/Badge';


let Counter = (props) => {
  console.log({props});
  let [count, setState] = useState(0);

  let incr = () => {
    setState(count + 1);
  };

  let decr = () => {
    if (count > 0) {
      setState(count - 1);
    }
  };

  return (
    <>
      <Container
        className="mt-3"
        style={{ width: "100%", display: "flex", justifyContent: "center" }}
      >

        <Card style={{ width: "18rem", backgroundColor: "orange" }}>
        <Card.Header style={{ backgroundColor: "#212529", color:"white" }} >Promoção BlackFriday 🔥</Card.Header>
          <Card.Img style={{ background: "no-repeat center", backgroundSize: "cover", maxHeight: "300px" }} variant="top" src={props.src} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              
            </Card.Text>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <p className="display-4">{count}</p>
            </div>

            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button onClick={decr} variant="danger" className="m-1">
                -
              </Button>
              <Button onClick={incr} variant="success" className="m-1">
                +
              </Button>
            </div>

            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button variant="dark" className="m-1">
                Adicionar ao carrinho
              </Button>
            </div>
          </Card.Body>
        </Card>
 
      </Container>
    </>
  );
};

export default Counter;
