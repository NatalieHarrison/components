import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

import HeaderAndBoxes from './HeaderAndBoxes';
import LogoBar from './LogoBar';

import GraphBar from '../components/GraphBar';
import SideBar from '../components/sidebar';

const HeaderBoxesAndChart = (content) => {
  return (
    <Box>
      <LogoBar></LogoBar>
      <Stack direction="row">
        <SideBar></SideBar>

        <Grid container direction="row" alignItems="flex-start" sx={{ ml: 1, mr: 1, mt: 1 }}>
          <Grid item xs={4}>
            <HeaderAndBoxes {...content}></HeaderAndBoxes>
            <HeaderAndBoxes {...content}></HeaderAndBoxes>
          </Grid>

          <Grid item xs sx={{ ml: 1 }}>
            <GraphBar></GraphBar>
            <Card>Chart will go here</Card>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
};
export default HeaderBoxesAndChart;
