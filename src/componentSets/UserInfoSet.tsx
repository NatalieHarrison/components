import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

import FullGreenBoxes from '../components/FullGreenBox';
import GreenBoxesColumn from '../components/GreenBoxColumn';
import NameHeader from '../components/NameHeader';
import SideBar from '../components/sidebar';
import UserInfo from '../components/UserInfo';
import BarSearch from './BarSearch';
import LogoBar from './LogoBar';

const content: any = {
  greenBoxItems: [
    { title: 'Member Tenure', body: '14 Years', num: '' },
    { title: 'Member Economic Participation', body: '$72,716', num: '' },
    { title: 'Member FICO Score', body: '756', num: '' },
  ],
  fullGreenBoxItems: [
    { title: 'Direct Deposit', body: 'Active', num: '' },
    { title: 'Go Green Checking', body: '$9,826.24', num: '' },
    { title: '30 Year Fixed Mortgage', body: '($156,057.46)', num: '' },
    { title: 'Bill Pay', body: 'Active', num: '' },
    { title: '60 Month Auto Loan', body: '($13,216.90)', num: '' },
    { title: 'Signature Rewards', body: '($748.44)', num: '' },
  ],

  //name header
  firstName: 'Jane',
  lastName: 'Anderson',
  //user info
  openDate: '05/31/2007',
  activeStatus: 'True',
  qualificationReason: 'SEG (IBM)',
  location: 'Chapel Hill, NC',
  generation: 'Y',
  gender: 'Male',
  memberType: 'Hybrid (Branch + Digital',
  preferredBranch: 'St. Albans',
  preferredATM: 'St. Albans',
  totLTProducts: '7',
  openProducts: '4',
};

const UserInfoSet = () => {
  return (
    <Box>
        <LogoBar></LogoBar>
        <Stack direction ="row">
        <SideBar></SideBar>
          <Grid container spacing={2} sx ={{mt:1}}>
            <Grid item xs={12}>
              <BarSearch></BarSearch>
            </Grid>
            
            <Grid item xs ={2.3}>

                <Box sx={{ backgroundColor: 'black', height: 333, width: 350, ml: 1, mr: 1 }}>Avatar profile</Box>
       
            </Grid>

            <Grid item xs={9.7}>
              <NameHeader {...content}></NameHeader>

              <Grid item xs={9}>
              
                  <UserInfo {...content}></UserInfo>
              
              </Grid>
              <Grid item xs ={1}>
              <GreenBoxesColumn {...content}></GreenBoxesColumn>
              </Grid>
            </Grid>

          <Grid item xs={4.5}>
              <FullGreenBoxes {...content}></FullGreenBoxes>
            </Grid>

          

            
          </Grid>
        </Stack>
    </Box>
  );
};
export default UserInfoSet;
