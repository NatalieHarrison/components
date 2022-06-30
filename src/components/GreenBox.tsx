import {Container, Card, CardHeader, Grid, CardContent, Stack, Typography, Paper} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

interface GreenBoxProps{
    title: string;
    body: string;
    num: string; 
}

const GreenBox = (props: GreenBoxProps) => {
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
            <Card  sx ={{ width: 166.5, height: 130}}>

                <CardContent sx ={{backgroundColor: "#4caf50"}}>
                    <Typography color = "#f5f5f5" >
                    {props.title}
                    </Typography>
                </CardContent>

                <CardContent>  
                    <Stack> 
                        <Stack direction = "row"                justifyContent="center">
                            <Typography color = "primary"> {props.body} 
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
export default GreenBox; 