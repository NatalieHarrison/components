import React from 'react';

import './App.css';
import { Stack } from '@mui/material';
import { Box } from '@mui/system';

import CheckBox from './components/BoxChecks';
import BoxesChecks from './components/BoxChecks';
import ButtonsBar from './components/ButtonsBar';
import FullGreenBoxes from './components/FullGreenBox';
import GraphBar from './components/GraphBar';
import GreenBoxes from './components/GreenBoxColumn';
import GreyBoxes from './components/GreyBox';
import Header from './components/Header';
import NameHeader from './components/NameHeader';
import Search from './components/Search';
import SideBar from './components/sidebar';
import UserInfo from './components/UserInfo';
import boxComboSet from './componentSets/boxComboSet';
import BoxComboSet from './componentSets/boxComboSet';
import Chart from './componentSets/Chart';
import ChartAndBoxChecks from './componentSets/ChartAndBoxChecks';
import ChartAndBoxes from './componentSets/ChartAndBoxes';
import ChartsBoxButtonsBar from './componentSets/ChartsBoxButtonsBar';
import HeaderAndBoxes from './componentSets/HeaderAndBoxes';
import HeaderBoxesAndChart from './componentSets/HeaderBoxesAndChart';
import LogoBar from './componentSets/LogoBar';
import MultiChartsBoxesBar from './componentSets/MultiChartsBoxesBar';
import UserInfoSet from './componentSets/UserInfoSet';

const content: any = {
  header: 'Products & Services that Delight',
  greyBoxItems: [
    { title: 'Total Open Problems ', body: '329,778', num: '+5,690' },
    { title: 'Member Churn This Period', body: '1,291', num: '+421' },
    { title: 'Acquisition to Churn Ratio', body: '3.78', num: '+0.37' },
  ],
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

  //Box with check boxes
  boxChecksItems: [
    {
      categoryTitle1: 'SEG NAME',
      c1checkBox1: 'IBM',
      c1checkBox2: 'Lenovo',
      c1checkBox3: 'Cisco',
      c1checkBox4: 'SAS',
      c1checkBox5: 'BlueCross',
      categoryTitle2: 'GENERATION CATEGORYY',
      c2checkBox1: 'Boomers I',
      c2checkBox2: 'Boomers II',
      c2checkBox3: 'Gen X',
      c2checkBox4: 'Millenials',
      c2checkBox5: 'Gen Z',
      categoryTitle3: 'FICO SCORE CATEGORY',
      c3checkBox1: 'Super Prime (740-850)',
      c3checkBox2: 'Prime (680-739)',
      c3checkBox3: 'Nonprime (620-679)',
      c3checkBox4: 'Subprime(501-620)',
      categoryTitle4: 'NUMBER OF CCU PRODUCTS',
      c4checkBox1: '1',
      c4checkBox2: '2',
      c4checkBox3: '3',
      c4checkBox4: '4',
      c4checkBox5: '5+',
    },
  ],
};
function App() {
  return (
    <div className="App">
      <b>Slide 1</b>
      <ChartAndBoxes {...content}></ChartAndBoxes>

      <b>Slide 3</b>
      <Chart></Chart>

      <b>Slide 5</b>
      <ChartAndBoxChecks {...content}></ChartAndBoxChecks>

      <b>Slide 7</b>
      <HeaderBoxesAndChart {...content}></HeaderBoxesAndChart>

      <b>Slide 16</b>
      <MultiChartsBoxesBar {...content}></MultiChartsBoxesBar>

      <b> Slide 17</b>
      <ChartsBoxButtonsBar></ChartsBoxButtonsBar>

      <Box sx={{ mt: 2, mb: 2 }}>
        <BoxComboSet></BoxComboSet>
      </Box>

      <Box>
        <Box sx={{ width: 700 }}>
          <Header {...content}> </Header>
          <GreyBoxes {...content}></GreyBoxes>
        </Box>

        <Box sx={{ mt: 7, width: 700 }}>
          <Stack direction="row">
            {/* <GreenBoxes {...content}></GreenBvfoxes> */}
            {/* <FullGreenBoxes {...content}></FullGreenBoxes> */}
          </Stack>
        </Box>

        <Box sx={{ mt: 7, width: 700 }}>
          <NameHeader {...content}></NameHeader>
          <UserInfo {...content}></UserInfo>
          <Search></Search>
        </Box>

        <Box sx={{ mt: 7 }}>
          <Stack direction="row">
            <SideBar></SideBar>
            <UserInfoSet></UserInfoSet>
          </Stack>
        </Box>

        <Box>
          <LogoBar></LogoBar>
        </Box>
      </Box>
    </div>
  );
}

export default App;
