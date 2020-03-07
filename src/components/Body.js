import styled from 'styled-components';
import { black } from './GlobalStyles';

const Body = styled.div`
  a {
    color: ${black};
    position: relative;
    font-weight: 500;
    &:before {
      content: '';
      width: 0;
      position: absolute;
      left: 0;
      bottom: 0;
      transition: width 0.2s ease;
      border-bottom: 1px solid ${black};
      opacity: 0;
    }

    &:hover {
      &:before {
        width: 100%;
        opacity: 1;
      }
    }
  }
`;

export default Body;
