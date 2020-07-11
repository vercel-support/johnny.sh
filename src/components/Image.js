/** @jsx jsx */
import { jsx } from 'theme-ui';
import Image from 'gatsby-image';

export const HeroImage = (props) => (
  <Image {...props} sx={{ height: 'calc(100vh - 5.25rem)' }} />
);
