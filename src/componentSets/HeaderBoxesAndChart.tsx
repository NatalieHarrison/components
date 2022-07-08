import Box from '@mui/material/Box';
import SideBar from '../components/sidebar';
import HeaderAndBoxes from "./HeaderAndBoxes";
import LogoBar from "./LogoBar";
import Stack from '@mui/material/Stack';
import GraphBar from '../components/GraphBar';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';

const HeaderBoxesAndChart = (content) =>
{
  return(
    <Box>
      <LogoBar></LogoBar>
      <Stack direction ="row">
        <SideBar></SideBar>

         <Grid container direction="row"  alignItems="flex-start" sx={{ml:1,mr:1, mt:1}}>
          <Grid item xs ={4}>
            <HeaderAndBoxes {...content}></HeaderAndBoxes>
            <HeaderAndBoxes {...content}></HeaderAndBoxes>
          </Grid>

          <Grid item xs sx ={{ml:1}}>
            <GraphBar></GraphBar>
            <Card>Chart will go here</Card>
          </Grid>
         </Grid>

      </Stack>
    </Box>

  )
}
export default HeaderBoxesAndChart;