import React from 'react';

import './App.css';
import { Card, CardHeader, Grid, CardContent, Stack, Typography, Paper } from '@mui/material';
import { Box, Container } from '@mui/system';

import Boxes from './components/Boxes';
import CheckBox from './components/CheckBox';
import FullGreenBox from './components/FullGreenBox';
import GreenBox from './components/GreenBox';
import GroupFullGreenBox from './components/GroupFullGreenBox';
import Header from './components/Header';
import NameHeader from './components/NameHeader';
import Search from './components/Search';
import SideBar from './components/sidebar';
import SingleBox from './components/SingleBox';
import UserInfo from './components/UserInfo';
import UserInfoSet from './componentSets/UserInfoSet';

const content: any = {
  header: 'Products & Services that Delight',
  items: [
    { title: 'Total Open Problems', body: '329,778', num: '+5,690' },
    { title: 'Total Open Problems', body: '329,778', num: '+5,690' },

    // title2: 'Member Churn This Period',
    // body2: '1,291',
    // num2: '+421',
    // title3: 'Acquisition to Churn Ratio',
    // body3: '3.78',
    // num3: '+0.37',

    // title: 'Total ',
    // body: '230,827',
    // num: '+4',

    // //name header
    // firstName: 'Jane',
    // lastName: 'Temple',
    // //user info
    // openDate: '05/31/2007',
    // activeStatus: 'True',
    // qualificationReason: 'SEG (IBM)',
    // location: 'Chapel Hill, NC',
    // generation: 'Y',
    // gender: 'Male',
    // memberType: 'Hybrid (Branch + Digital',
    // preferredBranch: "St. Alban's",
    // preferredATM: "St. Alban's",
    // totLTProducts: '7',
    // openProducts: '4',
  ],
};
function App() {
  return (
    <div className="App">
      <Box>
        <Box sx={{ width: 700 }}>
          <Header {...content}> </Header>
          <Boxes {...content}></Boxes>
        </Box>

        <Box sx={{ mt: 7, width: 700 }}>
          <Stack direction="row">
            <SingleBox {...content}></SingleBox>
            <GreenBox {...content}></GreenBox>
            <FullGreenBox {...content}></FullGreenBox>
          </Stack>
        </Box>

        <Box sx={{ mt: 7, width: 700 }}>
          <GroupFullGreenBox {...content}></GroupFullGreenBox>
        </Box>

        <Box sx={{ mt: 7, width: 700 }}>
          <NameHeader {...content}></NameHeader>
          <UserInfo {...content}></UserInfo>
          <Search></Search>
        </Box>

        <Box sx={{ mt: 7 }}>
          <UserInfoSet></UserInfoSet>
        </Box>

        <Box>
          <SideBar></SideBar>
        </Box>

        <Box>
          <CheckBox></CheckBox>
        </Box>
      </Box>
    </div>
  );
}

export default App;
