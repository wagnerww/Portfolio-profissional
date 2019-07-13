import React from "react";
import CardMedio from "../CardMedio";

const artigos = [
  {
    classNamee: "sprite-projeto_docker",
    descricao:
      "Automatizando o ambiente de desenvolvimento e testes com Docker",
    link:
      "https://medium.com/@wagnerricardonet/automatizando-o-ambiente-de-desenvolvimento-e-testes-com-docker-43283ff64d80?source=your_stories_page---------------------------"
  },
  {
    classNamee: "sprite-artigo_angular",
    descricao: "Aplicando o CSS Grid Layout no Angular",
    link:
      "https://medium.com/@wagnerricardonet/aplicando-o-css-grid-layout-no-angular-50b29b17ef70"
  },
  {
    classNamee: "sprite-artigo_react_router",
    descricao: "Rotas aninhadas com React-Router V4",
    link:
      "https://medium.com/@wagnerricardonet/rotas-aninhadas-com-react-router-v4-c1013dca0e9e?source=your_stories_page---------------------------"
  },
  {
    classNamee: "sprite-artigo_sequelize",
    descricao: "Série: Restify e Sequelize com Node.js",
    link:
      "https://medium.com/@wagnerricardonet/restify-e-sequelize-com-node-js-parte-1-15b44a2861d6"
  }
];

// import { Container } from './styles';

const Projetos = () => (
  <section className="projetos" id="projetos">
    <span className="titulo">#Projetos</span>
    <div className="conteudo-projetos">
      <span className="sub-titulo no-padding-top">Artigos</span>
      <div className="stack">
        <div className="projetos-item">
          {artigos.map((item, index) => (
            <CardMedio
              key={index}
              descricao={item.descricao}
              classe={item.classNamee}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </div>
  </section>
);
export default Projetos;
