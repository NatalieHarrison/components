import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import FavoriteIcon from '@mui/icons-material/Favorite';
import GroupIcon from '@mui/icons-material/Group';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import SavingsIcon from '@mui/icons-material/Savings';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { ThemeProvider } from '@mui/material/styles';
import appTheme from '../theme';
const SideBar = () => {
  return (
    <ThemeProvider theme={appTheme}>
    <Box sx={{ backgroundColor: 'primary.main', maxWidth: 35 }}>
      <Stack direction="column" spacing={1.5}>
        <HomeIcon fontSize="large" sx={{ color: 'secondary.main' }}></HomeIcon>
        <PersonIcon fontSize="large" sx={{ color: 'secondary.main' }}></PersonIcon>
        <GroupIcon fontSize="large" sx={{ color: 'secondary.main' }}></GroupIcon>
        <SavingsIcon fontSize="large" sx={{ color: 'secondary.main' }}></SavingsIcon>
        <DesktopWindowsIcon fontSize="large" sx={{ color: 'secondary.main' }}></DesktopWindowsIcon>
        <FavoriteIcon fontSize="large" sx={{ color: 'secondary.main' }}></FavoriteIcon>
      </Stack>
    </Box>
    </ThemeProvider>
  );
};

export default SideBar;
