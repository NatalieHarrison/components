import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';

import GreyBoxes from '../components/GreyBox';
import Header from '../components/Header';
const content: any = {
  header: 'Products & Services that Delight',
  greyBoxItems: [
    { title: 'Total Open Products', body: '329,778', num: '+5,690' },
    { title: 'Member Churn This Period', body: '50,519', num: '+421' },
    { title: 'Acquisition to Churn Ratio', body: '3.78', num: '+0.37' },
  ],
};

const BoxComboSet = () => {
  return (
    <Box sx={{ backgroundColor: '#424242' }}>
      <Header {...content}></Header>
      <Stack direction="column" divider={<Divider orientation="horizontal" flexItem />}>
        <GreyBoxes {...content}></GreyBoxes>
        <GreyBoxes {...content}></GreyBoxes>
      </Stack>
    </Box>
  );
};
export default BoxComboSet;
