import React from "react";
import { graphql } from "gatsby";

import "@fortawesome/fontawesome-free/css/all.min.css";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

export default ({ data }) => (
  <Layout
    title={data.site.siteMetadata.title}
    description={data.site.siteMetadata.description}
  >
    <SEO />
  </Layout>
);

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
