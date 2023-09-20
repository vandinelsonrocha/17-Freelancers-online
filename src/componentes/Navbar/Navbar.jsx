import estilos from "./Navbar.module.css";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
        <nav className={estilos["navegacao-menu"]}>
            <ul>
                <div className={estilos["itens-menu"]}>
                    <li>
                        <NavLink to="/">Início</NavLink>
                    </li>
                    <li>
                        <NavLink to="/sobre">Sobre</NavLink>
                    </li>
                    <li>
                        <NavLink to="/trabalho">Encontrar trabalho</NavLink>
                    </li>
                    <li>
                        <NavLink to="/empregadores">Empregadores</NavLink>
                    </li>
                </div>
                <div className={estilos["itens-menu"]}>
                    <li>
                        <NavLink to="/login">Entrar</NavLink>
                    </li>
                    <li>
                        <NavLink to="/registro">Registro</NavLink>
                    </li>
                </div>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar;