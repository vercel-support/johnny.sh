import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { ExternalLink } from '../components/Link';
import Layout from '../components/Layout';
import SEO from '../components/Seo';

const TalkItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  h3 {
    flex: 0 0 auto;
    margin-right: 5px;
  }
  p {
    flex: 1;
  }
`;

const About = props => {
  const { data } = props;
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="John Roberts - about" />
      <h1>Talks</h1>
      <p>Slides from some talks I’ve done. </p>
      <TalkItem>
        <h3>
          <ExternalLink
            href="https://prerender.johnny.sh"
            target="_blank"
            rel="noopener noreferrer"
          >
            Prerendering
          </ExternalLink>
        </h3>
        <p>Static prerendering single page apps</p>
      </TalkItem>
      <TalkItem>
        <h3>
          <ExternalLink
            href="https://mpvue.johnny.sh"
            target="_blank"
            rel="noopener noreferrer"
          >
            MpVue
          </ExternalLink>
        </h3>
        <p>My experiments building WeChat mini programs with Vue.js</p>
      </TalkItem>
      <TalkItem>
        <h3>
          <ExternalLink
            href="https://wepy.johnny.sh"
            target="_blank"
            rel="noopener noreferrer"
          >
            On Wepy
          </ExternalLink>
        </h3>
        <p>The Wepy WeChat mini program framework</p>
      </TalkItem>
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
