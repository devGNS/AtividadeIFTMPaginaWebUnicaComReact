
import "./App.css";
import Top from "./components/Top"
import Conteudo  from "./components/Conteudo";
import Rodape from "./components/Rodape"
import "bootstrap/dist/css/bootstrap.css";


let App = () => {
  return (
    <>
      <Top/>
      <Conteudo/>
      <Rodape style={{width: "100%"}}/>
    </>
  );
};

export default App;

