import Carousel from "react-bootstrap/Carousel";
import { Container } from "react-bootstrap";
import Counter from "./Counter";

let Conteudo = () => {
  return (
    <Container className="mt-3">
      <Carousel variant="dark">
        <Carousel.Item style={{marginBottom:"50px"}} >
          <Counter className="d-block w-100"   src="/revolucao-dos-bichos.jpg" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{marginBottom:"50px"}}>
          <Counter className="d-block w-100" src="/revolucao-dos-bichos.jpg" />
        </Carousel.Item>
        <Carousel.Item style={{marginBottom:"50px"}}>
          <Counter className="d-block w-100" src="/revolucao-dos-bichos.jpg"/>

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Conteudo;
