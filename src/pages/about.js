import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { HeroImage } from '../components/Image';
import Portal from '../components/Portal';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Body from '../components/Body';
import { SubtleLink } from '../components/Link';

const About = (props) => {
  const { data } = props;
  const siteTitle = data.site.siteMetadata.title;
  const hero = data.hero.childImageSharp.fluid;

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="John Roberts - about" />
      <Body>
        <h1>About John</h1>
        <h4>Developer // based in Shanghai, China</h4>
        <p>
          I’m a full stack web developer located in Shanghai via Wisconsin. I’ve
          been living and working here for over 6 years. I assume a ’make it
          awesome or die’ mentality to product development. Outside of coding, I
          like making beats, bouldering, and searching for delicious 煎饼.
        </p>
        <p>
          As far as coding goes, I’m not emotionally attached to any particular
          tech stack, but at the time of writing this, I work almost entirely
          with React and NodeJS.
        </p>
        <p>
          You can see the source code for this website on this{' '}
          <a
            href="https://github.com/johncalvinroberts/johnny.sh"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub repo
          </a>{' '}
          if you want.
        </p>
      </Body>
      <p>If you want to get in contact, you can email me: johnny[@]johnny.sh</p>
      <Portal>
        <HeroImage
          fluid={hero}
          alt="A picture of John Roberts shuffling through a fanny pack"
        />
      </Portal>
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
    hero: file(relativePath: { regex: "/john-roberts.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
