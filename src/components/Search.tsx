import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Search = () => {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField label="Find a Member" variant="outlined" />
    </Box>
  );
};
export default Search;
