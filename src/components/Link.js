/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link } from 'gatsby';

export const SubtleLink = (props) => <Link {...props}></Link>;

const PostLinkFiltered = ({ imgUrl, ...props }) => <Link {...props} />; //eslint-disable-line

export const PostLink = (props) => (
  <PostLinkFiltered {...props}></PostLinkFiltered>
);

export const SubtlePostLink = (props) => (
  <PostLinkFiltered {...props}></PostLinkFiltered>
);
