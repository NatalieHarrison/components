import { Box, Container, Stack } from '@mui/material';
import GreenBox from '../components/GreenBox';
import NameHeader from '../components/NameHeader';
import UserInfo from "../components/UserInfo";
import FullGreenBox from "../components/FullGreenBox";
import GroupFullGreenBox from '../components/GroupFullGreenBox';
import SideBar from '../components/sidebar';

const content:any = {
    header: "Products & Services that Delight" ,
    title1: "Total",
    body1: "329,778",
    num1: "+5,690",
    title2: "Members ",
    body2: "1,291", 
    num2: "+421",
    title3: "Acquisition",
    body3: "3.78",
    num3: "+0.37",
  
    title: "Total ",
    body:"230,827",
    num: "+4",
  
    //name header
    firstName: "Jane",
    lastName: "Temple",
    //user info
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

const UserInfoSet = () => {
    return(
        <Box sx = {{ml: 2,backgroundColor: "#bdbdbd", height: 650, maxWidth: 1300}}>
            <Stack direction = "row" spacing = {1}> 
            {/* This stack is used to put the sidebar on the side of everything to the right of it  */}
                <SideBar></SideBar>
            <Box>
            <Box sx = {{ml: 39.5, width: 945}}> 
            
                <NameHeader {...content}></NameHeader>
            </Box>

            <Stack direction = "row">
            <Box sx = {{backgroundColor: "black", height: 300, width: 300,ml:1, mr: 1, mt: 2}}>
                Avatar profile
                
            </Box>
            <Stack direction = "row"> 
                <Box>
                    <UserInfo {...content}></UserInfo>
                </Box>

                <Box sx ={{ height: 330}}>
                    <GreenBox {...content}></GreenBox>
                    <GreenBox {...content}></GreenBox>
                    <GreenBox {...content}></GreenBox>
                </Box>
            </Stack>
            </Stack>

            <Box sx = {{width: 529}}>
                <Stack direction = "column" spacing = {2}>
                    <GroupFullGreenBox {...content}></GroupFullGreenBox>

                    <GroupFullGreenBox {...content}></GroupFullGreenBox>
                </Stack>
            </Box> 
            </Box>     

            </Stack>
        </Box>
    )
}
export default UserInfoSet;
