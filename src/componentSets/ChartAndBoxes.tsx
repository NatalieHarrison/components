import LogoBar from "./LogoBar";
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import SideBar from "../components/sidebar";
import GreyBoxes from "../components/GreyBox";
import HeaderAndBoxes from "./HeaderAndBoxes";
import GraphBar from "../components/GraphBar";


const ChartAndBoxes = (content) => {
  return (
    <Box>
      <LogoBar></LogoBar>
      <Grid>
        
          <Stack direction="row">
            <SideBar></SideBar>
            <Grid item xs = {6}>
              <Box sx={{ml:1, mt: 1}}>
                <HeaderAndBoxes {...content}></HeaderAndBoxes>
                <HeaderAndBoxes {...content}></HeaderAndBoxes>
                <HeaderAndBoxes {...content}></HeaderAndBoxes>
                <HeaderAndBoxes {...content}></HeaderAndBoxes>
              </Box>
            </Grid>
         
       

        <Grid item xs = {6}>
          <GraphBar></GraphBar>
        </Grid>
        </Stack>
      </Grid>

      

    </Box>
  )
}

export default ChartAndBoxes;