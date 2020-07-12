import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { SubtleLink } from '../components/Link';
import { HeroImage } from '../components/Image';
import Portal from '../components/Portal';
import Layout from '../components/Layout';
import SEO from '../components/Seo';

const NotesIndex = (props) => {
  const { data } = props;
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;
  const hero = data.hero.childImageSharp.fluid;

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="All posts" />
      <p>
        These are my notes. General knowledge and stuff I wrote down. These
        might not be interesting to you.
      </p>
      <hr />
      {posts.map(({ node }) => {
        const title = node.fields.slug
          .split('/notes/')[1]
          .split('-')
          .map((word) => word.toUpperCase())
          .join(' ')
          .replace('/', '');
        return (
          <div key={node.fields.slug}>
            <h4>
              <SubtleLink to={node.fields.slug}>{title}</SubtleLink>
            </h4>
          </div>
        );
      })}
      <Portal>
        <HeroImage fluid={hero} alt="Quzhou, Zhejiang, China" />
      </Portal>
    </Layout>
  );
};

NotesIndex.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object,
};

export default NotesIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    hero: file(relativePath: { regex: "/quzhou.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/notes/" } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`;
