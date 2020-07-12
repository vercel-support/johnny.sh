/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import { Link } from 'gatsby';

export const SubtleLink = (props) => (
  <Styled.a {...props} as={Link} sx={{ textDecoration: 'none' }}></Styled.a>
);

export const PostLink = (props) => (
  <Styled.a
    {...props}
    sx={{ textTransform: 'uppercase', textDecoration: 'none' }}
    as={Link}
  ></Styled.a>
);

export const SubtlePostLink = (props) => <PostLink {...props}></PostLink>;
