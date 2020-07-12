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
      '& pre': {
        fontFamily: 'monospace',
        fontSize: 1,
        p: 3,
        color: 'text',
        bg: 'muted',
        overflow: 'scroll',
        maxWidth: ['calc(100vw - 32px)', 'calc(100vw - 64px)'],
      },
      '& code': {
        fontFamily: 'monospace',
        fontSize: 1,
        color: 'inherit',
        wordBreak: 'break-all',
      },
    }}
  >
    {children}
  </div>
);

export default Body;
