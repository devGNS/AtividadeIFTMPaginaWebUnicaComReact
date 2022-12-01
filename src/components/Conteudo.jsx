import Carousel from "react-bootstrap/Carousel";
import { Container } from "react-bootstrap";
import Counter from "./Counter";

let Conteudo = () => {

  const livros = [
    {
      titulo: "A revolução dos Bichos",
      texto: " Narra a insurreição dos animais de uma granja contra seus donos. Progressivamente, porém, a revolução degenera numa tirania ainda mais opressiva que a dos humanos.",
      foto: "/revolucao-dos-bichos.jpg"
    },
    {
      titulo: "1984",
      texto: " 1984 é um dos mais importantes romances de ficção científica do século XX. George Orwell representa uma sátira política ambientada em uma distopia futurista que influencia a literatura até hoje.",
      foto: "/1984.jpg"
    },
    {
      titulo: "Marxismo Desmascarado",
      texto: " Este volume se compõe de transcrições das conferências de Ludwig von Mises na Biblioteca Pública de São Francisco, em meados de 1952.",
      foto: "/marxismo.jpg"
    }
  ]

  return (
    <Container className="mt-3">
      <Carousel variant="dark">
        <Carousel.Item style={{marginBottom:"50px"}} >
          <Counter className="d-block w-100"   foto={livros[0].foto}  titulo={livros[0].titulo} texto={livros[0].texto}/>
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{marginBottom:"50px"}}>
          <Counter className="d-block w-100" foto={livros[1].foto}  titulo={livros[1].titulo} texto={livros[1].texto}/>
        </Carousel.Item>
        <Carousel.Item style={{marginBottom:"50px"}}>
          <Counter className="d-block w-100" foto={livros[2].foto}  titulo={livros[2].titulo} texto={livros[2].texto}/>

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Conteudo;
