import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import styled from 'styled-components';
import { SubtleLink } from './Link';

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
    query {
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

  const { author } = data.site.siteMetadata;
  return (
    <BioOuter>
      <Image fixed={data.avatar.childImageSharp.fixed} alt={author} />
      <p>
        Personal blog by <SubtleLink to="/about">{author}</SubtleLink>
      </p>
    </BioOuter>
  );
};

export default Bio;
