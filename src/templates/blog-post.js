import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Bio from '../components/Bio';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import { HeroImage } from '../components/Image';
import Portal from '../components/Portal';
import { SubtlePostLink } from '../components/Link';

const BlogPostTemplate = props => {
  const post = props.data.markdownRemark;
  const siteTitle = props.data.site.siteMetadata.title;
  const { previous, next } = props.pageContext;

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <h1>{post.frontmatter.title}</h1>
      <p>{post.frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <hr />
      <Bio />

      <ul
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          listStyle: 'none',
          padding: 0,
        }}
      >
        <li>
          {previous && (
            <SubtlePostLink
              to={previous.fields.slug}
              rel="prev"
              imgUrl={
                previous.frontmatter.visual.childImageSharp.resolutions.src
              }
            >
              ← {previous.frontmatter.title}
            </SubtlePostLink>
          )}
        </li>
        <li>
          {next && (
            <SubtlePostLink
              to={next.fields.slug}
              rel="next"
              imgUrl={next.frontmatter.visual.childImageSharp.resolutions.src}
            >
              {next.frontmatter.title} →
            </SubtlePostLink>
          )}
        </li>
      </ul>
      <Portal>
        <HeroImage
          fluid={post.frontmatter.visual.childImageSharp.fluid}
          alt="A cool hero image"
        />
      </Portal>
    </Layout>
  );
};

BlogPostTemplate.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object,
  pageContext: PropTypes.object.isRequired,
};
export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
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
