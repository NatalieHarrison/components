import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

import LogoBar from './LogoBar';

import ButtonsBar from '../components/ButtonsBar';
import GreenBoxesRow from '../components/GreenBoxRow';
import SideBar from '../components/sidebar';

const ChartsBoxButtonsBar = (content) => {
  return (
    <Box>
      <LogoBar></LogoBar>
      <Stack direction="row">
        <SideBar></SideBar>
        <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ mt: 1, mb: 1, mr: 1, ml: 1 }}>
          <Grid item xs>
            <ButtonsBar {...content}></ButtonsBar>

            <GreenBoxesRow {...content}></GreenBoxesRow>
          </Grid>

          <Grid item xs={6}>
            <Stack direction="column">
              <Card>
                <CardContent>Service Events Initiated by Secure Messages</CardContent>
              </Card>

              <Card>
                <CardContent>Secure Messages by Day (Graph)</CardContent>
              </Card>

              <Card>
                <CardContent>Secure Messages by Time of Day</CardContent>
              </Card>
            </Stack>
          </Grid>

          <Grid item xs={6}>
            <Card>
              <CardContent>Secure Messages by Month (Blown up graph)</CardContent>
            </Card>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
};
export default ChartsBoxButtonsBar;
