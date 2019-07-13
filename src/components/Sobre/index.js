import React from "react";
import Me from "../../../static/me.jpg";

// import { Container } from './styles';

const Sobre = () => (
  <section className="sobre" id="sobre">
    <div>
      <span className="titulo">#Sobre</span>
    </div>
    <div className="conteudo-sobre">
      <img src={Me} alt="" />
      <div>
        <p>
          Olá, meu nome é Wagner Ricardo Wagner, tenho 28 anos e resido em Três
          de Maio - RS.
        </p>
        <br />
        <p>
          Sou Analista e Desenvolvedor de Software com mais de 10 anos de
          experiência na área. Possuo conhecimento no ramo de documentação
          fiscal (NF-e, CT-e, MDF-e, entre outros). Profissional ético,
          proativo, focado e determinado, com bom relacionamento em equipe.
          Minhas principais competências envolvem ReactJs, ReactNative,
          NodeJs(KnexJS, Sequelize, Apollo, GraphQL, AdonisJS), Git, Docker,
          Jest, Banco de Dados, NoSQL e Genexus. Dentre elas, algumas com
          certificação: Analista Sênior Genexus por Genexus Uruguay e React por
          RocketSeat.
        </p>
      </div>
    </div>
  </section>
);

export default Sobre;
