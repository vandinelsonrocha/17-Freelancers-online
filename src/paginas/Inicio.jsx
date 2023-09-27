import estilos from "./Inicio.module.css";

import { MdOutlineArrowRightAlt } from "react-icons/md";
import { LuClock3, LuWarehouse } from "react-icons/lu";
import { FaHammer } from "react-icons/fa";

import Navbar from "../componentes/Navbar/Navbar";
import CategoriasProjeto from "../componentes/CategoriasProjeto/CategoriasProjeto";
import Estatisticas from "../componentes/Estatisticas/Estatisticas";

import { useState, useEffect } from "react";

const Inicio = () => {
  const [projetos, setProjetos] = useState([])
  const [pesquisarProjetos, setPesquisarProjetos] = useState("")

  useEffect(() => {
    fetch("http://localhost:3000/projetos")
      .then(response => response.json())
      .then(dados => setProjetos(dados))
  }, [])

  const projetosFiltrados = pesquisarProjetos.length > 0
    ? projetos.filter(projeto => projeto.nome.includes(pesquisarProjetos)) : []

  return (
    <div>
      <main className={estilos.inicio}>
        <Navbar />
        <div id={estilos.descricao}>
          <h1>Contrate os melhores freelancers para qualquer<br></br> trabalho, online.</h1>
          <p>
            Trabalhe com os melhores talentos freelancer de<br></br> todo o mundo em nossa plataforma segura e<br></br> econômica.
          </p>
          <button>Encontrar trabalho</button>
          <input type="text" name="pesquisar" placeholder="Título do projeto ou palavras-chave" onChange={e => setPesquisarProjetos(e.target.value)} value={pesquisarProjetos} />
          <div id={estilos["nosso-trabalho"]}>
            <div className={estilos["projetos-empregos-freelancers"]}>
              <span>76</span>
              <p>Projetos</p>
            </div>
            <div className={estilos["projetos-empregos-freelancers"]}>
              <span>4</span>
              <p>Empregos publicados</p>
            </div>
            <div className={estilos["projetos-empregos-freelancers"]}>
              <span>163</span>
              <p>Freelancers</p>
            </div>
          </div>
        </div>
      </main>
      <section id={estilos["ultimos-projetos"]}>
        <div id={estilos["procurar-projetos"]}>
          <h3>Últimos projetos</h3>
          <p>Procurar todos os trabalhos&nbsp;<MdOutlineArrowRightAlt /></p>
        </div>
        { pesquisarProjetos.length > 0 ? (
        <ul className={estilos["lista-projetos"]}>
          {projetosFiltrados.map(projeto => {
            return (
              <li key={projeto.id} className={estilos.projetos}>
                <div className={estilos["projInfos"]}>
                  <h4>{projeto.nome}</h4>
                  <span>{projeto.urgencia}</span>
                  <div className={estilos.lancamentos}>
                    <span><FaHammer /> {projeto.lance1}</span>
                    <span><LuWarehouse /> {projeto.lance2}</span><span><LuClock3 /> {projeto.data}</span>
                  </div>
                  <div className={estilos.categorias}>
                    <button id="cat1">{projeto.textoBotao1}</button><button>{projeto.textoBotao2}</button>
                    <button>{projeto.textoBotao3}</button><button>{projeto.textoBotao4}</button><button>{projeto.textoBotao5}</button>
                  </div>
                </div>
                <div className={estilos["projPreco"]}>
                  <span>$0000 {projeto.precoMin} - $ {projeto.precoMax}</span>
                  <p>{projeto.precoHora}</p>
                  <button className="btn">lance agora</button>
                </div>
              </li>
            )
          })}
        </ul>
        ) : (
          <ul className={estilos["lista-projetos"]}>
            {projetos.map(projeto => {
              return (
                <li key={projeto.id} className={estilos.projetos}>
                  <div className={estilos["projInfos"]}>
                    <h4>{projeto.nome}</h4>
                    <span>{projeto.urgencia}</span>
                    <div className={estilos.lancamentos}>
                      <span><FaHammer /> {projeto.lance1}</span>
                      <span><LuWarehouse /> {projeto.lance2}</span><span><LuClock3 /> {projeto.data}</span>
                    </div>
                    <div className={estilos.categorias}>
                      <button>{projeto.textoBotao1}</button><button>{projeto.textoBotao2}</button>
                      <button>{projeto.textoBotao3}</button><button>{projeto.textoBotao4}</button><button>{projeto.textoBotao5}</button>
                    </div>
                  </div>
                  <div className={estilos["projPreco"]}>
                    <span>$ {projeto.precoMin} - $ {projeto.precoMax}</span>
                    <p>{projeto.precoHora}</p>
                    <button className="btn">lance agora</button>
                  </div>
                </li>
              )
            })}
          </ul>
        ) }
      </section>
      <CategoriasProjeto />
      <Estatisticas />
    </div>
  )
}

export default Inicio;