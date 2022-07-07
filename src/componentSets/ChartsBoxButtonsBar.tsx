import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

import ButtonsBar from '../components/ButtonsBar';
import GreenBoxesRow from '../components/GreenBoxRow';
import LogoBar from '../components/LogoBar';
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
    { title: 'Digital Banking Visits', body: '213,213' },
  ],
};

const ChartsBoxButtonsBar = () => {
  return (
    <Box>
      <Stack direction="column">
        <LogoBar></LogoBar>
        <ButtonsBar {...content}></ButtonsBar>
        <GreenBoxesRow {...content}></GreenBoxesRow>
      </Stack>

      <Grid container direction="row" justifyContent="center" alignItems="center">
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
    </Box>
  );
};
export default ChartsBoxButtonsBar;
