import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

import FiraGoRegular from "../fonts/FiraGO-Regular.ttf";
import FiraGoMedium from "../fonts/FiraGO-Medium.ttf";
import FiraGoBold from "../fonts/FiraGO-Bold.ttf";

const GlobalStyles = createGlobalStyle`
    ${normalize}

    @font-face {
        font-family: firago-regular;
        src: url(${FiraGoRegular});
    }

    @font-face {
        font-family: firago-medium;
        src: url(${FiraGoMedium})
    }

    @font-face {
        font-family: firago-bold;
        src: url(${FiraGoBold})
    }
`;

export default GlobalStyles;
