/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import { graphql } from 'gatsby';
import { PostLink } from '../components/Link';
import { HeroImage } from '../components/Image';
import Portal from '../components/Portal';
import Layout from '../components/Layout';
import SEO from '../components/Seo';

const BlogIndex = (props) => {
  const { data } = props;
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;
  const hero = data.hero.childImageSharp.fluid;

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="Johnny.sh - Web Developer in Shanghai" />
      <hr />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug;
        return (
          <div
            key={node.fields.slug}
            sx={{
              ':hover': {
                backgroundImage: `url(${node.frontmatter.visual.childImageSharp.resolutions.src})`,
                color: 'background',
                backgroundSize: 'cover',
                a: {
                  color: 'background',
                  backgroundColor: 'text',
                },
                small: {
                  backgroundColor: 'text',
                },
              },
            }}
          >
            <Styled.h3 sx={{ marginBottom: 0 }}>
              <PostLink to={node.fields.slug}>{title}</PostLink>
            </Styled.h3>
            <small>{node.frontmatter.date}</small>
          </div>
        );
      })}
      <Portal>
        <HeroImage fluid={hero} alt="A cool hero image" />
      </Portal>
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    hero: file(relativePath: { regex: "/spring.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/blog/" } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            visual {
              childImageSharp {
                resolutions(width: 400) {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`;
