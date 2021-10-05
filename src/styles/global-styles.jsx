import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

import FiraGoRegular from "../fonts/FiraGO-Regular.ttf";
import FiraGoMedium from "../fonts/FiraGO-Medium.ttf";
import FiraGoBold from "../fonts/FiraGO-Bold.ttf";

const GlobalStyles = createGlobalStyle`
    ${normalize}
    html {
        font-size: 62.5%;
    }

    body {
        font-family: firago;
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
