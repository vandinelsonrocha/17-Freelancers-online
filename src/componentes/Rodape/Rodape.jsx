import estilos from "./Rodape.module.css";

import { NavLink } from "react-router-dom";

const Rodape = () => {
  return (
    <footer id={estilos.rodape}>
        <ul>
          <h3>Minha conta</h3>
          <li>
            <NavLink to="/login">Conecte-se</NavLink>
          </li>
          <li>
            <NavLink to="/registro">Registro</NavLink>
          </li>
          <li>
            <NavLink to="/trabalho">Pulique um trabalho</NavLink>
          </li>
        </ul>
        <div className={estilos["redes-container"]}>
          <p>2023 Todos os direitos reservados</p>
          <div className={estilos["redes-sociais"]}>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>
          </div>
        </div>
    </footer>
  )
}

export default Rodape;