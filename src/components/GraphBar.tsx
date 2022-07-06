import * as React from 'react';

import FilterAltIcon from '@mui/icons-material/FilterAlt';
import FilterListIcon from '@mui/icons-material/FilterList';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
const GraphBar = () => {
  const [period, setPeriod] = React.useState('');

  const handleClick = (event: SelectChangeEvent) => {
    setPeriod(event.target.value as string);
  };

  return (
    <Box>
      <Grid container direction="row" alignItems="center" sx={{ backgroundColor: '#212121', mt: 1, height: 60 }}>
        <Grid item xs={6}>
          <Stack direction="row">
            <Button sx={{ color: '#9e9e9e' }}>
              <FilterAltIcon />
            </Button>
            <Typography variant="h6" sx={{ color: 'white' }}>
              {' '}
              Total Members{' '}
            </Typography>
          </Stack>
        </Grid>

        <Grid item xs={6}>
          <Stack direction="row" alignItems="center" justifyContent="flex-end" spacing={1}>
            <Typography sx={{ color: 'white' }}> Period: </Typography>
            <FormControl sx={{ m: 1, minWidth: 70 }} size="small">
              <Select value={period} onChange={handleClick} sx={{ backgroundColor: 'white' }}>
                <MenuItem>WTD</MenuItem>
                <MenuItem>MTD</MenuItem>
                <MenuItem>YTD</MenuItem>
              </Select>
            </FormControl>

            {/* <Button onClick={handleClick} size = "medium" variant="contained" sx={{backgroundColor: "white"}} >
            <Typography sx={{color: "black"}}>YTD </Typography>
            <FilterListIcon fontSize="small" sx={{color:"black"}}/>
          </Button> */}

            <Button size="medium" variant="contained" sx={{ backgroundColor: 'white', mt: 1 }}>
              <Typography sx={{ color: 'black' }}> # </Typography>
            </Button>
            <Button size="medium" variant="contained" sx={{ backgroundColor: 'white', mt: 1 }}>
              <Typography sx={{ color: 'black' }}> % </Typography>
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};
export default GraphBar;
