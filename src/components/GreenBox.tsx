import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

interface GreenBoxProps {
  title: string;
  body: string;
  num: string;
}

const GreenBox = (props: GreenBoxProps) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#4caf50', //green
      },
    },
  });
  return (
    <Container>
      <ThemeProvider theme={theme}>
        <Grid container spacing={0} direction="row" sx={{ mt: 2 }}>
          <Paper elevation={4}>
            <Card sx={{ width: 166.5, height: 90 }}>
              <CardContent sx={{ backgroundColor: '#4caf50', height: 10 }}>
                <Typography color="#f5f5f5">{props.title}</Typography>
              </CardContent>

              <CardContent>
                <Stack>
                  <Stack direction="row" justifyContent="center">
                    <Typography color="primary"> {props.body}</Typography>
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
      </ThemeProvider>
    </Container>
  );
};
export default GreenBox;
