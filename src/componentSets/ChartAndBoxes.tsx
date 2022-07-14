import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import HeaderAndBoxes from './HeaderAndBoxes';
import LogoBar from './LogoBar';

import GraphBar from '../components/GraphBar';

import SideBar from '../components/sidebar';

import LineChart from '../components/lineChart';

const firstSet: any = {
  header: 'Products & Services that Delight',
  greyBoxItems: [
    { title: 'Total Open Problems ', body: '329,778', num: '+5,690' },
    { title: 'Member Churn This Period', body: '1,291', num: '+421' },
    { title: 'Acquisition to Churn Ratio', body: '3.78', num: '+0.37' },
  ],
};
const secondSet: any = {
  header: 'Intentional Culture',
  greyBoxItems: [
    { title: 'Average Relationship NPS ', body: '8.03', num: '-0.07' },
    { title: 'Total Lives Impacted', body: '178,030', num: '+5,981' },
    { title: 'Low Income First Home Mortgages', body: '7,614', num: '+321' },
  ],
};

const thirdSet: any = {
  header: 'Innovations That Differentiate',
  greyBoxItems: [
    { title: 'Digital Banking Users This Period', body: '98,611', num: '-1,529' },
    { title: 'Self-Service Functions Available', body: '511', num: '+22' },
    { title: 'Self-Service Users This Period', body: '43,797', num: '+882' },
  ],
};
const fourthSet: any = {
  header: 'Frictionless Operations',
  greyBoxItems: [
    { title: 'Service Requests This Period', body: '1,610', num: '+401' },
    { title: 'Live Agent Transfers This Period', body: '793', num: '-142' },
    { title: 'Backend Processes Automated', body: '97', num: '+4' },
  ],
};

const ChartAndBoxes = () => {
  return (
    <Box>
      <LogoBar></LogoBar>
      <Grid>
        <Stack direction="row">
          <SideBar></SideBar>
          <Grid item xs sx={{ ml: 1, mt: 1, mr: 1 }}>
            <HeaderAndBoxes {...firstSet}></HeaderAndBoxes>
            <HeaderAndBoxes {...secondSet}></HeaderAndBoxes>
            <HeaderAndBoxes {...thirdSet}></HeaderAndBoxes>
            <HeaderAndBoxes {...fourthSet}></HeaderAndBoxes>
          </Grid>

          <Grid item xs>
            <Stack direction="column" sx={{ mt: 1, mr: 1 }}>
              <GraphBar></GraphBar>
              <LineChart></LineChart>
            </Stack>
          </Grid>
        </Stack>
      </Grid>
    </Box>
  );
};

export default ChartAndBoxes;
