import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';

import GreenBoxesRow from './GreenBoxRow';

const content: any = {
  greenBoxItems: [
    { title: 'Total Members', body: '230,827', num: '' },
    { title: 'Average Lifetime Member Economic Participiation', body: '$1,419', num: '' },
    { title: 'Average Customer Experience Score', body: '8.57', num: '' },
  ],
};

const LogoBar = () => {
  return (
    <Box maxWidth="xl" sx={{ backgroundColor: '#212121' }}>
      <Grid container direction="row" justifyContent="flex-end" alignItems="center">
        <Grid item>
          <GreenBoxesRow {...content}></GreenBoxesRow>
        </Grid>
      </Grid>
    </Box>
  );
};
export default LogoBar;
