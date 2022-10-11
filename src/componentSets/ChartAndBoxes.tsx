import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

import HeaderAndBoxes from './HeaderAndBoxes';
import LogoBar from './LogoBar';

import LineChart from '../components/lineChart';
import LineChartBar from '../components/lineChartBar';
import SideBar from '../components/sidebar';

const firstSet: any = {
  header: 'Header',
  greyBoxItems: [
    { title: 'Item 1', body: '329,778', num: '+5,690' },
    { title: 'Item 2', body: '1,291', num: '+421' },
    { title: 'Item 3', body: '3.78', num: '+0.37' },
  ],
};
const secondSet: any = {
  header: 'Header 2',
  greyBoxItems: [
    { title: 'Item 4', body: '8.03', num: '-0.07' },
    { title: 'Item 5', body: '178,030', num: '+5,981' },
    { title: 'Item 6', body: '7,614', num: '+321' },
  ],
};

const thirdSet: any = {
  header: 'Header 3',
  greyBoxItems: [
    { title: 'Item 7', body: '98,611', num: '-1,529' },
    { title: 'Item 8', body: '511', num: '+22' },
    { title: 'Item 9', body: '43,797', num: '+882' },
  ],
};
const fourthSet: any = {
  header: 'Header 4',
  greyBoxItems: [
    { title: 'Item 10', body: '1,610', num: '+401' },
    { title: 'Item 11', body: '793', num: '-142' },
    { title: 'Item 12', body: '97', num: '+4' },
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
              <LineChartBar></LineChartBar>
              <LineChart></LineChart>
            </Stack>
          </Grid>
        </Stack>
      </Grid>
    </Box>
  );
};

export default ChartAndBoxes;
