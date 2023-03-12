/* Style */
import colors from "./colors";

/* Logic */
import { createGlobalStyle } from "styled-components";

export const globalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;

    @media screen and (min-width: 1900px) {
      font-size: 87.45%;
    }
    @media screen and (min-width: 2500px) {
      font-size: 100%;
    }

    /* Scroll style */
    scroll-behavior: smooth;
    scroll-padding-top: 1.5vh;
  }

  body {
    padding-top: 30.9rem;
    background-color: ${colors.primary};
    font-family: 'Roboto', sans-serif;

    /* Handle header height */
    @media screen and (min-width: 310px) {
      padding-top: 25.3rem;
    }
    @media screen and (min-width: 328px) {
      padding-top: 19.7rem;
    }
    @media screen and (min-width: 585px) {
      padding-top: 14.1rem;
    }
    @media screen and (min-width: 773px) {
      padding-top: 8.6rem;
    }
  }

  i {
    font-style: italic;
  }
`;

export default globalStyle;
