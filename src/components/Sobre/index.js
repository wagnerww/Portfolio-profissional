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
          Analista e desenvolvedor de software com mais de 10 anos de
          experiência na área. Possuo conhecimento no ramo de documentação
          fiscal(NF-e, CT-e, MDF-e, entre outros). Profissional bem determinado
          com bom relacionamento, ética, pró-atividade e que sabe como trabalhar
          em equipe.
        </p>
        <br />
        <p>
          As Minhas principais competências envolvem ReactJs, ReactNative,
          Vue.js, NodeJs(NestJS, Apollo, GraphQL), Git(Flow & CI/CD com GitHub e
          GitLab), Docker, Spring Boot, Spring Cloud(NETFLIX OSS) e Genexus.
          Dentre elas, algumas com certificações: React por RocketSeat, Vue por
          Mastery, Especialista Spring Rest por AlgaWorks, Spring Cloud(NETFLIX
          OSS) por Alura e Analista sênior Genexus por Genexus Uruguay.
        </p>
      </div>
    </div>
  </section>
);

export default Sobre;
