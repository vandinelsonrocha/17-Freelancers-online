import { useContext, createContext } from "react";

const AutenticacaoContext = createContext()

export function AutenticacaoContextProvider({children, value})  {
    return (
        <AutenticacaoContext.Provider value={value}>
            {children}
        </AutenticacaoContext.Provider>
    )
}

export function useAutenticacaoValue()  {
    return useContext(AutenticacaoContext)  //retorna o contexto sendo utilizado
}