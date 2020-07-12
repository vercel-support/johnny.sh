import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Body from '../components/Body';

const NoteTemplate = (props) => {
  const note = props.data.markdownRemark;
  const siteTitle = props.data.site.siteMetadata.title;

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        title={note.frontmatter.title}
        description={note.frontmatter.description || note.excerpt}
      />
      {note.frontmatter.title && <h1>{note.frontmatter.title}</h1>}
      <p>{note.frontmatter.date}</p>
      <Body dangerouslySetInnerHTML={{ __html: note.html }} />
      <hr />
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
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`;
