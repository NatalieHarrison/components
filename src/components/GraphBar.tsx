import * as React from 'react';

import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';
import appTheme from '../theme';
const GraphBar = () => {
  const [period, setPeriod] = React.useState('');

  const handleClick = (event: SelectChangeEvent) => {
    setPeriod(event.target.value as string);
  };

  return (
    <Box>
      <ThemeProvider theme={appTheme}>
      <Grid container direction="row" alignItems="center" sx={{ backgroundColor: 'primary.main', maxHeight: 60 }}>
        <Grid item xs={6}>
          <Stack direction="row">
            <Button sx={{ color: 'secondary.main' }}>
              <FilterAltIcon />
            </Button>
            <Typography variant="h6"  color= 'secondary.main'>
              {' '}
              Total Members{' '}
            </Typography>
          </Stack>
        </Grid>

        <Grid item xs={6}>
          <Stack direction="row" alignItems="center" justifyContent="flex-end" spacing={1}>
            <Typography color= 'secondary.main'> Period: </Typography>
            <FormControl sx={{ m: 1, minWidth: 70 }} size="small">
              <Select value={period} onChange={handleClick} sx={{ backgroundColor: 'secondary.main' }}>
                <MenuItem>WTD</MenuItem>
                <MenuItem>MTD</MenuItem>
                <MenuItem>YTD</MenuItem>
              </Select>
            </FormControl>

            <Button size="medium" variant="contained" sx={{ backgroundColor: 'secondary.main', mt: 1 }}>
              <Typography color = 'primary'> # </Typography>
            </Button>
            <Button size="medium" variant="contained" sx={{ backgroundColor: 'secondary.main', mt: 1 }}>
              <Typography color= 'primary'> % </Typography>
            </Button>
          </Stack>
        </Grid>
      </Grid>
      </ThemeProvider>
    </Box>
    
  );
};
export default GraphBar;
