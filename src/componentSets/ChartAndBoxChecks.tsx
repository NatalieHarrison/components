import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

import LogoBar from './LogoBar';

import BoxesChecks from '../components/BoxChecks';
import GraphBar from '../components/GraphBar';
import SideBar from '../components/sidebar';

const ChartAndBoxChecks = (content) => {
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
                <Card>Chart will go here</Card>
              </Grid>
            </Grid>
          </Stack>
        </Grid>
      </Stack>
    </Box>
  );
};
export default ChartAndBoxChecks;
