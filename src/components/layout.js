import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { GlobalStyle } from './GlobalStyles';
import { StyledLink } from './Link';

const LayoutWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 42rem;
  padding: 2.625rem 1.3125rem;
`;

const Layout = props => {
  const { location, title, children } = props;
  const rootPath = `${__PATH_PREFIX__}/`;
  let header;

  if (location.pathname === rootPath) {
    header = (
      <h1>
        <StyledLink to={'/'}>{title}</StyledLink>
      </h1>
    );
  } else {
    header = (
      <h3>
        <StyledLink to={'/'}>{title}</StyledLink>
      </h3>
    );
  }
  return (
    <>
      <GlobalStyle />
      <LayoutWrapper>
        <header>{header}</header>
        <main>{children}</main>
        <footer>© {new Date().getFullYear()} </footer>
      </LayoutWrapper>
    </>
  );
};

Layout.propTypes = {
  location: PropTypes.object,
  title: PropTypes.string,
};

export default Layout;
