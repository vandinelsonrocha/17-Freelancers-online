//CSS
import './App.css';

//Ícones

//Imagens

//Router
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";

//Componentes
import Rodape from './componentes/Rodape/Rodape';

//Páginas
import Inicio from './paginas/Inicio';
import Sobre from './paginas/Sobre';
import Trabalho from './paginas/Trabalho';
import Empregadores from './paginas/Empregadores';
import Login from './paginas/Login';
import Registro from './paginas/Registro';
import NaoEncontrada from './paginas/NaoEncontrada';

//Hooks
import { useState, useEffect } from 'react';
import { useAutenticacao } from './hooks/useAutenticacao';

//Context
import { AutenticacaoContextProvider } from "./context/AutenticacaoContext";

//Firebase
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const [usuario, setUsuario] = useState(undefined)
  const { autenticacao } = useAutenticacao()

  const carregandoUsuario = usuario === undefined

  useEffect(() => {
    onAuthStateChanged(autenticacao, (usuario) =>  {
      setUsuario(usuario)
    })
  }, [autenticacao])

  if (carregandoUsuario) return <p>Carregando, por favor aguarde...</p>

  return (
    <div className='app'>
      <AutenticacaoContextProvider value={{ usuario }}>
        <BrowserRouter>
          <div className="container">
            <Routes>
              <Route path="/" element={<Inicio />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/trabalho" element={usuario ? <Trabalho /> : <Navigate to="/login" />} />
              <Route path="/empregadores" element={usuario ? <Empregadores /> : <Navigate to="/login" />} />
              <Route path="/login" element={!usuario ? <Login /> : <Navigate to="/" />} />
              <Route path="/registro" element={!usuario ? <Registro /> : <Navigate to="/" />} />
              <Route path="*" element={<NaoEncontrada />} />
            </Routes>
            <span id="link-topo">
              <Link to="/">1</Link>
            </span>
          </div>
          <Rodape />
        </BrowserRouter>
      </AutenticacaoContextProvider>
    </div>
  )
}

export default App;
