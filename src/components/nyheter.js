import React from "react"
import { StaticQuery, graphql } from "gatsby"

const Nyheter = ({  }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      
        <div>{data.site.siteMetadata.title}</div>
        
      
    )}
  />
)

export default Nyheter





{/** 
export default () => (
  <StaticQuery
    query={graphql`
      query NewsQuery {
        allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "gigs-post" } } }
          ) {
            edges {
              node {
                excerpt(pruneLength: 400)
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  templateKey
                  date(formatString: "MMMM DD, YYYY")
                  image           
                }
              }
            }
        }
      }
    `}
    render={data => (

        <div className="meetup-presenterImage">{data.title} </div>
     
    )}
  />
)



const Nyheter = class extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    return (
     
          <section className="section">
            <div className="container">
              <div className="content">
                <h1 className="has-text-weight-bold is-size-2">Latest Stories</h1>
              </div>
  
              {posts.map(({ node: post }) => (
                <div
                  className="content"
                  style={{ border: "1px solid #333", padding: "2em 4em" }}
                  key={post.id}
                >
                 <img
                    className="meetup-presenterImage"
                    src={post.frontmatter.image}
                  
                  />
                       
                  <p>
                    <Link className="has-text-primary" to={post.fields.slug}>
                      {post.frontmatter.title}
                    </Link>
                    <span> &bull; </span>
                    <small>{post.frontmatter.date}</small>
                  </p>
                  <p>
                    {post.excerpt}
                    <br />
                    <br />
                    <Link className="button is-small" to={post.fields.slug}>
                      Keep Reading →
                    </Link>
                  </p>
                </div>
              ))}
            </div>
          </section>
    
      );
  }
};

export default Nyheter;

export const nyhetsQuery = graphql`
  query nyhetsComponentQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "gigs-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            image           
          }
        }
      }
    }
  }
`;
   */} 