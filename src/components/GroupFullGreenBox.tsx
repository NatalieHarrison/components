import {Container, Card, CardHeader, Grid, CardContent, Stack, Typography, Paper} from '@mui/material';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';


interface GroupFullGreenBoxProps{
    title1: string;
    body1: string;
    title2: string;
    body2: string;
    title3: string;
    body3: string; 
}


const GroupFullGreenBox = (props: GroupFullGreenBoxProps) => {
    let theme = createTheme();
    theme = responsiveFontSizes(theme);
    
    return (
        <ThemeProvider theme={theme}>
        {/* //Remove mt in card content when using component on its own  */}
        <CardContent sx = {{mt: 8,backgroundColor: "#9e9e9e", height: 150}}> 
        <Stack direction = "row" justifyContent="center" alignItems="center">
        
        <Stack direction="row" spacing={1}>
        <Paper  elevation = {4}> 

            <Card  sx ={{ width: 166.5, height: 130, backgroundColor: "#4caf50"}}>

                <CardContent>
                    <Typography color = "#f5f5f5" variant = "h6" >
                    <b>{props.title1}</b>
                    </Typography>
                </CardContent>

                <CardContent sx ={{backgroundColor: "#4caf50"}}>  
                    <Stack> 
                        <Stack direction = "row"  justifyContent="center">
                        <Typography color = "#f5f5f5" >
                                {props.body1}
                        </Typography>
                        </Stack>
                    </Stack>
                </CardContent>

            </Card>
            </Paper>

            <Paper  elevation = {4}> 
            <Card  sx ={{ width: 166.5, height: 130, backgroundColor: "#4caf50"}}>

                <CardContent >
                    <Typography color = "#f5f5f5" variant = "h6" >
                   <b>{props.title2}</b>
                    </Typography>
                </CardContent>

                <CardContent sx ={{backgroundColor: "#4caf50"}}>  
                    <Stack> 
                        <Stack direction = "row"  justifyContent="center">
                        <Typography color = "#f5f5f5">
                        {props.body1}
                    </Typography>
                        </Stack>
                    </Stack>
                </CardContent>

            </Card>
            </Paper>

            <Paper  elevation = {4}> 
            <Card  sx ={{ width: 166.5, height: 130, backgroundColor: "#4caf50"}}>

                <CardContent>
                    <Typography color = "#f5f5f5" variant = "h6" >
                 <b>{props.title3}</b>
                    </Typography>
                </CardContent>

                <CardContent sx ={{backgroundColor: "#4caf50"}}>  
                    <Stack> 
                        <Stack direction = "row"  justifyContent="center">
                        <Typography color = "#f5f5f5" >
                        {props.body1}
                    </Typography>
                        </Stack>
                    </Stack>
                </CardContent>

            </Card>
            </Paper>

       
        </Stack>
        </Stack>
        </CardContent>
        </ThemeProvider>
        
    )
}
export default GroupFullGreenBox; 