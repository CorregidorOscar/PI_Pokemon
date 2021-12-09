import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
  --colors-amaranthRed: #ce1131;
  --colors-snow: #fff3f0;

  --colors-oldRose: #bc827b;
  --colors-lightSlateGray: #798897;

  --colors-redNCS: #bd0f34;
  --colors-eerieBlack: #272727;
  --colors-normal: #a8a77a;
  --colors-fire: #ee8130;
  --colors-water: #6390f0;
  --colors-electric: #f7d02c;
  --colors-grass: #7ac74c;
  --colors-ice: #96d9d6;
  --colors-fighting: #c22e28;
  --colors-poison: #a33ea1;
  --colors-ground: #e2bf65;
  --colors-flying: #a98ff3;
  --colors-psychic: #f95587;
  --colors-bug: #a6b91a;
  --colors-rock: #b6a136;
  --colors-ghost: #735797;
  --colors-dragon: #6f35fc;
  --colors-dark: #705746;
  --colors-steel: #b7b7ce;
  --colors-fairy: #d685ad;
--colors-shadow:#4d194d;
--colors-unknown:#197278;

  --colors-primary: var(--colors-amaranthRed);
  --colors-secondary: var(--colors-snow);
  --colors-black: var(--colors-eerieBlack);
  --colors-gray: var(--colors-lightSlateGray);
  --colors-redlight: var(--colors-oldRose);
  --colors-reddark: var(--colors-redNCS);
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
h1,
h2,
h3,
h4,
ul,
ol,
li,
label,
span,
p,
a,
button,
input,
input::placeholder,
textarea,
select,
option,
div {
  text-decoration: none;
  font-family: "Flexo";
  font-weight: 600;
  /* color: rgb(var(--colors-text)); */
}
body {
  font-size: 62.5%;
  margin: 0;
  font-family: "Flexo", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}
`;
