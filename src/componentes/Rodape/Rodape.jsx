import estilos from "./Rodape.module.css";

import { FaFacebookF, FaTwitter, FaInstagramSquare, FaLinkedinIn, FaGithubSquare, FaYoutubeSquare, FaHammer } from "react-icons/fa";
import { BiTrophy, BiUser } from "react-icons/bi";
import { PiToolbox } from "react-icons/pi";

import { Link } from "react-router-dom";

const Rodape = () => {
  return (
    <footer id={estilos.rodape}>
      <ul className={estilos["lista-links"]}>
        <h3>Minha conta</h3>
        <li>
          <Link to="/login">Conecte-se</Link>
        </li>
        <li>
          <Link to="/registro">Registro</Link>
        </li>
        <li>
          <Link to="/trabalho">Pulique um trabalho</Link>
        </li>
      </ul>
      <div className={estilos["redes-container"]}>
        <p>2023 Todos os direitos reservados</p>
        <div className={estilos["redes-sociais"]}>
          <Link to="#" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </Link>
          <Link to="#" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </Link>
          <Link to="#" target="_blank" rel="noopener noreferrer">
            <FaInstagramSquare />
          </Link>
          <Link to="https://www.linkedin.com/in/vandy-gomes/" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </Link>
          <Link to="http://github.com/vandinelsonrocha" target="_blank" rel="noopener noreferrer">
            <FaGithubSquare />
          </Link>
          <Link to="#" target="_blank" rel="noopener noreferrer">
            <FaYoutubeSquare />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Rodape;