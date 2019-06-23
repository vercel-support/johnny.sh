import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import useClipBoard from '../utils/useClipBoard';
import useHover from '../utils/useHover';
import { greyscale, pink, transition } from '../components/GlobalStyles';

const CopyButton = styled.button`
  appearance: none;
  cursor: pointer;
  background-color: transparent;
  border: none;
  font-weight: bold;
  ${transition({})}
  &:hover {
    background-color: ${pink};
  }
  &:focus {
    outline-color: pink;
    outline-style: solid;
    outline-width: medium;
  }
`;

const CopyNote = styled.span`
  background-color: ${greyscale[1]};
  font-size: 0.8rem;
  padding: 0 3px;
  margin-left: 5px;
`;

const CopyToClipboard = props => {
  const [isCopied, setCopied] = useClipBoard(props.text);
  const [hoverRef, isHovered] = useHover();
  return (
    <>
      <CopyButton onClick={setCopied} ref={hoverRef}>
        {props.label}
      </CopyButton>
      {isCopied && (
        <CopyNote>
          Copied{' '}
          <span role="img" aria-label="thumbs up emoji">
            👍
          </span>
        </CopyNote>
      )}
      {isHovered && !isCopied && (
        <CopyNote>
          Copy to clipboard{' '}
          <span role="img" aria-label="clipboard emoji">
            📋
          </span>
        </CopyNote>
      )}
    </>
  );
};

CopyToClipboard.propTypes = {
  text: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default CopyToClipboard;
