/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import { SubtleLink } from './Link';

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
    <div sx={{ display: 'flex', justifyContent: 'flex-start' }}>
      <Image fixed={data.avatar.childImageSharp.fixed} alt={author} />
      <p>
        Personal blog by <SubtleLink to="/about">{author}</SubtleLink>
      </p>
    </div>
  );
};

export default Bio;
