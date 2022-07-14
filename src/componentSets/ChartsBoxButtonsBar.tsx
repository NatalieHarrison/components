import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

import LogoBar from './LogoBar';

import ButtonsBar from '../components/ButtonsBar';
import GreenBoxesRow from '../components/GreenBoxRow';
import SideBar from '../components/sidebar';
import LineChart from '../components/lineChart';
const content: any = {
  b1Title: 'Demographics',
  b2Title: 'Channels',
  b3Title: 'Products/Services',
  b4Title: 'Money',
  b5Title: 'Loyalty',
  greenBoxItems: [
    { title: 'Secure Messages', body: '1,187' },
    { title: 'Call Center Calls', body: '3,891' },
    { title: 'Chat Bot Sessions', body: '1,353' },
    { title: 'ATM Visits', body: '9,102' },
    { title: 'PTM Visits', body: '3,441' },
    { title: 'Branch Visits', body: '6,712' },
  ],
};

const ChartsBoxButtonsBar = () => {
  return (
    <Box>
      <LogoBar></LogoBar>
      <Stack direction="row">
        <SideBar></SideBar>
        <Grid container direction="row" sx={{ mt: 1, mb: 1, mr: 1, ml: 1 }}>
          <Grid item xs={12}>
            <ButtonsBar {...content}></ButtonsBar>
          </Grid>

          <Grid item xs={12}>
            <GreenBoxesRow {...content}></GreenBoxesRow>
          </Grid>

          <Grid item xs={6}>
            <Stack direction="column">
              <Card>
                <CardContent>Service Events Initiated by Secure Messages</CardContent>
              </Card>

              <Card>
                <CardContent>Secure Messages by Day </CardContent>
                <LineChart></LineChart>
              </Card>

              <Card>
                <CardContent>Secure Messages by Time of Day</CardContent>
                <LineChart></LineChart>
              </Card>
            </Stack>
          </Grid>

          <Grid item xs={6}>
            <Card>
              <CardContent>Secure Messages by Month </CardContent>
              <LineChart></LineChart>
            </Card>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
};
export default ChartsBoxButtonsBar;
