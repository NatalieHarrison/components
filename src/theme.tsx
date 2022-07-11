import { createTheme, PaletteColorOptions } from "@mui/material/styles";
import {green, grey, deepPurple} from "@mui/material/colors";


interface PaletteOptions {
  primary?: PaletteColorOptions;
}
const appTheme = createTheme({
  palette: {
    primary: {
      main: grey[900]
    },
    secondary: {
      main: green[500]
    },
  },
});

export default appTheme;
