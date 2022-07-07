import Box from '@mui/material/Box';
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
          <Grid item xs>
            <Box sx={{ ml: 1, mt: 1 }}>
              <HeaderAndBoxes {...content}></HeaderAndBoxes>
              <HeaderAndBoxes {...content}></HeaderAndBoxes>
              <HeaderAndBoxes {...content}></HeaderAndBoxes>
              <HeaderAndBoxes {...content}></HeaderAndBoxes>
            </Box>
          </Grid>

          <Grid item xs>
            <GraphBar></GraphBar>
          </Grid>
        </Stack>
      </Grid>
    </Box>
  );
};

export default ChartAndBoxes;
