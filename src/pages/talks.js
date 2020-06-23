import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import media from 'styled-media-query';
import styled from 'styled-components';
import { ExternalLink } from '../components/Link';
import Layout from '../components/Layout';
import SEO from '../components/Seo';

const TalkItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  h3 {
    flex: 0 0 auto;
    margin-right: 5px;
    width: 200px;
    text-align: right;
    ${media.lessThan('large')`
      margin-bottom: 0;
      width: unset;
      text-align: left;
    `}
  }
  p {
    flex: 1;
    ${media.lessThan('large')`
      flex: 0 0 100%;
      margin-bottom: 1rem;
    `}
  }
`;

const About = (props) => {
  const { data } = props;
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="John Roberts - about" />
      <h1>Talks</h1>
      <p>Slides from some talks I’ve done. </p>
      <ul>
        <li>
          <ExternalLink
            href="https://wasm-talk.johnny.sh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Web Assembly for Dumb People
          </ExternalLink>
        </li>
        <li>
          <ExternalLink
            href="https://prerender.johnny.sh"
            target="_blank"
            rel="noopener noreferrer"
          >
            Prerendering
          </ExternalLink>
        </li>
        <li>
          <ExternalLink
            href="https://mpvue.johnny.sh"
            target="_blank"
            rel="noopener noreferrer"
          >
            MpVue
          </ExternalLink>
        </li>
        <li>
          <ExternalLink
            href="https://wepy.johnny.sh"
            target="_blank"
            rel="noopener noreferrer"
          >
            On Wepy
          </ExternalLink>
        </li>
      </ul>
    </Layout>
  );
};

About.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object,
};

export default About;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
