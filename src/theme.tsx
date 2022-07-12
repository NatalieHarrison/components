import { green, grey, red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const appTheme = createTheme({
  palette: {
    primary: {
      main: grey[900], //dark grey used for background color
    },
    secondary: {
      main: grey[50], //used for text and icon colors
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
