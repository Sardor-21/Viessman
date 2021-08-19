import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}
*{
  box-sizing: border-box;
}
ul , li {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
a ,a:hover {
  color: black;
  text-decoration: none;
}
`;
export {GlobalStyle};