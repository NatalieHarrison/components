import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

import LogoBar from './LogoBar';

import BoxesChecks from '../components/BoxChecks';
import GraphBar from '../components/GraphBar';
import SideBar from '../components/sidebar';
import LineChart from '../components/lineChart';
const content: any = {
  boxChecksItems: [
    {
      categoryTitle1: 'SEG NAME',
      c1checkBox1: 'IBM',
      c1checkBox2: 'Lenovo',
      c1checkBox3: 'Cisco',
      c1checkBox4: 'SAS',
      c1checkBox5: 'BlueCross',
      categoryTitle2: 'GENERATION CATEGORYY',
      c2checkBox1: 'Boomers I',
      c2checkBox2: 'Boomers II',
      c2checkBox3: 'Gen X',
      c2checkBox4: 'Millenials',
      c2checkBox5: 'Gen Z',
      categoryTitle3: 'FICO SCORE CATEGORY',
      c3checkBox1: 'Super Prime (740-850)',
      c3checkBox2: 'Prime (680-739)',
      c3checkBox3: 'Nonprime (620-679)',
      c3checkBox4: 'Subprime(501-620)',
      categoryTitle4: 'NUMBER OF CCU PRODUCTS',
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
            <GraphBar></GraphBar>
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
