import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { PostLink } from './Link';

const Layout = (props) => {
  const { location, title, children } = props;

  const data = useStaticQuery(graphql`
    query {
      hero: file(absolutePath: { regex: "/spring.jpg/" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const rootPath = `${__PATH_PREFIX__}/`;

  let header;

  if (location.pathname === rootPath) {
    header = (
      <h1>
        <PostLink to={'/'} imgUrl={data.hero.childImageSharp.fluid.src}>
          {title}
        </PostLink>
      </h1>
    );
  } else {
    header = (
      <h3>
        <PostLink to={'/'} imgUrl={data.hero.childImageSharp.fluid.src}>
          {title}
        </PostLink>
      </h3>
    );
  }
  return (
    <>
      <div>
        <div>
          <header>{header}</header>
          <main>{children}</main>
        </div>
        <div id="image-portal"></div>
        <footer>© {new Date().getFullYear()} </footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  location: PropTypes.object,
  title: PropTypes.string,
};

export default Layout;
