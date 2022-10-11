import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

import LogoBar from './LogoBar';

import ButtonsBar from '../components/ButtonsBar';
import GreenBoxesColumn from '../components/GreenBoxColumn';
import GreenBoxesRow from '../components/GreenBoxRow';
import LineChart from '../components/lineChart';
import SideBar from '../components/sidebar';
const BarAndSmallBoxes: any = {
  b1Title: 'b title 1',
  b2Title: 'b title 2',
  b3Title: 'b title 3',
  b4Title: 'b title 4',
  b5Title: 'b title 5',
  greenBoxItems: [
    { title: 'gb title 1', body: '1,187' },
    { title: 'gb title 2', body: '3,891' },
    { title: 'gb title 3', body: '1,353' },
    { title: 'gb title 4', body: '9,102' },
    { title: 'gb title 5', body: '3,441' },
    { title: 'gb title 6', body: '6,712' },
  ],
};
const ExtraBox: any = {
  greenBoxItems: [{ title: 'gb title ', body: '457' }],
};

const ChartsBoxButtonsBar = () => {
  return (
    <Box>
      <LogoBar></LogoBar>
      <Stack direction="row">
        <SideBar></SideBar>
        <Grid container direction="row" sx={{ mt: 1, mb: 1, mr: 1, ml: 1 }}>
          <Grid item xs={12}>
            <ButtonsBar {...BarAndSmallBoxes}></ButtonsBar>
          </Grid>

          <Grid item xs={12}>
            <GreenBoxesRow {...BarAndSmallBoxes}></GreenBoxesRow>
          </Grid>

          <Grid item xs={6} justifyContent="center" alignItems="center">
            <Stack direction="column">
              <GreenBoxesColumn {...ExtraBox}></GreenBoxesColumn>

              <Card>
                <CardContent>Card title 1</CardContent>
                <LineChart></LineChart>
              </Card>

              <Card>
                <CardContent>Card title 2</CardContent>
                <LineChart></LineChart>
              </Card>
            </Stack>
          </Grid>

          <Grid item xs={6}>
            <Card>
              <CardContent>Card title 3 </CardContent>
              <LineChart></LineChart>
            </Card>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
};
export default ChartsBoxButtonsBar;
