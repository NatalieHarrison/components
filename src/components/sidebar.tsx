import {Box, Stack} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';
import SavingsIcon from '@mui/icons-material/Savings';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Home } from '@mui/icons-material';

const SideBar = () => {
    return(
        <Box sx= {{backgroundColor: "#212121", width: 40, height: 650}}>
            <Stack direction = "column" spacing = {1.5} > 
                <HomeIcon fontSize = "large"sx = {{color: "#e0e0e0"}}></HomeIcon>
                <PersonIcon fontSize = "large"sx = {{color: "#e0e0e0"}}></PersonIcon>
                <GroupIcon fontSize = "large"sx = {{color: "#e0e0e0"}}></GroupIcon>
                <SavingsIcon fontSize = "large"sx = {{color: "#e0e0e0"}}></SavingsIcon>
                <DesktopWindowsIcon fontSize = "large"sx = {{color: "#e0e0e0"}}></DesktopWindowsIcon>
                <FavoriteIcon fontSize = "large"sx = {{color: "#e0e0e0"}}></FavoriteIcon>
            </Stack>
        </Box>
    )
}

export default SideBar; 