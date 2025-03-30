import { createGlobalStyle } from "styled-components";
import MyFontOTF from "./Plakkaat.ttf";
import MyFontWOFF from "/static/Plakkaat.ttf";

// fontStyles.js
export const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'plakkaat';
  src: url(${MyFontOTF}) format('ttf'),
       /* url(${MyFontWOFF}) format('woff'); */
}

@font-face {
  font-family: 'plakk';
  src: url(${MyFontWOFF}) format('ttf'),
       /* url(${MyFontWOFF}) format('woff'); */
}


`;
