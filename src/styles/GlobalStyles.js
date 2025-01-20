import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {

  
&, &.light-mode {
  /* Grey - Inspired by rare woods and minerals */
  --color-grey-0: #fff;
  --color-grey-50: #f9f7f5;
  --color-grey-100: #f1ece6;
  --color-grey-200: #e2d5ca;
  --color-grey-300: #cdb4a5;
  --color-grey-400: #b89582;
  --color-grey-500: #9b7063;
  --color-grey-600: #805a4d;
  --color-grey-700: #654439;
  --color-grey-800: #4a2f26;
  --color-grey-900: #2d1b15;

  /* Unique accent colors */
  --color-blue-100: #e6f0ef;  /* Glacier melt */
  --color-blue-700: #1f4d5c;  /* Deep fjord */
  --color-green-100: #ecf2e6;  /* Aurora moss */
  --color-green-700: #3b5c3d;  /* Nordic pine */
  --color-yellow-100: #ffecd6;  /* Baltic amber */
  --color-yellow-700: #8b4513;  /* Smoky quartz */
  --color-silver-100: #e9e6e8;  /* Pearl frost */
  --color-silver-700: #4d4147;  /* Volcanic stone */
  --color-indigo-100: #e8e4ed;  /* Nordic twilight */
  --color-indigo-700: #463a59;  /* Mystic purple */

  /* Warning/error colors - volcanic inspired */
  --color-red-100: #ffe6e0;
  --color-red-700: #993328;
  --color-red-800: #802419;

  --backdrop-color: rgba(255, 255, 255, 0.1);

  --shadow-sm: 0 1px 2px rgba(45, 27, 21, 0.04);
  --shadow-md: 0px 0.6rem 2.4rem rgba(45, 27, 21, 0.06);
  --shadow-lg: 0 2.4rem 3.2rem rgba(45, 27, 21, 0.12);

  --image-grayscale: 0;
  --image-opacity: 100%;
}

&.dark-mode {
  /* Dark mode - inspired by northern lights and midnight sun */
  --color-grey-0: #151a1f;
  --color-grey-50: #111518;  /* Darkened from #1c2228 */
  --color-grey-100: #242b33;
  --color-grey-200: #2d363f;
  --color-grey-300: #3a444f;
  --color-grey-400: #4d5b68;
  --color-grey-500: #687a8c;
  --color-grey-600: #8699b0;
  --color-grey-700: #a6b8d4;
  --color-grey-800: #cad7ed;
  --color-grey-900: #e8f0ff;

  /* Dark mode accent colors */
  --color-blue-100: #1a2c3d;  /* Polar night */ /////////////
  --color-blue-700: #a7c9e5;  /* Arctic ice */ /////////
  --color-green-100: #1c332b;  /* Boreal forest */
  --color-green-700: #b3d4c2;  /* Northern lights */
  --color-yellow-100: #332b1a;  /* Midnight sun */
  --color-yellow-700: #ffd700;  /* Golden hour */
  --color-silver-100: #1f2433;  /* Starlit fjord */
  --color-silver-700: #c0d1e5;  /* Crystal cave */
  --color-indigo-100: #1a1f33;  /* Polar twilight */
  --color-indigo-700: #b3b7e5;  /* Aurora borealis */

  /* Warning/error colors - inspired by volcanic hot springs */
  --color-red-100: #331a1f;
  --color-red-700: #e55c4d;
  --color-red-800: #cc4433;

  --backdrop-color: rgba(21, 26, 31, 0.3);

  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.3);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);

  --image-grayscale: 10%;
  --image-opacity: 90%;
}

/* Brand colors - Inspired by rare purple heart wood and aurora */
--color-brand-50: #f7f4ff;
--color-brand-100: #ede9ff;
--color-brand-200: #d8cbff;
--color-brand-500: #7b4dcd;
--color-brand-600: #6339b5;
--color-brand-700: #4c2899;
--color-brand-800: #371c73;
--color-brand-900: #25134d;

  --border-radius-tiny: 3px;
  --border-radius-sm: 5px;
  --border-radius-md: 7px;
  --border-radius-lg: 9px;


}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  /* Creating animations for dark mode */
  transition: background-color 0.3s, border 0.3s;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "Poppins", sans-serif;
  color: var(--color-grey-700);

  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-grey-200);
  color: var(--color-grey-500);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-brand-600);
  outline-offset: -1px;
}

/* Parent selector, finally 😃 */
button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;

  /* For dark mode */
  filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
}

`;

export default GlobalStyles;

