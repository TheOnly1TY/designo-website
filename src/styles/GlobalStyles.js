import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  /* COLORS */
  /* color mode: hsl(hue, saturation, lightness) */
  --color-peach: hsl(11, 73%, 66%);
  --color-black: hsl(270, 3%, 11%);
  --color-white: hsl(0, 0%, 100%);
  --color-light-peach: hsl(11, 100%, 80%);
  --color-dark-grey: hsl(264, 5%, 20%);
  --color-light-grey: hsl(210, 17%, 95%);

  /* FONTS SIZES */
  /* 8px === 0.5rem && 16px === 1rem */
  --font-large: 3rem;
  --font-medium: 2.5rem;
  --font-regular: 1.25rem;
  --font-small: 1rem;

}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  background-color: var(--color-white);
  font-family: "Jost", sans-serif;
  scroll-behavior: smooth;
  transition: all 0.3s ;
  
}
header, main{
  max-width: 73rem;
  margin: 0 auto;
}

  @media (max-width: 600px) {
    main{
      margin-bottom: 15rem;
    }
  }
  @media (min-width: 601px) and (max-width: 1062px) {
       main{
      margin-bottom: 10rem;
    }
  }
    @media (min-width: 1063px)  {
    main{
      margin-bottom: 15rem;
    }
  }


button:hover{
  background-color: var(--color-light-peach);
  color: white;
}
li{
  list-style: none;
}
`;

export default GlobalStyles;
