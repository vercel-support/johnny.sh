import Image from 'gatsby-image';
import styled from 'styled-components';
import media from 'styled-media-query';

export const HeroImage = styled(Image)`
  min-height: calc(100vh - 5.25rem);
  ${media.lessThan('medium')`
    min-height: 200px;
  `}
`;
