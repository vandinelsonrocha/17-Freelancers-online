import estilos from "./Login.module.css";

import { FaRegEnvelope } from "react-icons/fa";
import { PiLockKey } from "react-icons/pi";

import { Link } from "react-router-dom";

import Navbar from "../componentes/Navbar/Navbar";
import Rodape from "../componentes/Rodape/Rodape";

import { useState, useEffect } from "react";
import { useAutenticacao } from "../hooks/useAutenticacao";

const Login = () => {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [erro, setErro] = useState("")

    const {login, erro: erroAutenticacao, carregamento} = useAutenticacao()

    const handleSubmit = async (e) =>  {
        e.preventDefault()
        setErro("")

        const usuario = {
            email,
            senha,
        }

        const res = await login(usuario)
        console.log(res)

        //console.log(usuario)
    }

    useEffect(() =>  {
        if (erroAutenticacao)  {
            setErro(erroAutenticacao)
        }
    }, [erroAutenticacao])

  return (
    <div>
        <section id={estilos["login-container"]}>
            <Navbar />
            <form onSubmit={handleSubmit} className={estilos.login}>
              <h3>Faça login para aceder ao sistema!</h3>
              <p>Não tem uma conta? <Link to="/registro">Registra-se agora!</Link></p>
              <div className="dados-usuario" id="ee">
                  <FaRegEnvelope />
                  <input type="email" name="email" placeholder="Endereço de e-mail" required onChange={(e) => setEmail(e.target.value)} value={email} />
              </div>
              <div className="dados-usuario">
                  <PiLockKey />
                  <input type="password" name="senha" placeholder="Senha" required onChange={(e) => setSenha(e.target.value)} value={senha} />
              </div>
              <Link to="#">Esqueceu a senha?</Link>
              {!carregamento && <button className="btn" id={estilos["btn-entrar"]}>
                  Entrar
              </button>}
              {carregamento && <button id={estilos["btn-entrar"]} disabled>
                  Aguarde...
              </button>}
              {erro && <p className="erro">{erro}</p>}
            </form>
        </section>
        <Rodape />
    </div>
  )
}

export default Login;