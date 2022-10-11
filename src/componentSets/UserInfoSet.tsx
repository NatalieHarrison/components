import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

import BarSearch from './BarSearch';
import LogoBar from './LogoBar';

import FullGreenBoxes from '../components/FullGreenBox';
import GreenBoxesColumn from '../components/GreenBoxColumn';
import NameHeader from '../components/NameHeader';
import SideBar from '../components/sidebar';
import UserInfo from '../components/UserInfo';

const content: any = {
  greenBoxItems: [
    { title: 'gb title 1', body: '14 Years', num: '' },
    { title: 'gb title 2', body: '$72,716', num: '' },
    { title: 'gb title 3', body: '756', num: '' },
  ],
  fullGreenBoxItems: [
    { title: 'fgb title 1', body: 'Active', num: '' },
    { title: 'fgb title 2', body: '$9,826.24', num: '' },
    { title: 'fgb title 3', body: '($156,057.46)', num: '' },
    { title: 'fgb title 4', body: 'Active', num: '' },
    { title: 'fgb title 5', body: '($13,216.90)', num: '' },
    { title: 'fgb title 6', body: '($748.44)', num: '' },
  ],

  //name header
  firstName: 'Jane',
  lastName: 'Anderson',
  //user info
  openDate: '05/31/2007',
  activeStatus: 'True',
  qualificationReason: 'qualification reason ',
  location: 'Chapel Hill, NC',
  generation: 'Y',
  gender: 'Male',
  memberType: 'member type',
  preferredBranch: 'St. Albans',
  preferredATM: 'St. Albans',
  totLTProducts: '7',
  openProducts: '4',
};

const UserInfoSet = () => {
  return (
    <Box>
      <LogoBar></LogoBar>
      <Stack direction="row">
        <SideBar></SideBar>
        <Grid container spacing={2} sx={{ mt: 1 }}>
          <Grid item xs={12}>
            <BarSearch></BarSearch>
          </Grid>

          <Grid item xs={2.3}>
            <Box sx={{ backgroundColor: 'black', height: 333, width: 350, ml: 1, mr: 1 }}>Avatar profile</Box>
          </Grid>

          <Grid item xs={9}>
            <NameHeader {...content}></NameHeader>

            <Stack direction="row">
              <UserInfo {...content}></UserInfo>
              <GreenBoxesColumn {...content}></GreenBoxesColumn>
            </Stack>
          </Grid>

          <Grid item xs={5}>
            <FullGreenBoxes {...content}></FullGreenBoxes>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
};
export default UserInfoSet;
