import { Box, TextField } from '@mui/material';
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
