import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Portal from '../components/Portal';
import { HeroImage } from '../components/Image';
import SEO from '../components/Seo';
import Body from '../components/Body';

const PageTemplate = (props) => {
  const page = props.data.markdownRemark;
  const siteTitle = props.data.site.siteMetadata.title;

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        title={page.frontmatter.title}
        description={page.frontmatter.description || page.excerpt}
      />
      <Body dangerouslySetInnerHTML={{ __html: page.html }} />
      <hr />
      {page.frontmatter.visual && (
        <Portal>
          <HeroImage
            fluid={page.frontmatter.visual.childImageSharp.fluid}
            alt="A cool hero image"
          />
        </Portal>
      )}
    </Layout>
  );
};

PageTemplate.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object,
  pageContext: PropTypes.object.isRequired,
};

export default PageTemplate;

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        description
        visual {
          childImageSharp {
            fluid(maxWidth: 2000, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
