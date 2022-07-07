import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

import HeaderAndBoxes from './HeaderAndBoxes';
import LogoBar from './LogoBar';

import GraphBar from '../components/GraphBar';
import GreyBoxes from '../components/GreyBox';
import SideBar from '../components/sidebar';

const ChartAndBoxes = (content) => {
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
            <Stack direction="column">
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
