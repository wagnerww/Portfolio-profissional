import React from "react";

// import { Container } from './styles';

const CardPequeno = ({ classe, descricao }) => (
  <div className="card-pequeno">
    <i className={`sprite ${classe}`} />
    <span>{descricao}</span>
  </div>
);

export default CardPequeno;
