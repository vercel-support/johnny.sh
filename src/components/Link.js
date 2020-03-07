import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { black, white, transition } from './GlobalStyles';

export const StyledLink = styled(Link)`
  color: ${black};
  padding: 0.2rem;
  ${transition({})}
  &:hover {
    background-color: ${black};
    color: ${white};
  }
`;

export const SmallLink = styled(Link)`
  background-color: ${black};
  color: ${white};
  ${transition({})}
  border: solid 2px transparent;
  padding: 2px 10px;
  &:hover {
    background-color: ${white};
    color: ${black};
    border: solid 2px ${black};
  }
`;

export const SubtleLink = styled(Link)`
  color: ${black};
  ${transition({})}
  position: relative;
  font-weight: bold;
  &:after {
    content: '→';
    opacity: 0;
    width: 0;
    margin-left: 3px;
    vertical-align: middle;
    ${transition({})}
  }
  &:hover {
    &:after {
      opacity: 1;
    }
  }
`;

const PostLinkFiltered = ({ imgUrl, ...props }) => <Link {...props} />; //eslint-disable-line

export const PostLink = styled(PostLinkFiltered)`
  color: ${black};
  &:hover {
    background-image: url(${props => props.imgUrl});
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 156%;
    background-position: center;
  }
`;

export const SubtlePostLink = styled(PostLinkFiltered)`
  color: ${black};
  font-weight: bold;
  &:hover {
    background-image: url(${props => props.imgUrl});
    background-size: 156%;
    background-position: center;
    color: ${white};
  }
`;

export const ExternalLink = styled.a`
  color: ${black};
  ${transition({})}
  position: relative;
  font-weight: bold;
  &:after {
    content: '→';
    opacity: 0;
    width: 0;
    margin-left: 3px;
    vertical-align: middle;
    ${transition({})}
  }
  &:hover {
    &:after {
      opacity: 1;
    }
  }
`;
