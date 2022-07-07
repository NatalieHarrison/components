import Box from '@mui/material/Box';
import SideBar from "../components/sidebar";
import LogoBar from "./LogoBar";
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import GraphBar from '../components/GraphBar';
import Grid from '@mui/material/Grid';

const Chart = () => {
  return (
    <Box>
    <LogoBar></LogoBar>
    <Stack direction="row">
      <SideBar></SideBar>
      <Grid xs sx = {{ml: 1}}>
   
      <Stack direction= "column">
        
        <GraphBar></GraphBar>
        <Card> Chart will go here</Card>
        
      </Stack>
      </Grid>
    </Stack>
    
    </Box>
  )
}
export default Chart; 