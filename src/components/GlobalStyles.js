import { createGlobalStyle } from 'styled-components';
import media from 'styled-media-query';

export const black = '#292929';
export const white = '#fffbf4';
export const pink = '#ffe5e5';
export const powderblue = '#CB2DBC';
export const greyscale = ['#D8D8D8', '#C8C8C8', '#AFAFAF', '#1F1F1F'];

export const transition = ({
  property = 'all',
  length = '0.3s',
  ease = 'ease',
}) => `
  transition: ${property} ${length} ${ease};
`;

export const GlobalStyle = createGlobalStyle`
  html {
    font-family: sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }
  body {
    margin: 0;
    padding: 0;
    color: ${black};
    -webkit-font-smoothing: auto;
    background-color: ${black};
    font-family: system-ui, HelveticaNeue, sans-serif;
    line-height: 1.55;
    box-sizing: border-box;
    min-height: 100vh;
    text-rendering: optimizeLegibility;
    -webkit-font-feature-settings: "liga","tnum","case","calt","zero","ss01","locl";    
    font-feature-settings: "liga","tnum","case","calt","zero","ss01","locl";    
  }

  ::selection {
    background: ${black};
    color: ${white};
  }
  ::-moz-selection {
    background: ${black};
    color: ${white};    
  }
  
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  main,
  menu,
  nav,
  section,
  summary {
    display: block;
  }
  audio,
  canvas,
  progress,
  video {
    display: inline-block;
  }
  audio:not([controls]) {
    display: none;
    height: 0;
  }
  progress {
    vertical-align: baseline;
  }
  [hidden],
  template {
    display: none;
  }

  a {
    text-decoration: none;
    &:hover, &:active {
      outline-width: none;
    }
  }

  abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    text-decoration: underline dotted;
  }
  b,
  strong {
    font-weight: inherit;
    font-weight: bolder;
  }
  dfn {
    font-style: italic;
  }
  mark {
    background-color: #ff0;
    color: #000;
  }
  small {
    font-size: 80%;
  }
  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sub {
    bottom: -.25em;
  }
  sup {
    top: -.5em;
  }
  img {
    border-style: none;
  }
  svg:not(:root) {
    overflow: hidden;
  }

  code,
  kbd,
  pre,
  samp {
    font-family: monospace, monospace;
  }
  figure {
    margin: 1em 40px;
  }

  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font: inherit;
    margin: 0;
    appearance: none;
  }

  optgroup {
    font-weight: 700;
  }
  button,
  input {
    overflow: visible;
  }
  button,
  select {
    text-transform: none;
  }

  [type=reset],
  [type=submit],
  button,
  html [type=button] {
    -webkit-appearance: button;
  }
  [type=button]::-moz-focus-inner,
  [type=reset]::-moz-focus-inner,
  [type=submit]::-moz-focus-inner,
  button::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }
  [type=button]:-moz-focusring,
  [type=reset]:-moz-focusring,
  [type=submit]:-moz-focusring,
  button:-moz-focusring {
    outline: 1px dotted ButtonText;
  }


  * {
    box-sizing: inherit;
  }
  *:before {
    box-sizing: inherit;
  }
  *:after {
    box-sizing: inherit;
  }

  body {
    font-weight: normal;
    word-wrap: break-word;
  }

  img {
    max-width: 100%;
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-left: 0;
    margin-right: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 0.8rem;
    color: inherit;
    font-weight: bold;
    font-family: Archivo Black;
    line-height: 1.31;
  }
  h1 {
    font-size: 2.25rem;
  }
  h2 {
    font-size: 1.62671rem;
  }
  h3 {
    font-size: 1.38316rem;
  }
  h4 {
    font-size: 1rem;
  }
  h5 {
    font-size: 0.85028rem;
  }
  h6 {
    font-size: 0.78405rem;
  }

  ul, ol {
    margin-left: 1rem;
    margin-right: 0;
    margin-top: 0;
    margin-bottom: 1rem;
    padding-bottom: 0;
    padding-left: 1.45rem;
    padding-right: 0;
    padding-top: 0;
    list-style-position: outside;
    list-style-image: none;
  }

  p {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.1rem;
    font-weight: 400;
    font-size: 1.1rem;
  }

  pre {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
    font-size: 0.85rem;
    line-height: 1.55;
    background: hsla(0, 0%, 0%, 0.04);
    border-radius: 3px;
    overflow: scroll;
    word-wrap: normal;
    padding: 1.45rem;
    width: 100%;
  }

  blockquote {
    margin-left: 1.45rem;
    margin-right: 1.45rem;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 10px;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
    font-style: italic;
    border-left: solid 3px ${greyscale[3]};
  }
  form {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
  }
  hr {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: calc(1.45rem - 1px);
    background: hsla(0, 0%, 0%, 0.2);
    border: none;
    height: 1px;
  }


  strong {
    font-weight: bold;
  }


  li {
    margin-bottom: calc(0.1rem / 2);
  }
  ol li {
    padding-left: 0;
  }
  ul li {
    padding-left: 0;
  }
  li > ol {
    margin-left: 1.45rem;
    margin-bottom: calc(1.45rem / 2);
    margin-top: 0;
    padding-left: 0;
  }
  li > ul {
    margin-left: 1.45rem;
    margin-bottom: calc(1.45rem / 2);
    margin-top: 0;
    padding-left: 0;
  }
  
  blockquote *:last-child {
    margin-bottom: 0;
  }
  li *:last-child {
    margin-bottom: 0;
  }
  p *:last-child {
    margin-bottom: 0;
  }
  li > p {
    margin-bottom: 0;
  }
  code {
    font-size: 0.85rem;
    line-height: 1.45rem;
  }
  kbd {
    font-size: 0.85rem;
    line-height: 1.45rem;
  }
  samp {
    font-size: 0.85rem;
    line-height: 1.45rem;
  }
  abbr {
    border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
    cursor: help;
  }
  acronym {
    border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
    cursor: help;
  }
  abbr[title] {
    border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
    cursor: help;
    text-decoration: none;
  }
  ${media.lessThan('medium')`  
    html {
      font-size: 100%;
      width: 100%;
    }
    ul, ol {
      margin-left: 0;
      padding-left: 1rem;
    }    
    pre {
      padding: 1rem;
      max-width: 80vw;
    }
    blockquote {
      margin-right: 1rem;
      margin-left: 1rem;
    }
      li > ol {
      margin-left: 1rem;
      margin-bottom: calc(1.45rem / 2);
    }
    li > ul {
      margin-left: 1rem;
      margin-bottom: calc(1.45rem / 2);
    }    
  `}
`;
