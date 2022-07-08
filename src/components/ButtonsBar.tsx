import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

interface ButtonsBarProps {
  b1Title: string;
  b2Title: string;
  b3Title: string;
  b4Title: string;
  b5Title: string;
}

const ButtonsBar = (props: ButtonsBarProps) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#212121',
      },
      secondary: {
        main: '#fafafa',
      },
    },
  });
  const [button1Clicked, setButton1Clicked] = useState(true);
  const [button2Clicked, setButton2Clicked] = useState(true);
  const [button3Clicked, setButton3Clicked] = useState(true);
  const [button4Clicked, setButton4Clicked] = useState(true);
  const [button5Clicked, setButton5Clicked] = useState(true);

  return (
    <ThemeProvider theme={theme}>
      <ButtonGroup fullWidth={true} sx={{ backgroundColor: '#212121', maxHeight: 40 }}>
        <Button
          size="small"
          disableElevation
          onClick={() => setButton1Clicked(!button1Clicked)}
          variant="contained"
          color={button1Clicked ? 'primary' : 'secondary'}
        >
          <Typography color={button1Clicked ? 'secondary' : 'primary'}> {props.b1Title}</Typography>
        </Button>

        <Button
          size="small"
          disableElevation
          onClick={() => setButton2Clicked(!button2Clicked)}
          variant="contained"
          color={button2Clicked ? 'primary' : 'secondary'}
        >
          <Typography color={button2Clicked ? 'secondary' : 'primary'}> {props.b2Title}</Typography>
        </Button>

        <Button
          size="small"
          disableElevation
          onClick={() => setButton3Clicked(!button3Clicked)}
          variant="contained"
          color={button3Clicked ? 'primary' : 'secondary'}
        >
          <Typography color={button3Clicked ? 'secondary' : 'primary'}> {props.b3Title} </Typography>
        </Button>

        <Button
          size="small"
          disableElevation
          onClick={() => setButton4Clicked(!button4Clicked)}
          variant="contained"
          color={button4Clicked ? 'primary' : 'secondary'}
        >
          <Typography color={button4Clicked ? 'secondary' : 'primary'}> {props.b4Title} </Typography>
        </Button>

        <Button
          size="small"
          disableElevation
          onClick={() => setButton5Clicked(!button5Clicked)}
          variant="contained"
          color={button5Clicked ? 'primary' : 'secondary'}
        >
          <Typography color={button5Clicked ? 'secondary' : 'primary'}>{props.b5Title} </Typography>
        </Button>
      </ButtonGroup>
    </ThemeProvider>
  );
};
export default ButtonsBar;
