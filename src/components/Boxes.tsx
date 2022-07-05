import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

interface BoxProps {
  title: string;
  body: string;
  num: string;
}

interface BoxesProps {
  items: BoxProps[];
}

const Box = (props: BoxProps) => {
  return (
    <Paper elevation={4}>
      <Card sx={{ width: 166.5, height: 150 }}>
        <CardContent sx={{ backgroundColor: '#424242' }}>
          <Typography color="#f5f5f5">{props.title}</Typography>
        </CardContent>

        <CardContent>
          <Stack>
            <Stack direction="row" justifyContent="center">
              <Typography color="#4caf50"> {props.body}</Typography>
              <ArrowDropUpIcon color="success"></ArrowDropUpIcon>
            </Stack>
            <Typography color="#4caf50">({props.num}) </Typography>
          </Stack>
        </CardContent>
      </Card>
    </Paper>
  );
};

const Boxes = (props: BoxesProps) => {
  //TODO
  //Need to change color to green or red depending on if positive or negative

  // SAT
  return (
    <CardContent sx={{ backgroundColor: '#9e9e9e', height: 130 }}>
      <Stack direction="row" justifyContent="center" alignItems="center">
        <Stack direction="row" spacing={1}>
          {props.items && props.items.map((box) => <Box {...box}> </Box>)}
        </Stack>
      </Stack>
    </CardContent>
  );
};
export default Boxes;
