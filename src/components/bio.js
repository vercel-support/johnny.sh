/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import styled from 'styled-components';

const BioOuter = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  > p {
    margin-bottom: 0;
    margin-left: 10px;
  }
`;

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/logo2.png/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `);

  const { author, social } = data.site.siteMetadata;
  return (
    <BioOuter>
      <Image fixed={data.avatar.childImageSharp.fixed} alt={author} />
      <p>
        Personal blog by <strong>{author}</strong>.{' '}
        <a href={`https://twitter.com/${social.twitter}`}>Twitter</a>
      </p>
    </BioOuter>
  );
};

export default Bio;
