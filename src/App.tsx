import React from 'react';
import './App.css';
import { Box, Container} from '@mui/system';
import { Card, CardHeader, Grid, CardContent, Stack, Typography, Paper} from '@mui/material';
import SingleBox from './components/SingleBox';
import Header from './components/Header';
import GreenBox from './components/GreenBox';
import Boxes from './components/Boxes';
import FullGreenBox from './components/FullGreenBox';
import GroupFullGreenBox from './components/GroupFullGreenBox';
import UserInfo from './components/UserInfo';
import NameHeader from './components/NameHeader';
import Avatar from './components/avatar';
import Search from './components/Search';
import UserInfoSet from './componentSets/UserInfoSet';


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
  num: "+4",

  //name header
  firstName: "Jane",
  lastName: "Temple",
  //user info
    openDate: "05/31/2007",
    activeStatus: "True", 
    qualificationReason: "SEG (IBM)",
    location: "Chapel Hill, NC",
    generation: "Y",
    gender: "Male",
    memberType: "Hybrid (Branch + Digital",
    preferredBranch: "St. Alban's",
    preferredATM: "St. Alban's",
    totLTProducts: "7",
    openProducts: "4"
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

        <Box sx = {{mt: 7}}> 
          <Stack direction = "row">
            <SingleBox {...content}></SingleBox>
            <GreenBox {...content}></GreenBox>
            <FullGreenBox {...content}></FullGreenBox>
          </Stack>

          <GroupFullGreenBox {...content}></GroupFullGreenBox>
          <NameHeader {...content} ></NameHeader>
          <UserInfo {...content}></UserInfo>
          <Search></Search>
          <UserInfoSet></UserInfoSet>
    
        </Box>
        
        
        
      </Box>
     
    </div>
  );
}

export default App;
