import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Box, Container} from '@mui/system';
import { Card, CardHeader, Grid, CardContent, Stack, Typography, Paper} from '@mui/material';
import BoxHB from './components/SingleBox';
import Header from './components/Header';
import Boxes from './components/Boxes';


const content:any = {
  header: "Products & Services that Delight" ,
  title1: "Total Open Products",
  body1: "329,778",
  num1: "+5,690",
  title2: "Member Churn This Period",
  body2: "1,291", 
  num2: "+421",
  title3: "Acquisition to Churn Ratio",
  body3: "3.78",
  num3: "+0.37"
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
          <BoxHB></BoxHB> 
        </Container>
        
        
        
      </Box>
     
    </div>
  );
}

export default App;
