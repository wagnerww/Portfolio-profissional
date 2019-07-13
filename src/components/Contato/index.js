import React from "react";

// import { Container } from './styles';

const Contato = () => (
  <section className="projetos" id="contato">
    <span className="titulo">#Contato</span>
    <div className="container-contatos">
      <div className="contatos">
        <a
          className="facebook"
          href="https://www.facebook.com/WagnerRWagner"
          target="_blank"
        >
          <i className="fab fa-facebook-square fa-3x" />
        </a>
        <a
          className="linkedin"
          href=" https://www.linkedin.com/in/wagner-ricardo-wagner-ba72ba51/"
          target="_blank"
        >
          <i className="fab fa-linkedin fa-3x" />
        </a>

        <a
          className="github"
          href="https://github.com/wagnerww"
          target="_blank"
        >
          <i className="fab fa-github-square fa-3x" />
        </a>
        <a
          className="github"
          href="https://medium.com/@wagnerricardonet"
          target="_blank"
        >
          <i className="fab fa-medium fa-3x" />
        </a>
        <a
          className="github"
          href="https://www.instagram.com/wagnerww/"
          target="_blank"
        >
          <i className="fab fa-instagram fa-3x" />
        </a>
      </div>
      <span className="terceiro-titulo">
        <a href="mailto:wagnerricardonet@gmail.com">
          wagnerricardonet@gmail.com
        </a>
      </span>
    </div>
  </section>
);

export default Contato;
