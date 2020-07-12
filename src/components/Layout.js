/** @jsx jsx */
import { jsx, useColorMode } from 'theme-ui';
import { PostLink, SubtleLink } from './Link';
import Bio from './Bio';

const modes = ['default', 'dark', 'deep', 'swiss'];

const ColorButton = (props) => (
  <button
    {...props}
    title="Change color mode"
    sx={{
      padding: 0,
      backgroundColor: 'transparent',
      border: 'none',
      marginLeft: '10px',
      cursor: 'pointer',
    }}
  >
    <svg
      width="20"
      height="20"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="100" height="100" fill="#C4C4C4" />
      <rect width="25" height="25" fill="#46C7BF" />
      <rect width="25" height="25" fill="#46C7BF" />
      <rect y="25" width="25" height="25" fill="#9E46C7" />
      <rect y="50" width="25" height="25" fill="#A70000" />
      <rect y="75" width="25" height="25" fill="#FE8C8C" />
      <rect x="25" width="25" height="25" fill="#19B485" />
      <rect x="25" width="25" height="25" fill="#19B485" />
      <rect x="25" y="25" width="25" height="25" fill="#B4199B" />
      <rect x="25" y="50" width="25" height="25" fill="#2D3748" />
      <rect x="25" y="75" width="25" height="25" fill="#BEFE8C" />
      <rect x="50" width="25" height="25" fill="#5046C7" />
      <rect x="50" y="25" width="25" height="25" fill="#D6BCFA" />
      <rect x="50" y="50" width="25" height="25" fill="white" />
      <rect x="50" y="75" width="25" height="25" fill="#190CAF" />
      <rect x="75" width="25" height="25" fill="#00C2C2" />
      <rect x="75" width="25" height="25" fill="#00C2C2" />
      <rect x="75" y="25" width="25" height="25" fill="#0037FF" />
      <rect x="75" y="50" width="25" height="25" fill="#6C5C54" />
      <rect x="75" y="75" width="25" height="25" fill="#C20052" />
    </svg>
  </button>
);

const Layout = (props) => {
  const { location, title, children } = props;

  const [mode, setMode] = useColorMode();
  const cycleMode = () => {
    const i = modes.indexOf(mode);
    const n = (i + 1) % modes.length;
    setMode(modes[n]);
  };

  const rootPath = `${__PATH_PREFIX__}/`;

  let header;

  if (location.pathname === rootPath) {
    header = (
      <h1 sx={{ display: 'flex', alignItems: 'center' }}>
        <PostLink to={'/'}>{title}</PostLink>
        <ColorButton onClick={cycleMode}></ColorButton>
      </h1>
    );
  } else {
    header = (
      <h3 sx={{ display: 'flex', alignItems: 'center' }}>
        <PostLink to={'/'}>{title}</PostLink>
        <ColorButton onClick={cycleMode}></ColorButton>
      </h3>
    );
  }

  return (
    <div
      sx={{
        display: 'grid',
        gridTemplateColumns: ['1fr', '1fr 1fr', 'auto 1fr'],
        gridTemplateRows: 'auto',
        padding: ['16px', '32px'],
        position: 'relative',
        gridGap: ['16px', '32px'],
      }}
    >
      <div>
        <header>{header}</header>
        <main>{children}</main>
      </div>
      <div sx={{ height: '100%', gridRow: [1, 'auto'] }}>
        <div
          id="image-portal"
          sx={{ position: 'sticky', top: ['16px', '32px'] }}
        ></div>
      </div>
      <footer
        sx={{
          height: '200px',
          padding: '40px 0 0',
        }}
      >
        <SubtleLink to="/about" sx={{ display: 'block' }}>
          <small>/about</small>
        </SubtleLink>
        <SubtleLink to="/uses" sx={{ display: 'block' }}>
          <small>/uses</small>
        </SubtleLink>
        <SubtleLink to="/notes" sx={{ display: 'block' }}>
          <small>/notes</small>
        </SubtleLink>
        <SubtleLink to="/talks" sx={{ display: 'block' }}>
          <small>/talks</small>
        </SubtleLink>
        <small sx={{ display: 'block', marginTop: '20px' }}>
          © {new Date().getFullYear()}{' '}
        </small>
      </footer>
    </div>
  );
};

export default Layout;
