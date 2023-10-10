import estilos from "./Registro.module.css";

import { AiOutlineUser } from "react-icons/ai";
import { FaRegEnvelope } from "react-icons/fa";
import { PiToolbox, PiLockKey } from "react-icons/pi";

import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import { useAutenticacao } from "../hooks/useAutenticacao";

import Navbar from "../componentes/Navbar/Navbar";
import Rodape from "../componentes/Rodape/Rodape";

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

    const {criarUsuario, erro: erroAutenticacao, carregamento} = useAutenticacao()

    const handleSubmit = async (e) =>  {
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

        const res = await criarUsuario(usuario)
        console.log(res)

        console.log(usuario)
    }
    useEffect(() =>  {
        if (erroAutenticacao)  {
            setErro(erroAutenticacao)
        }
    }, [erroAutenticacao])

  return (
    <div>
        <section id={estilos.registro}>
            <Navbar />
            <h2>Registro</h2>
            <form onSubmit={handleSubmit}>
                <h3>Vamos criar sua conta!</h3>
                <p>Já tem uma conta? <Link to="/login">Entrar!</Link></p>
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
                {!carregamento && <button className="btn" id={estilos["btn-registro"]}>
                    Registrar
                </button>}
                {carregamento && <button id={estilos["btn-registro"]} disabled>
                    Aguarde...
                </button>}
                {erro && <p className="erro">{erro}</p>}
            </form>
        </section>
        <Rodape />
    </div>
  )
}

export default Registro;