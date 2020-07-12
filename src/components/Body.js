/** @jsx jsx */
import { jsx } from 'theme-ui';

const Body = ({ children, ...rest }) => (
  <div
    {...rest}
    sx={{
      maxWidth: '40rem',
      '& a': {
        color: 'text',
        cursor: 'alias',
        textDecoration: 'none',
        fontWeight: 'bold',
        '&:hover': {
          color: 'background',
          backgroundColor: 'text',
        },
      },
    }}
  >
    {children}
  </div>
);

export default Body;
