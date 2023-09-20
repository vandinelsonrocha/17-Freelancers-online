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
}