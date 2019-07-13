import React, { Component } from "react";
import Helmet from "react-helmet";
import $ from "jquery";
import Header from "../Header";
import Footer from "../Footer";
import Sobre from "../Sobre";
import Competencias from "../Competencias";
import Projetos from "../Projetos";
import Contato from "../Contato";
import "../../../Styles/artigos.css";
import "../../../Styles/tecnologias.css";
import "../../../Styles/style.css";

class Layout extends Component {
  componentDidMount() {
    let $doc = $("html, body");
    $(".interno").click(function() {
      $doc.animate(
        {
          scrollTop: $($.attr(this, "href")).offset().top
        },
        500
      );
      return false;
    });
  }

  render() {
    const { children, title, description } = this.props;
    return (
      <div className="container">
        <Helmet>
          <meta name="description" content={description} />
        </Helmet>
        <Header title={title} />
        <main>
          <section className="banner" />
          <Sobre />
          <Competencias />
          <Projetos />
          <Contato />
        </main>
        <Footer />
      </div>
    );
  }
}

export default Layout;
