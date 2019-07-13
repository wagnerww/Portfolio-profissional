import React from "react";

// import { Container } from './styles';

const CardMedio = ({ classe, descricao, link }) => (
  <div className="card-medio">
    <a href={link} target="_blank">
      <i className={`sprite_artigos ${classe}`} />
    </a>
    <a href={link} target="_blank">
      <span>{descricao} </span>
    </a>
  </div>
);

export default CardMedio;
