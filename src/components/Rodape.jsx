import Image from "react-bootstrap/Image";

let Rodape = () => {
  return (
    <div style={{ width: "100%", position:"relative", display:"flex", justifyContent:"center"}}>
      <span
        style={{
          fontWeight: "bold",
          position: "absolute",
          bottom: "0",
          color: "aliceblue",
          textAlign: "center"
        }}
      >
        Desenvolvido por: Gustavo Naves && Eber Leocádio
      </span>
      <Image src="/footer-wave.svg" responsive />
    </div>
  );
};

export default Rodape;
