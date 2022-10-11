import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

import LogoBar from './LogoBar';

import BoxesChecks from '../components/BoxChecks';
import LineChart from '../components/lineChart';
import GraphBar from '../components/lineChartBar';
import LineChartBar from '../components/lineChartBar';
import SideBar from '../components/sidebar';
const content: any = {
  boxChecksItems: [
    {
      categoryTitle1: 'Category Title 1',
      c1checkBox1: '1',
      c1checkBox2: '2',
      c1checkBox3: '3',
      c1checkBox4: '4',
      c1checkBox5: '5',
      categoryTitle2: 'Category Title 2',
      c2checkBox1: '1',
      c2checkBox2: '2',
      c2checkBox3: '3',
      c2checkBox4: '4',
      c2checkBox5: '5',
      categoryTitle3: 'Category Title 3',
      c3checkBox1: '1',
      c3checkBox2: '2',
      c3checkBox3: '3',
      c3checkBox4: '4',
      categoryTitle4: 'Category Title 4',
      c4checkBox1: '1',
      c4checkBox2: '2',
      c4checkBox3: '3',
      c4checkBox4: '4',
      c4checkBox5: '5+',
    },
  ],
};
const ChartAndBoxChecks = () => {
  return (
    <Box>
      <LogoBar></LogoBar>
      <Stack direction="row">
        <SideBar></SideBar>
        <Grid xs sx={{ ml: 1 }}>
          <Stack direction="column" sx={{ mt: 1, mr: 1 }}>
            <LineChartBar></LineChartBar>
            <Grid direction="row">
              <Grid item xs={3}>
                <BoxesChecks {...content}></BoxesChecks>
              </Grid>

              <Grid item xs>
                <LineChart></LineChart>
              </Grid>
            </Grid>
          </Stack>
        </Grid>
      </Stack>
    </Box>
  );
};
export default ChartAndBoxChecks;
