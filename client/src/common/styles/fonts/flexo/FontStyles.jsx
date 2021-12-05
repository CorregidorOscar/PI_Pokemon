import { createGlobalStyle } from "styled-components";
import Flexo_DemiWoff2 from "./Flexo-Demi.woff2";
import Flexo_DemiWoff from "./Flexo-Demi.woff";
import Flexo_RegularWoff2 from "./Flexo-Regular.woff2";
import Flexo_RegularWoff from "./Flexo-Regular.woff";
// import Flexo_Regular from "./Flexo-Regular.eot";
import Flexo_MediumWoff2 from "./Flexo-Medium.woff2";
import Flexo_MediumWoff from "./Flexo-Medium.woff";

export const FontStyles = createGlobalStyle`
    @font-face {
    font-family: 'Flexo';
    src: url('Flexo-HeavyIt.eot');
    src: local('Flexo Heavy Italic'), local('Flexo-HeavyIt'),
        url('Flexo-HeavyIt.eot?#iefix') format('embedded-opentype'),
        url('Flexo-HeavyIt.woff2') format('woff2'),
        url('Flexo-HeavyIt.woff') format('woff'),
        url('Flexo-HeavyIt.ttf') format('truetype');
    font-weight: 900;
    font-style: italic;
}

@font-face {
    font-family: 'Flexo';
    src: url('Flexo-ThinIt.eot');
    src: local('Flexo Thin Italic'), local('Flexo-ThinIt'),
        url('Flexo-ThinIt.eot?#iefix') format('embedded-opentype'),
        url('Flexo-ThinIt.woff2') format('woff2'),
        url('Flexo-ThinIt.woff') format('woff'),
        url('Flexo-ThinIt.ttf') format('truetype');
    font-weight: 100;
    font-style: italic;
}

@font-face {
    font-family: 'Flexo';
    src: url('Flexo-It.eot');
    src: local('Flexo Italic'), local('Flexo-It'),
        url('Flexo-It.eot?#iefix') format('embedded-opentype'),
        url('Flexo-It.woff2') format('woff2'),
        url('Flexo-It.woff') format('woff'),
        url('Flexo-It.ttf') format('truetype');
    font-weight: normal;
    font-style: italic;
}

@font-face {
    font-family: 'Flexo';
    src: url('Flexo-Light.eot');
    src: local('Flexo Light'), local('Flexo-Light'),
        url('Flexo-Light.eot?#iefix') format('embedded-opentype'),
        url('Flexo-Light.woff2') format('woff2'),
        url('Flexo-Light.woff') format('woff'),
        url('Flexo-Light.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
}

@font-face {
    font-family: 'Flexo';
    src: url('Flexo-Heavy.eot');
    src: local('Flexo Heavy'), local('Flexo-Heavy'),
        url('Flexo-Heavy.eot?#iefix') format('embedded-opentype'),
        url('Flexo-Heavy.woff2') format('woff2'),
        url('Flexo-Heavy.woff') format('woff'),
        url('Flexo-Heavy.ttf') format('truetype');
    font-weight: 900;
    font-style: normal;
}

@font-face {
    font-family: 'Flexo';
    src: url('Flexo-LightIt.eot');
    src: local('Flexo Light Italic'), local('Flexo-LightIt'),
        url('Flexo-LightIt.eot?#iefix') format('embedded-opentype'),
        url('Flexo-LightIt.woff2') format('woff2'),
        url('Flexo-LightIt.woff') format('woff'),
        url('Flexo-LightIt.ttf') format('truetype');
    font-weight: 300;
    font-style: italic;
}

@font-face {
    font-family: 'Flexo';
    src: url('Flexo-Thin.eot');
    src: local('Flexo Thin'), local('Flexo-Thin'),
        url('Flexo-Thin.eot?#iefix') format('embedded-opentype'),
        url('Flexo-Thin.woff2') format('woff2'),
        url('Flexo-Thin.woff') format('woff'),
        url('Flexo-Thin.ttf') format('truetype');
    font-weight: 100;
    font-style: normal;
}

@font-face {
    font-family: 'Flexo';
    /* src: url('Flexo-Medium.eot');
    src: local('Flexo Medium'), local('Flexo-Medium'),
        url('Flexo-Medium.eot?#iefix') format('embedded-opentype'), */
    src:    url(${Flexo_MediumWoff2}) format('woff2'),
        url(${Flexo_MediumWoff}) format('woff');
        /* url('Flexo-Medium.ttf') format('truetype'); */
    font-weight: 500;
    font-style: normal;
}

@font-face {
    font-family: 'Flexo';
    src: url('Flexo-Black.eot');
    src: local('Flexo Black'), local('Flexo-Black'),
        url('Flexo-Black.eot?#iefix') format('embedded-opentype'),
        url('Flexo-Black.woff2') format('woff2'),
        url('Flexo-Black.woff') format('woff'),
        url('Flexo-Black.ttf') format('truetype');
    font-weight: 900;
    font-style: normal;
}

@font-face {
    font-family: 'Flexo';
    src: url('Flexo-DemiIt.eot');
    src: local('Flexo DemiBold Italic'), local('Flexo-DemiIt'),
        url('Flexo-DemiIt.eot?#iefix') format('embedded-opentype'),
        url('Flexo-DemiIt.woff2') format('woff2'),
        url('Flexo-DemiIt.woff') format('woff'),
        url('Flexo-DemiIt.ttf') format('truetype');
    font-weight: 600;
    font-style: italic;
}

@font-face {
    font-family: 'Flexo';
    src: url('Flexo-BlackIt.eot');
    src: local('Flexo Black Italic'), local('Flexo-BlackIt'),
        url('Flexo-BlackIt.eot?#iefix') format('embedded-opentype'),
        url('Flexo-BlackIt.woff2') format('woff2'),
        url('Flexo-BlackIt.woff') format('woff'),
        url('Flexo-BlackIt.ttf') format('truetype');
    font-weight: 900;
    font-style: italic;
}

@font-face {
    font-family: 'Flexo';
    src: url('Flexo-MediumIt.eot');
    src: local('Flexo Medium Italic'), local('Flexo-MediumIt'),
        url('Flexo-MediumIt.eot?#iefix') format('embedded-opentype'),
        url('Flexo-MediumIt.woff2') format('woff2'),
        url('Flexo-MediumIt.woff') format('woff'),
        url('Flexo-MediumIt.ttf') format('truetype');
    font-weight: 500;
    font-style: italic;
}

@font-face {
    font-family: 'Flexo';
    src: url('Flexo-Bold.eot');
    src: local('Flexo Bold'), local('Flexo-Bold'),
        url('Flexo-Bold.eot?#iefix') format('embedded-opentype'),
        url('Flexo-Bold.woff2') format('woff2'),
        url('Flexo-Bold.woff') format('woff'),
        url('Flexo-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Flexo';
 
    /* src: local('Flexo Regular'), local('Flexo-Regular'), */
        /* url('Flexo-Regular.eot?#iefix') format('embedded-opentype'), */ 
    src:    url(${Flexo_RegularWoff2}) format('woff2'),
        url(${Flexo_RegularWoff}) format('woff');
        /* url('Flexo-Regular.ttf') format('truetype'); */
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Flexo';
    src: url('Flexo-BoldIt.eot');
    src: local('Flexo Bold Italic'), local('Flexo-BoldIt'),
        url('Flexo-BoldIt.eot?#iefix') format('embedded-opentype'),
        url('Flexo-BoldIt.woff2') format('woff2'),
        url('Flexo-BoldIt.woff') format('woff'),
        url('Flexo-BoldIt.ttf') format('truetype');
    font-weight: bold;
    font-style: italic;
}

@font-face {
    font-family: 'Flexo';
    /* src: url('Flexo-Demi.eot'); */
    /* src: local('Flexo DemiBold'), local('Flexo-Demi'), */
        /* url('Flexo-Demi.eot?#iefix') format('embedded-opentype'), */
    src:    url(${Flexo_DemiWoff2}) format('woff2'),
        url(${Flexo_DemiWoff}) format('woff');
        /* url('Flexo-Demi.ttf') format('truetype'); */
    font-weight: 600;
    font-style: normal;
}


`;
