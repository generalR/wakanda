import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import isAfter from "date-fns/is_after";

import Layout from "../components/Layout";
import HeadshotPlaceholder from "../img/headshot-placeholder.svg";
import ArrowRight from "../img/arrow-right-solid.svg";
import CustomLink from "../components/CustomLink";
import "../styles/home.scss";
import Nyheter from "../components/nyheter";

export const HomePageTemplate = ({ data, home, upcomingMeetup = null }) => {
  // const presenters = upcomingMeetup && upcomingMeetup.presenters;
  return (
    <>
      <section className="header">
        <div className="container">
          <div className="">
            {home.headerImage && (
              <img
                className="header-image"
                src={home.headerImage.image}
                alt={home.headerImage.imageAlt}
              />
            )}
          </div>
          <h3 className="header-title">
            <span className="header-title__pos-absolute"> {home.title} </span>
          </h3>
        </div>
      </section>

      <section className="services">
        <div className="container">
        <div className="services-rubrik row center-xs">
          <h2 className="">Helt kostnadsfritt</h2>
        </div>
          <li className="row center-xs">
           
            <ul className="arrow-wrapper col-xs-4 col-sm-4 col-md-4 col-lg-4">
              {" "}
              <div className="services_circle">
                {home.callToActions.firstCTA.heading}
                <img
                className="arrow"
                src={ArrowRight}
                alt={"CarlFelix Assistansassist"}
              />
              </div>
            </ul>
            <ul className="arrow-wrapper col-xs-4 col-sm-4 col-md-4 col-lg-4">
              <div className="services_circle">
                {home.callToActions.secondCTA.heading}
                <img
                className="arrow"
                src={ArrowRight}
                alt={"CarlFelix Assistansassist"}
              />
              </div>
            </ul>
            <ul className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
              <div className="services_circle">
                {home.callToActions.thirdCTA.heading} 
              </div>
        



            </ul>
          </li>
        </div>
      </section>

      <section className="nyheter">
        <div className="container">
          <h1>Nyheter</h1>
          <Nyheter />
        </div>
      </section>

      <section className="ulf-citat">
        <div className="container">
          <hr className="hr-element-top" />
          <li className="row center-xs">
            <ul className="col-xs-12">
              <img
                className=""
                src={home.UlfImage.image}
                alt={home.UlfImage.imageAlt}
              />
            </ul>
            <ul className="col-xs-12">
              <span className="ctaBlock-ctaHeading">
                <q className=""> {home.UlfCitat} </q>
              </span>
            </ul>
            <ul className="col-xs-12">
              <span className="ctaBlock-ctaHeading">
                <h2> {home.NamnTillCitat} </h2>
              </span>
            </ul>
          </li>
          <hr className="hr-element-bottom" />
        </div>
      </section>

      {/**
      <section className="container">
        <div className="row center-xs">
          <div col-xs-12 col-sm-12 col-md-12 col-lg-12>
            <img
              className=""
              src={home.UlfImage.image}
              alt={home.UlfImage.imageAlt}
            />
          </div>
          <div col-xs-12 col-sm-12 col-md-12 col-lg-12>
            <q className="">{home.UlfCitat}</q>
          </div>
          <div col-xs-12 col-sm-12 col-md-12 col-lg-12>
            <h2>{home.NamnTillCitat}</h2>
          </div>
        </div>
      </section>

 */}

      {/**  <section className="upcomingMeetup  section">
        <div className="upcomingMeetup-container  container">
          <h2 className="upcomingMeetup-title">{home.upcomingMeetupHeading}</h2>
          {upcomingMeetup ? (
            <>
              <p className="upcomingMeetup-detail  upcomingMeetup-detail--date">
                <span className="upcomingMeetup-detailLabel">Date: </span>
                {upcomingMeetup.formattedDate}
              </p>
              <p className="upcomingMeetup-detail  upcomingMeetup-detail--location">
                <span className="upcomingMeetup-detailLabel">Location: </span>
                {upcomingMeetup.location.name}
              </p>
              {presenters.length > 0 && (
                <div className="upcomingMeetup-presenters">
                  {presenters.map(presenter => (
                    <div
                      className="upcomingMeetup-presenter"
                      key={presenter.text}
                    >
                      <img
                        className="upcomingMeetup-presenterImage"
                        src={
                          presenter.image
                            ? presenter.image
                            : HeadshotPlaceholder
                        }
                        alt={
                          presenter.image
                            ? presenter.name
                            : "Default headshot placeholder"
                        }
                      />
                      <span className="upcomingMeetup-presenterName">
                        {presenter.name}
                      </span>
                      <span className="upcomingMeetup-presenterPresentationTitle">
                        {presenter.presentationTitle}
                      </span>
                      <p className="upcomingMeetup-presenterDescription">
                        {presenter.text}
                      </p>
                    </div>
                  ))}
                </div>
              )}
              <p className="upcomingMeetup-mapNote">{home.mapsNote}</p>
            </>
          ) : (
            <p className="upcomingMeetup-detail">{home.noUpcomingMeetupText}</p>
          )}
        </div>
      </section>
       */}

      {/**
      <section className="ctaBlock">
        <CustomLink
          linkType={home.callToActions.firstCTA.linkType}
          linkURL={home.callToActions.firstCTA.linkURL}
          className="ctaBlock-pattern  ctaBlock-pattern--first"
        >
          <div className="ctaBlock-cta">
            <span className="ctaBlock-ctaHeading">
              {home.callToActions.firstCTA.heading}
            </span>
            <p className="ctaBlock-ctaDescription">
              {home.callToActions.firstCTA.subHeading}
            </p>
          </div>
        </CustomLink>
        <CustomLink
          linkType={home.callToActions.secondCTA.linkType}
          linkURL={home.callToActions.secondCTA.linkURL}
          className="ctaBlock-pattern  ctaBlock-pattern--second"
        >
          <div className="ctaBlock-cta">
            <span className="ctaBlock-ctaHeading">
              {home.callToActions.secondCTA.heading}
            </span>
            <p className="ctaBlock-ctaDescription">
              {home.callToActions.secondCTA.subHeading}
            </p>
          </div>
        </CustomLink>
      </section>
       */}
    </>
  );
};

