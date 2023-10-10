import estilos from "./Empregadores.module.css";

import { MdOutlineArrowRightAlt, MdStar } from "react-icons/md";
import { FaCheck, FaChevronLeft, FaChevronRight } from "react-icons/fa";

import freelancerTechnoSuave from "../assets/img/freelancer-techno-suave.png";
import freelancerDreamTech from "../assets/img/freelancer-dream-tech.png";
import freelancerPoderoso from "../assets/img/freelancer-poderoso.jpg";

import Navbar from "../componentes/Navbar/Navbar";
import Rodape from "../componentes/Rodape/Rodape";

const Empregadores = () => {
  return (
    <section>
        <Navbar />
        <div id={estilos["freelancers-avaliados"]}>
          <div id={estilos["procurar-freelancers"]}>
            <h3>Freelancers mais bem avaliados</h3>
            <p>Procurar todos os freelancers&nbsp;<MdOutlineArrowRightAlt /></p>
          </div>
          <ul id={estilos.freelancers}>
            <li className={estilos["card-freelancer"]}>
              <img src={freelancerTechnoSuave} alt="Freelancer Techno Suave" />
              <span className={estilos["seta-ok"]}><FaCheck /></span>
              <span className={estilos["seta-scroll-esquerda"]}><FaChevronLeft /></span>
              <h4>Techno Suave</h4>
              <h5>Sites, TI e Software / .NET</h5>
              <div className={estilos.avaliacao}>
                <span>5.0</span>
                <span className={estilos.estrelas_amarelas}><MdStar /></span>
                <span className={estilos.estrelas_amarelas}><MdStar /></span>
                <span className={estilos.estrelas_amarelas}><MdStar /></span>
                <span className={estilos.estrelas_amarelas}><MdStar /></span>
                <span className={estilos.estrelas_amarelas}><MdStar /></span>
              </div>
              <div className={estilos.numeros}>
                <p>Taxa horária</p>
                <p>Lance ganho</p>
                <p>Recontratado</p>
                <span>$ 12</span>
                <span>31</span>
                <span>28</span>
                <button className="btn">Ver perfil</button>
              </div>
            </li>
            <li className={estilos["card-freelancer"]}>
              <img src={freelancerDreamTech} alt="Freelancer Dream Tech" />
              <span className={estilos["seta-ok"]}><FaCheck /></span>
              <h4>Dream Tech</h4>
              <h5>Sites, TI e Software / Desenvolvimento de jogos</h5>
              <div className={estilos.avaliacao}>
                <span>3.0</span>
                <span className={estilos.estrelas_amarelas}><MdStar /></span>
                <span className={estilos.estrelas_amarelas}><MdStar /></span>
                <span className={estilos.estrelas_amarelas}><MdStar /></span>
                <span><MdStar /></span>
                <span><MdStar /></span>
              </div>
              <div className={estilos.numeros}>
                <p>Taxa horária</p>
                <p>Lance ganho</p>
                <p>Recontratado</p>
                <span>$ 10</span>
                <span>2</span>
                <span>0</span>
                <button className="btn">Ver perfil</button>
              </div>
            </li>
            <li className={estilos["card-freelancer"]}>
              <img src={freelancerPoderoso} alt="Poderoso" />
              <span className={estilos["seta-ok"]}><FaCheck /></span>
              <span className={estilos["seta-scroll-direita"]}><FaChevronRight /></span>
              <h4>Poderoso</h4>
              <h5>Sites, TI e Software / .NET</h5>
              <div className={estilos.avaliacao}>
                <span>0.0</span>
                <span><MdStar /></span>
                <span><MdStar /></span>
                <span><MdStar /></span>
                <span><MdStar /></span>
                <span><MdStar /></span>
              </div>
              <div className={estilos.numeros}>
                <p>Taxa horária</p>
                <p>Lance ganho</p>
                <p>Recontratado</p>
                <span>$ 25</span>
                <span>1</span>
                <span>0</span>
                <button className="btn">Ver perfil</button>
              </div>
            </li>
          </ul>
        </div>
        <Rodape />
    </section>
  )
}

export default Empregadores;