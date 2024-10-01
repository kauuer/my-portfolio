import { createTheme, responsiveFontSizes } from '@mui/material';


let theme = createTheme({
  palette: {
    primary: {
      main: '#F4F4F4',
    },
    secondary: {
      main: '#333333',
    },
  },
  typography: {
    fontFamily: "EB Garamond"
  }
});

theme  = responsiveFontSizes(theme);

export default theme;