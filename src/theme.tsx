import { green, grey, red, yellow } from '@mui/material/colors';
import { createTheme, PaletteColorOptions } from '@mui/material/styles';

const appTheme = createTheme({
  palette: {
    primary: {
      main: grey[900],
    },
    secondary: {
      main: grey[50],
    },
    error: {
      main: red[500],
    },
    success: {
      main: green[500],
    },
  },
});

export default appTheme;
