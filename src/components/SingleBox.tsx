import { stringify } from 'querystring';

import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { Container, Card, CardHeader, Grid, CardContent, Stack, Typography, Paper } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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
