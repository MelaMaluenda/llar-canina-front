import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*, 
::before,
::after {
  box-sizing: border-box;
} 

html {
  font-family: ${({ theme }) => theme.typography.mainFontFamily}
}

body, h1, h2, h3, h4, p  {
  margin: 0;
  text-align: center;
}

ul, ol, 
li {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
}

button,
input {
  font-family: inherit;
  text-align: center;
  padding: 10px;
  border:none;
  border-radius: 5px;
}

h1, h2, h3, h4, p {
  color: ${({ theme }) => theme.colors.mainText};
  font-family: ${({ theme }) => theme.typography.titleFontFamily};
}

button {
  cursor: pointer;
}
`;

export default GlobalStyle;
