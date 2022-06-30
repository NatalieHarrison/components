import {Container, Card, CardHeader, Grid, CardContent, Stack, Typography, Paper} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// interface EntireGreenBoxProps{
//     title: string;
//     body: string;
//     num: string; 
// }

const EntireGreenBox = () => {
    const theme = createTheme ({
        palette: {
            primary: {
                main:'#4caf50', //green
            }
        }
    })
    return (
        <Container>
            <ThemeProvider theme = {theme}>  
       
            <Grid container spacing = {0} direction = "row" sx = {{mt: 2}}> 
            
            <Paper  elevation = {4}> 
            <Card  sx ={{ width: 166.5, height: 130, backgroundColor: "#4caf50"}}>

                <CardContent>
                    <Typography color = "#f5f5f5" variant = "h6" >
                    {/* {props.title} */}<b>Title</b>
                    </Typography>
                </CardContent>

                <CardContent sx ={{backgroundColor: "#4caf50"}}>  
                    <Stack> 
                        <Stack direction = "row"  justifyContent="center">
                        <Typography color = "#f5f5f5" >
                                Body
                    </Typography>
                        </Stack>
                    </Stack>
                </CardContent>

            </Card>
            </Paper>
            </Grid>
            </ThemeProvider>
        </Container>
    )
}
export default EntireGreenBox; 