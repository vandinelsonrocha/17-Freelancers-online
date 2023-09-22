import estilos from "./Estatisticas.module.css";

import { FaHammer } from "react-icons/fa";
import { BiTrophy, BiUser } from "react-icons/bi";
import { PiToolbox } from "react-icons/pi";

const Estatisticas = () => {
  return (
    <div>
        <ul className={estilos["lista-publicacoes"]}>
        <li>
          <span><FaHammer /></span>
          <span>8</span>
          <p>Projetos publicados</p>
        </li>
        <li>
          <span><PiToolbox /></span>
          <span>2</span>
          <p>Empregos publicados</p>
        </li>
        <li>
          <span><BiUser /></span>
          <span>108</span>
          <p>Autônomos</p>
        </li>
        <li>
          <span><BiTrophy /></span>
          <span>$ 10.947</span>
          <p>Ganhos da comunidade</p>
        </li>
      </ul>
    </div>
  )
}

export default Estatisticas;