import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

import HeaderAndBoxes from './HeaderAndBoxes';
import LogoBar from './LogoBar';

import GraphBar from '../components/GraphBar';
import SideBar from '../components/sidebar';

const content:any = {
  header: 'Products & Services that Delight',
  greyBoxItems: [
    { title: 'Total Open Problems ', body: '329,778', num: '+5,690' },
    { title: 'Member Churn This Period', body: '1,291', num: '+421' },
    { title: 'Acquisition to Churn Ratio', body: '3.78', num: '+0.37' },
  ],
}

const HeaderBoxesAndChart = () => {
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
