import {Container, Card, CardHeader, Grid, CardContent, Stack, Typography, Paper} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const BoxHB = () => {
    const theme = createTheme ({
        palette: {
            primary: {
                main:'#2e7d32', //green
            },
            secondary: {
                main:'#d32f2f'
            },
        }
    })
    return (
        <Container>
            <ThemeProvider theme = {theme}>  
       
            <Grid container spacing = {0} direction = "row" sx = {{mt: 2}}> 
            
            <Paper  elevation = {4}> 
            <Card  sx ={{ width: 166.5, height: 130}}>

                <CardContent sx ={{backgroundColor: "#424242"}}>
                    <Typography color = "#f5f5f5" >
                    Title
                    </Typography>
                </CardContent>

                <CardContent>  
                    <Stack> 
                        <Stack direction = "row"                justifyContent="center">
                            <Typography color = "primary"> Number 
                            </Typography><ArrowDropUpIcon color = "primary"></ArrowDropUpIcon>
                        </Stack>
                        <Typography color = "primary">
                            (+0.0) </Typography>
                    </Stack>
                </CardContent>

            </Card>
            </Paper>
            </Grid>
            </ThemeProvider>
        </Container>
    )
};

export default BoxHB; 