class HomePage extends React.Component {
  render() {
    const { data } = this.props;
    const {
      data: { footerData, navbarData }
    } = this.props;
    const { frontmatter: home } = data.homePageData.edges[0].node;
    const {
      seo: { title: seoTitle, description: seoDescription, browserTitle }
    } = home;
    let upcomingMeetup = null;
    // Find the next meetup that is closest to today
    data.allMarkdownRemark.edges.every(item => {
      const { frontmatter: meetup } = item.node;
      if (isAfter(meetup.rawDate, new Date())) {
        upcomingMeetup = meetup;
        return true;
      } else {
        return false;
      }
    });
    return (
      <Layout footerData={footerData} navbarData={navbarData}>
        <Helmet>
          <meta name="title" content={seoTitle} />
          <meta name="description" content={seoDescription} />
          <title> {browserTitle} </title>
        </Helmet>
        <HomePageTemplate home={home} upcomingMeetup={upcomingMeetup} />
      </Layout>
    );
  }
}

HomePage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export default HomePage;

export const pageQuery = graphql`
  query HomePageQuery {
    allMarkdownRemark(
      filter: {
        frontmatter: { presenters: { elemMatch: { text: { ne: null } } } }
      }
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      edges {
        node {
          frontmatter {
            title
            formattedDate: date(formatString: "MMMM Do YYYY @ h:mm A")
            rawDate: date
            presenters {
              name
              image
              text
              presentationTitle
            }
            location {
              mapsLatitude
              mapsLongitude
              mapsLink
              name
            }
          }
        }
      }
    }
    ...LayoutFragment
    homePageData: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "home-page" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            headerImage {
              image
              imageAlt
            }
            upcomingMeetupHeading
            noUpcomingMeetupText
            mapsNote
            callToActions {
              firstCTA {
                heading
                subHeading
                linkType
                linkURL
              }
              secondCTA {
                heading
                subHeading
                linkType
                linkURL
              }
              thirdCTA {
                heading
              }
            }
            UlfImage {
              image
              imageAlt
            }
            UlfCitat
            NamnTillCitat
            seo {
              browserTitle
              title
              description
            }
          }
        }
      }
    }
  }
`;
