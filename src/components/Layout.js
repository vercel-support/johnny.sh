import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import media from 'styled-media-query';
import { GlobalStyle, white } from './GlobalStyles';
import { StyledLink } from './Link';

const LayoutWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto;
  padding: 2.625rem 1.3125rem 0;
  #image-portal {
    grid-column: span 1;
  }
  footer {
    color: white;
    grid-column: span 2;
    min-width: 100%;
    font-size: 0.8rem;
    text-align: center;
    height: 2.625rem;
    line-height: 2.625rem;
  }
  ${media.between('medium', 'large')`
    grid-template-columns: 1fr 1fr;
  `}
  ${media.lessThan('medium')`
    grid-template-columns: 1fr;
    #image-portal {
      grid-column: 1;
      grid-row: 1;
    }
  `}
`;

const LayoutInner = styled.div`
  height: calc(100vh - 5.25rem);
  background-color: ${white};
  max-width: 42rem;
  min-width: 42rem;
  padding: 1.4rem;
  overflow-y: scroll;
  ${media.lessThan('large')`
    min-width: unset;
  `}
  ${media.lessThan('medium')`
    min-height: calc(100vh - 5.25rem);
    height: unset;
    overflow-y: initial;
    width: 100%;
    grid-row: 2;
    max-width: unset;
  `}
`;

const BigHeader = styled.h1`
  margin-top: 0;
`;

const SmallerHeader = styled.h3`
  margin-top: 0;
`;

const Layout = props => {
  const { location, title, children } = props;
  const rootPath = `${__PATH_PREFIX__}/`;
  let header;

  if (location.pathname === rootPath) {
    header = (
      <BigHeader>
        <StyledLink to={'/'}>{title}</StyledLink>
      </BigHeader>
    );
  } else {
    header = (
      <SmallerHeader>
        <StyledLink to={'/'}>{title}</StyledLink>
      </SmallerHeader>
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
