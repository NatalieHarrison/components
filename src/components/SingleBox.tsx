import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

interface SingleBoxProps {
  title: string;
  body: string;
  num: string;
}

const SingleBox = (props: SingleBoxProps) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#4caf50', //green
      },
      secondary: {
        main: '#d32f2f',
      },
    },
  });

  return (
    <Container>
      <ThemeProvider theme={theme}>
        <Grid container spacing={0} direction="row" sx={{ mt: 2 }}>
          <Paper elevation={4}>
            <Card sx={{ width: 166.5, height: 130 }}>
              <CardContent sx={{ backgroundColor: '#424242' }}>
                <Typography color="#f5f5f5">{props.title}</Typography>
              </CardContent>

              <CardContent>
                <Stack>
                  <Stack direction="row" justifyContent="center">
                    <Typography color="primary">{props.body}</Typography>
                    <ArrowDropUpIcon color="primary"></ArrowDropUpIcon>
                  </Stack>
                  <Typography color="primary">({props.num}) </Typography>
                </Stack>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
      </ThemeProvider>
    </Container>
  );
};

export default SingleBox;
