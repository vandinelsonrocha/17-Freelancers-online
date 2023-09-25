import estilos from "./CategoriasProjeto.module.css";

import { MdSchedule } from "react-icons/md";
import { BsCloudArrowUp, BsPencil } from "react-icons/bs";
import { PiToolbox, PiFileCodeDuotone } from "react-icons/pi";
import { AiOutlineMobile } from "react-icons/ai";
import { LiaImageSolid } from "react-icons/lia";
import { FiFileText } from "react-icons/fi";

const CategoriasProjeto = () => {
  return (
    <section id={estilos.categorias}>
        <h3>Categorias de projeto</h3>
        <ul id={estilos["categorias-container"]}>
          <li>
            <span><PiFileCodeDuotone/></span>
            <span>16</span>
            <p>Sites, Ti e Software</p>
          </li>
          <li>
            <span><BsPencil /></span>
            <span>4</span>
            <p>Redação e conteúdo</p>
          </li>
          <li>
            <span><LiaImageSolid /></span>
            <span>2</span>
            <p>Design, mídia e arquitetura</p>
          </li>
          <li>
            <span><AiOutlineMobile /></span>
            <span>2</span>
            <p>Telemóveis e computadores</p>
          </li>
          <li>
            <span><BsCloudArrowUp /></span>
            <span>1</span>
            <p>Engenharia, Manufatura e Ciência</p>
          </li>
          <li>
            <span><PiToolbox /></span>
            <span>2</span>
            <p>Negócios, Contabilidade e Jurídico</p>
          </li>
          <li>
            <span><MdSchedule /></span>
            <span>3</span>
            <p>Vendas e Marketing</p>
          </li>
          <li>
            <span><FiFileText /></span>
            <span>1</span>
            <p>Entrada de dados e administração</p>
          </li>
        </ul>
    </section>
  )
}

export default CategoriasProjeto;