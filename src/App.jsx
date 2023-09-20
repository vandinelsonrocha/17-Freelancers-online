//CSS
import './App.css';

//Ícones

//Imagens

//Router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

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

//Firebase

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/trabalho" element={<Trabalho />} />
            <Route path="/empregadores" element={<Empregadores />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="*" element={<NaoEncontrada />} />
          </Routes>
        </div>
        <Rodape />
      </BrowserRouter>
    </div>
  )
}

export default App;
