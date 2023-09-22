import { db } from "../firebase/config";

import  {
    getAuth, createUserWithEmailAndPassword,
    signInWithEmailAndPassword, updateProfile, signOut
} from "firebase/auth";

import { useState, useEffect } from "react";

export const useAutenticacao = () =>  {
    const [erro, setErro] = useState(null)
    const [carregamento, setCarregamento] = useState(null)

    //Evitar execução de funcionalidades desnecessárias:
    const [cancelado, setCancelado] = useState(false)

    const autenticacao = getAuth()

    function verificarSeEstaCancelado()  {
        if (cancelado) return
    }

    const criarUsuario = async (dados) =>  {
        verificarSeEstaCancelado()

        setCarregamento(true)
        setErro(null)

        try {

            const {usuario} = await createUserWithEmailAndPassword(
                autenticacao, dados.email, dados.senha
            )
            await updateProfile(usuario, {
                displayNome: dados.displayNome
            })
            setCarregamento(false)
            return usuario
            
        } catch (erro) {
            console.log(erro.message)
            console.log(typeof erro.message)

            let msgDeErroSistema
            if (erro.message.includes("Password"))  {
                msgDeErroSistema = "A senha precisa conter pelo menos 6 caracteres."
            }
            else if (erro.message.includes("email-already"))  {
                msgDeErroSistema = "E-mail já cadastrado, insira outro."
            } 
            else  {
                msgDeErroSistema = "Ocorreu um erro, por favor tente mais tarde."
            }
            setCarregamento(false)
            setErro(msgDeErroSistema)
        }
    }

    const logout = () =>  {
        verificarSeEstaCancelado()

        signOut(autenticacao)
    }

    const login = async(dados) =>  {
        verificarSeEstaCancelado()

        setCarregamento(true)
        setErro(false)

        try {

            await signInWithEmailAndPassword(autenticacao, dados.email, dados.senha)
            setCarregamento(false)

        } catch (erro) {
            
            let msgDeErroSistema
            if (erro.message.includes("user-not-found"))  {
                msgDeErroSistema = "Usuário não encontrado."
            }
            else if (erro.message.includes("wrong-password"))  {
                msgDeErroSistema = "Senha incorreta."
            } else  {
                msgDeErroSistema = "Ocorreu um erro, por favor tente mais tarde."
            }
            setErro(msgDeErroSistema)
            setCarregamento(false)
        }
    }

    useEffect(() =>  {
        return () => setCancelado(true)
    }, [])

    return {
        autenticacao,
        criarUsuario,
        erro,
        carregamento,
        logout,
        login,
    }
}