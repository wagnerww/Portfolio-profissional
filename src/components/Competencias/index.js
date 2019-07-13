import React from "react";
import CardPequeno from "../CardPequeno";

const frontEnd = [
  {
    classNamee: "sprite-react",
    descricao: "ReactJS"
  },
  {
    classNamee: "sprite-react",
    descricao: "React Native"
  },
  {
    classNamee: "sprite-jslogo",
    descricao: "Javacript"
  },
  {
    classNamee: "sprite-styled-components-logo",
    descricao: "Styled-Components"
  },
  {
    classNamee: "sprite-redux_logo",
    descricao: "Redux"
  },
  {
    classNamee: "sprite-redux-saga-logo",
    descricao: "Sagas"
  },
  {
    classNamee: "sprite-graphql",
    descricao: "GraphQL"
  }
];

const backEnd = [
  {
    classNamee: "sprite-nodelogo",
    descricao: "NodeJS"
  },
  {
    classNamee: "",
    descricao: "ExpressJS"
  },
  {
    classNamee: "",
    descricao: "ObjectionJS"
  },
  {
    classNamee: "sprite-knex",
    descricao: "Knex"
  },
  {
    classNamee: "sprite-pg",
    descricao: "Postgre SQL"
  },
  {
    classNamee: "sprite-apollo",
    descricao: "Prisma/Apollo GraphQL"
  }
];

const skills = [
  {
    classNamee: "sprite-html5",
    descricao: "HTML 5"
  },
  {
    classNamee: "sprite-css",
    descricao: "CSS 3"
  },
  {
    classNamee: "sprite-jquery",
    descricao: "JQuery"
  },
  {
    classNamee: "sprite-gatsby",
    descricao: "Gatsby"
  },
  {
    classNamee: "sprite-nextjs",
    descricao: "NextsJS"
  },
  {
    classNamee: "sprite-adonis",
    descricao: "AdonisJS"
  },
  {
    classNamee: "sprite-sequelize",
    descricao: "Sequelize"
  },
  {
    classNamee: "sprite-docker",
    descricao: "Docker"
  },
  {
    classNamee: "sprite-gx",
    descricao: "Genexus"
  }
];

const Competencias = () => (
  <section className="competencias" id="competencias">
    <span className="titulo">#Competências</span>
    <div className="conteudo-competencias">
      <span className="sub-titulo no-padding-top">Stack</span>
      <div className="stack">
        <div className="stack-item">
          <span className="terceiro-titulo ">Front-end</span>
          <div>
            {frontEnd.map((item, index) => (
              <CardPequeno
                key={index}
                descricao={item.descricao}
                classe={item.classNamee}
              />
            ))}
          </div>
        </div>
        <div className="separador" />
        <div className="stack-item">
          <span className="terceiro-titulo ">Back-end</span>
          <div className="reverso">
            {backEnd.map((item, index) => (
              <CardPequeno
                key={index}
                descricao={item.descricao}
                classe={item.classNamee}
              />
            ))}
          </div>
        </div>
      </div>
      <span className="sub-titulo">Skills</span>
      <div className="stack">
        <div className="stack-item">
          <div className="skill-item">
            {skills.map((item, index) => (
              <CardPequeno
                key={index}
                descricao={item.descricao}
                classe={item.classNamee}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Competencias;
