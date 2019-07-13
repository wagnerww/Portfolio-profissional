import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

export default () => (
  <Layout>
    <p>Infelizmente a página desejada não pode ser encontrada!</p>
    <br />
    <p>
      Continue por <a href="/">aqui</a>
    </p>
    <SEO title="404: Not found" location="/404" />
  </Layout>
);
