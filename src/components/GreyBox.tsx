import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import appTheme from '../theme';

interface GreyBoxProps {
  title: string;
  body: string;
  num: string;
}

interface GreyBoxesProps {
  greyBoxItems: GreyBoxProps[];
}

const GreyBox = (props: GreyBoxProps) => {
  return (
    <Paper elevation={4}>
      <Card>
        <CardContent sx={{ backgroundColor: '#424242' }}>
          <Typography color="secondary.main">{props.title}</Typography>
        </CardContent>

        <CardContent>
          <Stack>
            <Stack direction="row" justifyContent="center">
              <Typography color="success.main"> {props.body}</Typography>
              <ArrowDropUpIcon color="success"></ArrowDropUpIcon>
            </Stack>
            <Typography color="success.main">({props.num}) </Typography>
          </Stack>
        </CardContent>
      </Card>
    </Paper>
  );
};

const GreyBoxes = (props: GreyBoxesProps) => {
  //TODO
  //Need to change color to green or red depending on if positive or negative

  // SAT
  return (
    <ThemeProvider theme={appTheme}>
      <CardContent sx={{ backgroundColor: '#9e9e9e' }}>
        <Stack direction="row" justifyContent="center" alignItems="center">
          <Stack direction="row" spacing={1}>
            {props.greyBoxItems && props.greyBoxItems.map((box) => <GreyBox {...box}> </GreyBox>)}
          </Stack>
        </Stack>
      </CardContent>
    </ThemeProvider>
  );
};
export default GreyBoxes;
