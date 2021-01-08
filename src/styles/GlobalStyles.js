import { createGlobalStyle } from "styled-components";
import "normalize.css";

const GlobalStyles = createGlobalStyle`
:root {
    --yellow: #e0ad01;
    --lightYellow: hsl(46, 98%, 64%);
    --darkYellow: hsl(46, 98%, 24%);
    --silver: hsl(198, 1%, 59%);
    --lightSilver: hsl(198, 1%, 79%);
    --darkSilver: hsl(198, 1%, 39%);
}

html {
    box-sizing: border-box;
    font-family: "Open Sans", sans-serif;
}

body {
    margin: 0;
    padding: 0;
    font-size: 16px;
}
`;

export default GlobalStyles;
