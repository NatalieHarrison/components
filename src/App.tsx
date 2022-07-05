import React from 'react';

import './App.css';
import { Stack } from '@mui/material';
import { Box } from '@mui/system';

import CheckBox from './components/CheckBox';
import FullGreenBoxes from './components/FullGreenBox';
import GreenBoxes from './components/GreenBox';
import GreyBoxes from './components/GreyBox';
import Header from './components/Header';
import NameHeader from './components/NameHeader';
import Search from './components/Search';
import SideBar from './components/sidebar';
import UserInfo from './components/UserInfo';
import UserInfoSet from './componentSets/UserInfoSet';

const content: any = {
  // header: 'Products & Services that Delight',
  greyBoxItems: [{ title: 'Total Open Problems ', body: '329,778', num: '+5,690' }],
  fullGreenBoxItems: [{ title: 'Direct Deposit', body: 'Active', num: '' }],
  greenBoxItems: [
    { title: 'Member Tenure', body: '14 Years', num: '' },
    { title: 'Member Tenure', body: '14 Years', num: '' },
  ],
  // //name header
  firstName: 'Jane',
  lastName: 'Anderson',
  // //user info
  openDate: '05/31/2007',
  activeStatus: 'True',
  qualificationReason: 'SEG (IBM)',
  location: 'Chapel Hill, NC',
  generation: 'Y',
  gender: 'Male',
  memberType: 'Hybrid (Branch + Digital',
  preferredBranch: "St. Alban's",
  preferredATM: "St. Alban's",
  totLTProducts: '7',
  openProducts: '4',
};
function App() {
  return (
    <div className="App">
      <Box>
        <Box sx={{ width: 700 }}>
          <Header {...content}> </Header>
          <GreyBoxes {...content}></GreyBoxes>
        </Box>

        <Box sx={{ mt: 7, width: 700 }}>
          <Stack direction="row">
            {/* <GreenBoxes {...content}></GreenBoxes> */}
            {/* <FullGreenBoxes {...content}></FullGreenBoxes> */}
          </Stack>
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
