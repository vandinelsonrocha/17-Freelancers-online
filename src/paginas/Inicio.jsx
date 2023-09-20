import estilos from "./Inicio.module.css";

import Navbar from "../componentes/Navbar/Navbar";

const Inicio = () => {
  return (
    <main className={estilos.inicio}>
      <Navbar />
      <div id={estilos.descricao}>
        <h1>Contrate os melhores freelancers para qualquer<br></br> trabalho, online.</h1>
        <p>
          Trabalhe com os melhores talentos do mundo em nossa plataforma segura e econômica.
        </p>
        <button>Encontrar trabalho</button>
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
  )
}

export default Inicio;