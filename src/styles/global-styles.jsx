import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import FiraGoRegular from '../fonts/FiraGO-Book.ttf';
import FiraGoMedium from '../fonts/FiraGO-Medium.otf';
import FiraGoBold from '../fonts/FiraGO-Bold.otf';

const GlobalStyles = createGlobalStyle`
    ${normalize}
    a {
    text-decoration: none;
    color: unset;
  }
  h1, h2, h3, h4, h5 {
    font-size: unset;
    margin: 0rem;
    font-weight: normal;
    
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  textarea {
    width: unset;
  }
 
  html {
    font-size: 62.5%;
  }
  ul {
    list-style-type: none;
  }

    body {
        font-family: firago;
        overflow-x: hidden;
    }

    @font-face {
        font-family: firago;
        src: url(${FiraGoRegular});
        font-weight:400;
    }

    @font-face {
        font-family: firago;
        src: url(${FiraGoMedium});
        font-weight:500;
    }

    @font-face {
        font-family: firago;
        src: url(${FiraGoBold});
        font-weight:600;
    }
`;

export default GlobalStyles;
