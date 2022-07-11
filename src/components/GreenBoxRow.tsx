import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';

import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';
import appTheme from '../theme';


interface GreenBoxProps {
  title: string;
  body: string;
  num: string;
}

interface GreenBoxesProps {
  greenBoxItems: GreenBoxProps[];
}
const GreenBox = (props: GreenBoxProps) => {
  return (
    <Box sx={{ mt: 1, mb: 1, mr: 2 }}>
      <Paper elevation={4}>
        <Card sx={{ width: 166.5, height: 90 }}>
          <CardContent sx={{ backgroundColor: 'success.main', height: 10 }}>
            <Typography color="secondary.main">{props.title}</Typography>
          </CardContent>

          <CardContent>
            <Stack>
              <Stack direction="row" justifyContent="center">
                <Typography color="success.main"> {props.body}</Typography>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      </Paper>
    </Box>
  );
};
const GreenBoxesRow = (props: GreenBoxesProps) => {
  return (
    <Container>
      <ThemeProvider theme={appTheme}>
        <Grid container direction="row" sx={{ mt: 2 }}>
          {props.greenBoxItems && props.greenBoxItems.map((box) => <GreenBox {...box}> </GreenBox>)}
        </Grid>
      </ThemeProvider>
    </Container>
  );
};
export default GreenBoxesRow;
