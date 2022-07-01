import { Box, Container, Stack, Grid} from '@mui/material';
import GreenBox from '../components/GreenBox';
import NameHeader from '../components/NameHeader';
import UserInfo from "../components/UserInfo";
import FullGreenBox from "../components/FullGreenBox";
import GroupFullGreenBox from '../components/GroupFullGreenBox';
import SideBar from '../components/sidebar';
import { Group } from '@mui/icons-material';

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

        <Box sx = {{ml: 2,backgroundColor: "#bdbdbd", height: 650, maxWidth: 1320}}>
            <Box>
                <Grid container spacing = {2}>
                    <Grid item xs = {3.5}>
                        <Box sx = {{backgroundColor: "black", height: 333, width: 350,ml:1, mr: 1}}>
                                Avatar profile
                        </Box> 
                    </Grid>
                    <Grid xs = {4}>
                        <Box sx = {{width: 946}}>
                            <NameHeader {...content}></NameHeader>

                            <Stack direction = "row">
                                <UserInfo {...content}></UserInfo>
                                <Stack direction = "column">
                                    <GreenBox {...content}></GreenBox>
                                    <GreenBox {...content}></GreenBox>
                                    <GreenBox {...content}></GreenBox>
                                    
                                    
                                </Stack>
                            </Stack>
                            
                        </Box>
                    </Grid>

                    <Grid xs ={5.2}>
                        <GroupFullGreenBox {...content}></GroupFullGreenBox>
                        <GroupFullGreenBox {...content}></GroupFullGreenBox>
                    
                  
                            
                            
                        
                    </Grid>





                </Grid>


                {/* <Stack direction = "row">
                    <Box sx = {{backgroundColor: "black", height: 350, width: 350,ml:1, mr: 1}}>
                        Avatar profile
                    </Box> 

                    <Box sx = {{width: 960}}>
                        <NameHeader {...content}></NameHeader>
                        <Stack direction = "row">
                
                            <UserInfo {...content}></UserInfo>
                    

                            <Stack direction = "column">
                                <GreenBox {...content}></GreenBox>
                                <GreenBox {...content}></GreenBox>
                                <GreenBox {...content}></GreenBox>
                            </Stack>

                        </Stack>
                        
                    </Box>
                </Stack> */}

     
{/* 
                    <GroupFullGreenBox {...content}></GroupFullGreenBox> */}
            
                

            </Box> 
            
          
        </Box>
    )
}
export default UserInfoSet;
