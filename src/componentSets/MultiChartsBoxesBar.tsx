import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

import LogoBar from './LogoBar';

import BarGraph from '../components/barGraph';
import ButtonsBar from '../components/ButtonsBar';
import GreenBoxesRow from '../components/GreenBoxRow';
import PieChart from '../components/pieChart';
import SideBar from '../components/sidebar';
const content: any = {
  b1Title: 'Demographics',
  b2Title: 'Channels',
  b3Title: 'Products/Services',
  b4Title: 'Money',
  b5Title: 'Loyalty',
  greenBoxItems: [
    { title: 'Total Members', body: '230,827' },
    { title: 'Active Members', body: '135,982' },
    { title: 'New Members', body: '2,722' },
    { title: '% Members in 16 Counties', body: '76%' },
    { title: 'Total Households', body: '146,110' },
    { title: 'New Households', body: '824' },
  ],
};

const MultiChartsBoxesBar = () => {
  return (
    <Box>
      <LogoBar></LogoBar>
      <Stack direction="row">
        <SideBar></SideBar>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          spacing={3}
          sx={{ mt: 1, mb: 1, mr: 1, ml: 1 }}
        >
          <Grid item xs={12}>
            <ButtonsBar {...content}></ButtonsBar>
          </Grid>

          <Grid item xs={7}>
            <Card> Member Locations (picture with state)</Card>
          </Grid>

          <Grid item xs={5}>
            <GreenBoxesRow {...content}></GreenBoxesRow>
          </Grid>

          <Grid item xs={4}>
            <Card> Members by SEG (bar graph)</Card>
            <BarGraph></BarGraph>
          </Grid>

          <Grid item xs={4}>
            <Card> Members by FICO Score Categroy (bar graph)</Card>
            <BarGraph></BarGraph>
          </Grid>

          <Grid item xs={4}>
            <Card> Members by FICO Score Category (pie chart)</Card>
            <PieChart></PieChart>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
};
export default MultiChartsBoxesBar;
