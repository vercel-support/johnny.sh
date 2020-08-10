import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Body from '../components/Body';
import Portal from '../components/Portal';
import { HeroImage } from '../components/Image';
import { SubtleLink } from '../components/Link';

const NoteTemplate = (props) => {
  const note = props.data.markdownRemark;
  const noteTitle = note.fields && note.fields.slugToTitle;
  const gitAuthorTime = note.fields && note.fields.gitAuthorTime;
  const siteTitle = props.data.site.siteMetadata.title;
  const childNotes = props.data.childNotes.edges;

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        title={noteTitle}
        description={note.frontmatter.description || note.excerpt}
      />

      <Body dangerouslySetInnerHTML={{ __html: note.html }} />

      <em> Last modified: {gitAuthorTime}</em>
      <hr />
      {childNotes &&
        childNotes.map(({ node }) => {
          return (
            <div key={node.fields.slug}>
              <h4>
                <SubtleLink to={node.fields.slug}>
                  {node.fields.slugToTitle}
                </SubtleLink>
              </h4>
            </div>
          );
        })}
      {note.frontmatter.visual && (
        <Portal>
          <HeroImage
            fluid={note.frontmatter.visual.childImageSharp.fluid}
            alt="A cool hero image"
          />
        </Portal>
      )}
    </Layout>
  );
};

NoteTemplate.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object,
  pageContext: PropTypes.object.isRequired,
};

export default NoteTemplate;

export const pageQuery = graphql`
  query NoteBySlug($slug: String!) {
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
      fields {
        slugToTitle
        gitAuthorTime(formatString: "MMMM DD, YYYY")
      }
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
    childNotes: allMarkdownRemark(
      limit: 1000
      filter: { fields: { parentDir: { eq: $slug } } }
    ) {
      edges {
        node {
          fields {
            slug
            parentDir
            slugToTitle
          }
        }
      }
    }
  }
`;
