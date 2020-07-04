const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

const createBlogPosts = async ({ graphql, createPage }) => {
  const blogPost = path.resolve('./src/templates/blog-post.js');
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
          filter: { fileAbsolutePath: { regex: "/blog/" } }
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
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
    `
  );
  if (result.errors) {
    throw result.errors;
  }

  // Create blog posts pages.
  const posts = result.data.allMarkdownRemark.edges;

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;
    createPage({
      path: post.node.fields.slug,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        visual: post.node.frontmatter.visual,
        previous,
        next,
      },
    });
  });

  return null;
};

const createNotePages = async ({ graphql, createPage }) => {
  const notePage = path.resolve('./src/templates/note.js');
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
          filter: { fileAbsolutePath: { regex: "/notes/" } }
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                date
              }
            }
          }
        }
      }
    `
  );
  if (result.errors) {
    throw result.errors;
  }

  const notes = result.data.allMarkdownRemark.edges;

  notes.forEach((note) => {
    createPage({
      path: note.node.fields.slug,
      component: notePage,
      context: {
        slug: note.node.fields.slug,
        title: note.node.fields.slug
          .split('-')
          .map((word) => word.toUpperCase())
          .join(' '),
      },
    });
  });
};

const createMarkdownPages = async ({ graphql, createPage }) => {
  const template = path.resolve('./src/templates/markdown-page.js');
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          limit: 1000
          filter: { fileAbsolutePath: { regex: "/markdown-pages/" } }
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                date
              }
            }
          }
        }
      }
    `
  );
  if (result.errors) {
    throw result.errors;
  }

  const markdownPages = result.data.allMarkdownRemark.edges;

  markdownPages.forEach((page) => {
    const slug = page.node.fields.slug.replace('/markdown-pages', '');
    createPage({
      path: slug,
      component: template,
      context: {
        slug: page.node.fields.slug,
        title: slug
          .split('-')
          .map((word) => word.toUpperCase())
          .join(' '),
      },
    });
  });
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  return await Promise.all([
    createBlogPosts({ graphql, createPage }),
    createNotePages({ graphql, createPage }),
    createMarkdownPages({ graphql, createPage }),
  ]);
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: 'slug',
      node,
      value,
    });
  }
};
