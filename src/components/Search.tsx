import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

import appTheme from '../theme';

const Search = () => {
  return (
    <ThemeProvider theme={appTheme}>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField label="Find a Member" variant="outlined" sx={{ backgroundColor: 'secondary.main' }} />
      </Box>
    </ThemeProvider>
  );
};
export default Search;
