import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

import LogoBar from './LogoBar';

import LineChart from '../components/lineChart';
import GraphBar from '../components/lineChartBar';
import LineChartBar from '../components/lineChartBar';
import SideBar from '../components/sidebar';

const Chart = () => {
  return (
    <Box>
      <LogoBar></LogoBar>
      <Stack direction="row">
        <SideBar></SideBar>
        <Grid xs sx={{ ml: 1 }}>
          <Stack direction="column" sx={{ mt: 1, mr: 1 }}>
            <LineChartBar></LineChartBar>
            <LineChart></LineChart>
          </Stack>
        </Grid>
      </Stack>
    </Box>
  );
};
export default Chart;
