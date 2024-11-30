import { createTheme, responsiveFontSizes } from '@mui/material';

// Criando o tema
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
    fontFamily: 'Roboto, serif', // Garantir que a fonte seja aplicada corretamente
    h1: {
      fontFamily: 'Roboto, serif',
    },
    h2: {
      fontFamily: 'Roboto, serif',
    },
    h3: {
      fontFamily: 'Roboto, serif',
    },
    body1: {
      fontFamily: 'Roboto, serif',
    },
    body2: {
      fontFamily: 'Roboto, serif',
    },
  },
});

// Responsividade das fontes
theme = responsiveFontSizes(theme);

export default theme;
