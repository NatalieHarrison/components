import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

import LogoBar from './LogoBar';

import BarGraph from '../components/barChart';
import BarChart from '../components/barChart';
import ButtonsBar from '../components/ButtonsBar';
import GreenBoxesRow from '../components/GreenBoxRow';
import PieChart from '../components/pieChart';
import SideBar from '../components/sidebar';
const content: any = {
  b1Title: 'b1 title ',
  b2Title: 'b2 title ',
  b3Title: 'b3 title',
  b4Title: 'b4 title',
  b5Title: 'b5 title',
  greenBoxItems: [
    { title: 'gb title 1', body: '230,827' },
    { title: 'gb title 2', body: '135,982' },
    { title: 'gb title 3', body: '2,722' },
    { title: 'gb title 4', body: '76%' },
    { title: 'gb title 5', body: '146,110' },
    { title: 'gb title 6', body: '824' },
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
            <Card> Card content can go here</Card>
          </Grid>

          <Grid item xs={5}>
            <GreenBoxesRow {...content}></GreenBoxesRow>
          </Grid>

          <Grid item xs={4}>
            <Card> Card content can go here</Card>
            <BarChart></BarChart>
          </Grid>

          <Grid item xs={4}>
            <Card> Card content can go here</Card>
            <BarChart></BarChart>
          </Grid>

          <Grid item xs={4}>
            <Card> Card content can go here</Card>
            <PieChart></PieChart>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
};
export default MultiChartsBoxesBar;
