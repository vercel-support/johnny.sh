import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { GlobalStyle, white } from './GlobalStyles';
import { StyledLink } from './Link';

const LayoutWrapper = styled.div`
  display: flex;
  padding: 2.625rem 1.3125rem 0;
  flex-wrap: wrap;
  #image-portal {
    flex: 1;
  }
  footer {
    color: white;
    min-width: 100%;
    flex: 1;
    font-size: 0.8rem;
    text-align: center;
    height: 2.625rem;
    line-height: 2.625rem;
  }
`;

const LayoutInner = styled.div`
  min-height: calc(100vh - 5.25rem);
  background-color: ${white};
  max-width: 42rem;
  padding: 1.4rem;
  flex: 1;
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
        <LayoutInner>
          <header>{header}</header>
          <main>{children}</main>
        </LayoutInner>
        <div id="image-portal"></div>
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
