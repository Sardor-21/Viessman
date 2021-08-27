import 'bootstrap/dist/css/bootstrap.css';
import {GlobalStyle} from "../styles/GlobalStyle";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
function MyApp({ Component, pageProps }) {
  return <>
  <head>
      <title>Viessman</title>
      <link rel="icon" href="about.webp" type="image/x-icon" />
      link
  </head>
  <GlobalStyle/>
  <Component {...pageProps} />
  </>

}
export default MyApp;
