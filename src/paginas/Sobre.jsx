import estilos from "./Sobre.module.css";

import { PiLockKey } from "react-icons/pi";
import { BiTrophy } from "react-icons/bi";
import { FaHammer, FaCheck } from "react-icons/fa";

import Navbar from "../componentes/Navbar/Navbar";
import Rodape from "../componentes/Rodape/Rodape";

const Sobre = () => {
  return (
    <section>
      <Navbar />
      <div id={estilos.sobre}>
        <h3>Como funciona?</h3>
        <ul>
          <li>
            <div className={`${estilos["icones-container"]} ${estilos["icones-container1"]}`}>
              <span className={estilos.icone}><PiLockKey /></span>
              <span className={estilos["icone-seta"]}><FaCheck /></span>
            </div>
            <h4>Escolha a partir do seu melhor jogo</h4>
            <p>
              Traga para a mesa estratégias de sobrevivência ganha-ganha para garantir a dominação proativa daqui para frente.
            </p>
          </li>
          <li>
            <div className={`${estilos["icones-container"]} ${estilos["icones-container2"]}`}>
              <span className={estilos.icone}><FaHammer /></span>
              <span className={`${estilos["icone-seta"]} ${estilos["icone-seta2"]}`}><FaCheck /></span>
            </div>
            <h4>Faça seu trabalho</h4>
            <p>
              Libere com eficiência informações de mídia cruzada. Maximize rapidamente o retorno sobre o investimento.
            </p>
          </li>
          <li>
            <div className={estilos["icones-container"]}>
              <span className={estilos.icone}><BiTrophy /></span>
              <span className={`${estilos["icone-seta"]} ${estilos["icone-seta3"]}`}><FaCheck /></span>
            </div>
            <h4>Dê feedback e repita</h4>
            <p>
              A imersão em nanotecnologia ao longo da estrada da informação fechará o ciclo de foco exclusivo.
            </p>
          </li>
        </ul>
      </div>
      <Rodape />
    </section>
  )
}

export default Sobre;