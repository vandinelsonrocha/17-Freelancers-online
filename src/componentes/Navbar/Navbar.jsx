import estilos from "./Navbar.module.css";

import { BiArrowFromLeft, BiArrowToRight } from "react-icons/bi";

import { NavLink } from "react-router-dom";

import { useAutenticacao } from "../../hooks/useAutenticacao";
import { useAutenticacaoValue } from "../../context/AutenticacaoContext";

const Navbar = () => {
  const { usuario } = useAutenticacaoValue()
  const { logout } = useAutenticacao()

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
                    {usuario && (
                        <>
                            <li>
                                <NavLink to="/trabalho">Encontrar trabalho</NavLink>
                            </li>
                            <li>
                                <NavLink to="/empregadores">Empregadores</NavLink>
                            </li>
                        </>
                    )}
                </div>
                <div className={estilos["itens-menu"]}>
                    {!usuario && (
                        <>
                            <li>
                            <NavLink to="/login"><BiArrowFromLeft /> Entrar</NavLink>
                        </li>
                        <li>
                            <NavLink to="/registro">Registro</NavLink>
                        </li>
                        </>
                    )}
                    {usuario && (
                        <li>
                            <button id={estilos.sair} onClick={logout}>
                                <span>Sair&nbsp;<BiArrowToRight /></span>
                            </button>
                        </li>
                    )}
                </div>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar;