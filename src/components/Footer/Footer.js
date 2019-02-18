import React from "react";
import "./styles.scss";
import HeadshotPlaceholder from "../../img/logo-big.png";

export const FooterTemplate = ({ data }) => {
  const { logoImage, socialLinks } = data;

  return (
    <nav className="footer">
      <div className="footer-container  container">
        <div className="footer-top">
          <div className="footer-about">
            <h4 className="footer-aboutTitle">
              <img
                className="footer-aboutTitleImg"
                src={HeadshotPlaceholder}
                alt={logoImage.imageAlt}
              />
            </h4>
          </div>
          {socialLinks.length > 0 && (
            <ul className="footer-socialMenu">
              {socialLinks.map(socialLink => (
                <li key={socialLink.linkURL} className="footer-socialMenuItem">
                  <a
                    className="footer-socialLink"
                    href={socialLink.linkURL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="footer-socialLinkIcon"
                      src={socialLink.image}
                      alt={socialLink.imageAlt}
                    />
                    {socialLink.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="footer-bottom">
          <div className="footer-flag">
            <span role="img" aria-label="Made in Canada">
              🇨🇦
            </span>
          </div>
        </div>
      </div>
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
