import estilos from "./Registro.module.css";

import { AiOutlineUser } from "react-icons/ai";
import { FaRegEnvelope } from "react-icons/fa";
import { PiToolbox, PiLockKey } from "react-icons/pi";

import { NavLink } from "react-router-dom";

import { useState, useEffect } from "react";

import Navbar from "../componentes/Navbar/Navbar";

const Registro = () => {
    const [botao1Ativo, setBotao1Ativo] = useState(true)
    const alternarCores = () => {
        setBotao1Ativo(!botao1Ativo)
    }

    const [displayNome, setDisplayNome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [confirmarSenha, setConfirmarSenha] = useState("")
    const [erro, setErro] = useState("")

    const handleSubmit = (e) =>  {
        e.preventDefault()
        setErro("")

        const usuario = {
            displayNome,
            email,
            senha,
        }

        if (senha !== confirmarSenha)  {
            setErro("As senhas precisam ser iguais!")
            return
        }
        console.log(usuario)
    }

  return (
    <section id={estilos.registro}>
        <Navbar />
        <h2>Registro</h2>
        <form onSubmit={handleSubmit}>
            <h3>Vamos criar sua conta!</h3>
            <p>Já tem uma conta? <NavLink to="/login">Entrar!</NavLink></p>
            <div id={estilos["btn-funcao"]}>
                <button type="button" className={`${estilos["button"]}
                    ${botao1Ativo ? estilos["button-verde"] : ""}`} onClick={alternarCores}>
                    <AiOutlineUser /> <span>Freelancer</span>
                </button>
                <button type="button" className={`${estilos["button"]} 
                    ${!botao1Ativo ? estilos["button-verde"] : ""}`} onClick={alternarCores}>
                    <PiToolbox /> <span>Empregador</span>
                </button>
            </div>
            <div className="dados-usuario">
                <AiOutlineUser />
                <input type="text" name="nome" placeholder="Nome de usuário" required onChange={(e) => setDisplayNome(e.target.value)} value={displayNome} />
            </div>
            <div className="dados-usuario">
                <FaRegEnvelope />
                <input type="email" name="email" placeholder="Endereço de e-mail" required onChange={(e) => setEmail(e.target.value)} value={email} />
            </div>
            <div className="dados-usuario">
                <PiLockKey />
                <input type="password" name="senha" placeholder="Senha" required onChange={(e) => setSenha(e.target.value)} value={senha} />
            </div>
            <div className="dados-usuario">
                <PiLockKey />
                <input type="password" name="confirmarSenha" placeholder="Confirme a senha" required onChange={(e) => setConfirmarSenha(e.target.value)} value={confirmarSenha} />
            </div>
            <label>
                <input type="checkbox" name="termosCondicoes" required />
                <p>Ao clicar no botão Registrar, você concorda com nossos<br></br> termos e Condições.</p>
            </label>
            <button className="btn" id={estilos["btn-registro"]}>Registrar</button>
            {erro && <p className="erro">{erro}</p>}
        </form>
    </section>
  )
}

export default Registro;