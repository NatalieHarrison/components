import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Box, Container} from '@mui/system';
import { Card, CardHeader, Grid, CardContent, Stack, Typography, Paper} from '@mui/material';
import SingleBox from './components/SingleBox';
import Header from './components/Header';
import GreenBox from './components/GreenBox';
import Boxes from './components/Boxes';
import FullGreenBox from './components/FullGreenBox';
import GroupFullGreenBox from './components/GroupFullGreenBox';


const content:any = {
  header: "Products & Services that Delight" ,
  title1: "Total Open Problems",
  body1: "329,778",
  num1: "+5,690",
  title2: "Member Churn This Period",
  body2: "1,291", 
  num2: "+421",
  title3: "Acquisition to Churn Ratio",
  body3: "3.78",
  num3: "+0.37",

  title: "Total ",
  body:"230,827",
  num: "+4"
}
function App() {
  return (
    <div className="App">
      <Box>
        <Container>
          <Card>
            <Header {...content}> </Header>
            <Boxes {...content}></Boxes>
          </Card>
        
        {/* <FirstComponent {...content} ></FirstComponent> */}
        </Container>

        <Container sx = {{mt: 7}}> 
          <Stack direction = "row">
            <SingleBox {...content}></SingleBox>
            <GreenBox {...content}></GreenBox>
            <FullGreenBox {...content}></FullGreenBox>
          </Stack>

          <GroupFullGreenBox {...content}></GroupFullGreenBox>
        </Container>
        
        
        
      </Box>
     
    </div>
  );
}

export default App;
