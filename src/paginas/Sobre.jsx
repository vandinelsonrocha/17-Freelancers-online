import estilos from "./Sobre.module.css";

import Navbar from "../componentes/Navbar/Navbar";

const Sobre = () => {
  return (
    <section>
      <Navbar />
      <div id={estilos.sobre}>
        <h3>Como funciona?</h3>
        <ul>
          <li>
            <h4>Escolha a partir do seu melhor jogo</h4>
            <p>
              Traga para a mesa estratégias de sobrevivência ganha-ganha para garantir a dominação proativa daqui para frente.
            </p>
          </li>
          <li>
            <h4>Faça seu trabalho</h4>
            <p>
              Libere com eficiência informações de mídia cruzada. Maximize rapidamente o retorno sobre o investimento.
            </p>
          </li>
          <li>
            <h4>Dê feedback e repita</h4>
            <p>
              A imersão em nanotecnologia ao longo da estrada da informação fechará o ciclo de foco exclusivo.
            </p>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Sobre;