import estilos from "./NaoEncontrada.module.css";

import pagNaoEncontrada from "../assets/img/pagina-nao-encontrada.png";

import { Link } from "react-router-dom";

const NaoEncontrada = () => {

  return (
    <section id={estilos["nao-encontrada"]}>
      <div id={estilos.nao_encontrada_causa}>
        <h2>Página não encontrada!!</h2>
        <p>Não foi possível encontrar a página que procura. Pode ter sido removida, renomeada ou nem sequer exista.</p>
        <Link className="btn" to="/">Voltar ao início</Link>
      </div>
      <img src={pagNaoEncontrada} alt="Erro 404 | Página não encontrada!" />
    </section>
  )
}

export default NaoEncontrada;