import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import LogoBar from './LogoBar';

import GreyBoxes from '../components/GreyBox';
import Header from '../components/Header';
import SideBar from '../components/sidebar';

const HeaderAndBoxes = (content) => {
  return (
    <Box>
      <Header {...content}></Header>
      <GreyBoxes {...content}></GreyBoxes>
    </Box>
  );
};
export default HeaderAndBoxes;
