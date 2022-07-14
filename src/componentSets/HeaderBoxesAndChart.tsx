import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

import HeaderAndBoxes from './HeaderAndBoxes';
import LogoBar from './LogoBar';

import GraphBar from '../components/GraphBar';
import SideBar from '../components/sidebar';
import LineChart from '../components/lineChart';

const content: any = {
  header: 'Products & Services that Delight',
  greyBoxItems: [
    { title: 'Total Open Problems ', body: '329,778', num: '+5,690' },
    { title: 'Member Churn This Period', body: '1,291', num: '+421' },
    { title: 'Acquisition to Churn Ratio', body: '3.78', num: '+0.37' },
  ],
};

const secondSetOfBoxes: any = {
  greyBoxItems: [
    { title: 'Total Lifetime Member Economic Participation ', body: '$129,653,723', num: '+$373,858' },
    { title: 'Product Applications Submitted This Period', body: '15,914', num: '+2,910' },
    { title: 'Active Direct Deposit Users This Period', body: '67,001', num: '+1,952' },
    { title: 'First Mortgages Opened This Period', body: '2,616', num: '+271' },
  ],
};

const HeaderBoxesAndChart = () => {
  return (
    <Box>
      <LogoBar></LogoBar>
      <Stack direction="row">
        <SideBar></SideBar>

        <Grid container direction="row" alignItems="flex-start" sx={{ ml: 1, mr: 1, mt: 1 }}>
          <Grid item xs={4}>
            <HeaderAndBoxes {...content}></HeaderAndBoxes>
            <HeaderAndBoxes {...secondSetOfBoxes}></HeaderAndBoxes>
          </Grid>

          <Grid item xs sx={{ ml: 1 }}>
            <GraphBar></GraphBar>
            <LineChart></LineChart>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
};
export default HeaderBoxesAndChart;
