import Box from '@mui/material/Box';

import GreyBoxes from '../components/GreyBox';
import Header from '../components/Header';

const HeaderAndBoxes = (content) => {
  return (
    <Box>
      <Header {...content}></Header>
      <GreyBoxes {...content}></GreyBoxes>
    </Box>
  );
};
export default HeaderAndBoxes;
