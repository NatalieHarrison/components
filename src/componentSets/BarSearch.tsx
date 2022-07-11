import Grid from '@mui/material/Grid';

import Search from '../components/Search';

const BarSearch = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-end"
      alignItems="center"
      sx={{ backgroundColor: '#212121', mt: 1, mb: 1, ml: 1, mr: 1 }}
    >
      <Grid item>
        <Search></Search>
      </Grid>
    </Grid>
  );
};
export default BarSearch;
