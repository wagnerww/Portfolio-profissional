import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";

export default ({ title }) => (
  <header>
    <div>
      <strong>{title}</strong>

      <div>
        <nav>
          <li>
            <ul>
              <a className="interno" href="#sobre">
                Sobre
              </a>
            </ul>
            <ul>
              <a className="interno" href="#competencias">
                Competências
              </a>
            </ul>
            <ul>
              <a className="interno" href="#projetos">
                Projetos
              </a>
            </ul>
            <ul>
              <a className="interno" href="#contato">
                Contato
              </a>
            </ul>
          </li>
        </nav>
      </div>
    </div>
  </header>
);
