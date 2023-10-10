import estilos from "./Trabalho.module.css";

import { LuClock3, LuMapPin, LuWarehouse } from "react-icons/lu";
import { MdOutlineArrowRightAlt } from "react-icons/md";

import imgPerfilFreelancer from "../assets/img/perfil-freelancer.jpg";
import imgJogos from "../assets/img/jogos.png";

import Navbar from "../componentes/Navbar/Navbar";
import Rodape from "../componentes/Rodape/Rodape";

const Trabalho = () => {
  return (
    <section>
        <Navbar />
        <div id={estilos["ultimos-trabalhos"]}>
          <div id={estilos["procurar-trabalhos"]}>
            <h3>Últimos trabalhos</h3>
            <p>Procurar todos os trabalhos&nbsp;<MdOutlineArrowRightAlt /></p>
          </div>
          <ul id={estilos.trabalhos}>
            <li>
              <div>
                <img src={imgJogos} alt="Imagem de perfil de um Freelancer" />
                <div>
                  <h4>Jogos</h4>
                  <div>
                    <span><LuWarehouse />&nbsp;ÚNICO</span>
                    <span><LuMapPin />&nbsp;Washington</span>
                    <span><LuClock3 />&nbsp;2 meses atrás</span>
                  </div>
                </div>
              </div>
              <button>Tempo total</button>
            </li>
            <li>
              <div>
                <img src={imgPerfilFreelancer} alt="Imagem de perfil de um Freelancer" />
                <div>
                  <h4>Aplicativo móvel</h4>
                  <div>
                    <span><LuWarehouse />&nbsp;ADFY</span>
                    <span><LuMapPin />&nbsp;Cidade do Texas</span>
                    <span><LuClock3 />&nbsp;2 meses atrás</span>
                  </div>
                </div>
              </div>
              <button>Tempo total</button>
            </li>
            <li>
              <div>
              <img src={imgPerfilFreelancer} alt="Imagem de perfil de um Freelancer" />
                <div>
                  <h4>Android</h4>
                  <div>
                    <span><LuWarehouse />&nbsp;ADFY</span>
                    <span><LuMapPin />&nbsp;Washington DC</span>
                    <span><LuClock3 />&nbsp;2 meses atrás</span>
                  </div>
                </div>
              </div>
              <button>Tempo total</button>
            </li>
          </ul>
        </div>
        <Rodape />
    </section>
  )
}

export default Trabalho;