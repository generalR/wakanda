import React from "react";
import "./styles.scss";
import HeadshotPlaceholder from "../../img/logo-big.png";

export const FooterTemplate = ({ data }) => {
  const { logoImage, socialLinks } = data;

  return (
    <nav className="footer">
      <section className="services">
        <div className="container">
          <li className="row center-xs">
            <ul className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <img
                className="footer-aboutTitleImg"
                src={HeadshotPlaceholder}
                alt={logoImage.imageAlt}
              />
            </ul>
            <ul className="kontakt col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <h1>Kontakt</h1>
              <span className="">E: ulfhelinder@gmail.com</span> <br />
              <span className="">T: 0706456250</span>
            </ul>
          </li>
        </div>
      </section>
    </nav>
  );
};

const Footer = props => {
  if (!props.data) {
    return null;
  }
  const data = props.data.edges[0].node.frontmatter;
  return <FooterTemplate data={data} />;
};

export { Footer };
