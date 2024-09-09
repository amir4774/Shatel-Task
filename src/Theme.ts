import { createTheme } from "@mui/material";
import IRANSans from "/fonts/IRANSansXRegular.ttf";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#F36339",
    },
    secondary: {
      main: "#303539",
    },
  },
  typography: {
    fontFamily: "IRANSans",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'IRANSans';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('IRANSans'), local('IRANSans-Regular'), url(${IRANSans}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
    MuiLink: {
      defaultProps: {
        underline: "hover",
        color: "#303031",
      },
    },
  },
});
