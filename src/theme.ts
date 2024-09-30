import { createTheme, responsiveFontSizes } from '@mui/material';


let theme = createTheme({
  palette: {
    primary: {
      main: '#3B6978',
    },
    secondary: {
      main: '#bfd9d9',
    },
  },
  typography: {
    fontFamily: "EB Garamond"
  }
});

theme  = responsiveFontSizes(theme);

export default theme;