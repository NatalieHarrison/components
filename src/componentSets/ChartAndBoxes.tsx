import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import HeaderAndBoxes from './HeaderAndBoxes';
import LogoBar from './LogoBar';

import GraphBar from '../components/GraphBar';
import GreyBoxes from '../components/GreyBox';
import SideBar from '../components/sidebar';

const content:any = {
  header: 'Products & Services that Delight',
  greyBoxItems: [
    { title: 'Total Open Problems ', body: '329,778', num: '+5,690' },
    { title: 'Member Churn This Period', body: '1,291', num: '+421' },
    { title: 'Acquisition to Churn Ratio', body: '3.78', num: '+0.37' },
  ],
}

const ChartAndBoxes = () => {
  return (
    <Box>
      <LogoBar></LogoBar>
      <Grid>
        <Stack direction="row">
          <SideBar></SideBar>
          <Grid item xs sx={{ ml: 1, mt: 1, mr: 1 }}>
            <HeaderAndBoxes {...content}></HeaderAndBoxes>
            <HeaderAndBoxes {...content}></HeaderAndBoxes>
            <HeaderAndBoxes {...content}></HeaderAndBoxes>
            <HeaderAndBoxes {...content}></HeaderAndBoxes>
          </Grid>

          <Grid item xs>
            <Stack direction="column" sx={{ mt: 1, mr: 1 }}>
              <GraphBar></GraphBar>
              <Card> Chart will go here</Card>
            </Stack>
          </Grid>
        </Stack>
      </Grid>
    </Box>
  );
};

export default ChartAndBoxes;
