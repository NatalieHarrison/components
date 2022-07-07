import GreyBoxes from "../components/GreyBox";
import Header from "../components/Header";
import Box from '@mui/material/Box';
import LogoBar from "./LogoBar";
import Stack from '@mui/material/Stack';
import SideBar from "../components/sidebar";

const HeaderAndBoxes = (content) => {
  return (
    <Box>
      <Header {...content}></Header>
      <GreyBoxes {...content}></GreyBoxes>
    </Box>
  )
}
export default HeaderAndBoxes; 