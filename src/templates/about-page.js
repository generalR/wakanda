import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import ReactMarkdown from "react-markdown";
import Helmet from "react-helmet";

import Layout from "../components/Layout";
import HTMLContent from "../components/Content";
import "../styles/about-page.scss";

export const AboutPageTemplate = props => {
  const { page } = props;

  return (
    <article className="about">
      <div className="about-container container">
        <section className="om-felix-wrapper ">
        <h1 className="om-fleix_title">{page.frontmatter.title}</h1> 
            <div className="om-felix-wrapper_row row"> 
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                  <img src={page.frontmatter.mainImage.image1} alt={page.frontmatter.mainImage.imageAlt1} />
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                <h1 className="om-felix-wrapper_year">{page.frontmatter.mainImage.year1}</h1> 
                  <h1 className="">{page.frontmatter.mainImage.beskrivning1}</h1> 
                </div>
              </div>

          <div className="om-felix-wrapper_row row"> 
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
            <h1 className="om-felix-wrapper_year">{page.frontmatter.mainImage.year2}</h1> 
              <h1 className="">{page.frontmatter.mainImage.beskrivning2}</h1>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
              <img src={page.frontmatter.mainImage.image2} alt={page.frontmatter.mainImage.imageAlt2} />
            </div>
          </div>

          <div className="om-felix-wrapper_row row"> 
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
            
              <img src={page.frontmatter.mainImage.image3} alt={page.frontmatter.mainImage.imageAlt3} />
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
            <h1 className="om-felix-wrapper_year">{page.frontmatter.mainImage.year3}</h1> 
              <h1 className="">{page.frontmatter.mainImage.beskrivning3}</h1>
            </div>
          </div>

          <div className="om-felix-wrapper_row row"> 
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
            <h1 className="om-felix-wrapper_year">{page.frontmatter.mainImage.year4}</h1> 
              <h1 className="">{page.frontmatter.mainImage.beskrivning4}</h1>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
              <img src={page.frontmatter.mainImage.image4} alt={page.frontmatter.mainImage.imageAlt4} />
            </div>
          </div>
        </section>
      </div>
    </article>
  );
};

const AboutPage = ({ data }) => {
  const { markdownRemark: page, footerData, navbarData } = data;
  const {
    frontmatter: {
      seo: { title: seoTitle, description: seoDescription, browserTitle },
    },
  } = page;

  return (
    <Layout footerData={footerData} navbarData={navbarData}>
      <Helmet>
        <meta name="title" content={seoTitle} />
        <meta name="description" content={seoDescription} />
        <title>{browserTitle}</title>
      </Helmet>
      <AboutPageTemplate page={{ ...page, bodyIsMarkdown: false }} />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        mainImage {
          image1
          imageAlt1
          year1
          beskrivning1
          image2
          imageAlt2
          year2
          beskrivning2
          image3
          imageAlt3
          year3
          beskrivning3
          image4
          imageAlt4
          year4
          beskrivning4
        }
        seo {
          browserTitle
          title
          description
        }
      }
    }
    ...LayoutFragment
  }
`;