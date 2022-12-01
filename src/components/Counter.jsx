import React, {useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

let Counter = () => {

    let [count , setState] = useState(0);

    let incr = () => {
        setState(count+1);
    }

    let decr = () => {
        if(count>0){
            setState(count -1);
        }
    }

  return (
    <>
      <Container className="mt-3">
        <Row>
          <Col xs={4}>
            <Card style={{ width: "18rem", backgroundColor: "orange" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <p className="display-4">{count}</p>
                <Button onClick={decr} variant="danger" className="m-1">-</Button>
                <Button onClick={incr} variant="success" className="m-1">+</Button>
                <Button variant="primary">Adicionar ao carrinho</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Counter;
