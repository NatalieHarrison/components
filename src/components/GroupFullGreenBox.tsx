import {Container, Card, CardHeader, Grid, CardContent, Stack, Typography, Paper, Box} from '@mui/material';
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
        <Box sx = {{mt: 1}}>
        <ThemeProvider theme={theme}>
        <Stack direction = "row" justifyContent="center" alignItems="center">
        
        <Stack direction="row" spacing={1}>
        <Paper  elevation = {4}> 

            <Card  sx ={{ width: 166.5, height: 130, backgroundColor: "#4caf50"}}>

                <CardContent>
                    <Typography noWrap color = "#f5f5f5" variant = "h6" >
                    <b>{props.title1}</b>
                    </Typography>
                </CardContent>

                <CardContent sx ={{backgroundColor: "#4caf50"}}>  
                    <Stack> 
                        <Stack direction = "row"  justifyContent="center">
                        <Typography noWrap color = "#f5f5f5" >
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
                    <Typography noWrap color = "#f5f5f5" variant = "h6" >
                   <b>{props.title2}</b>
                    </Typography>
                </CardContent>

                <CardContent sx ={{backgroundColor: "#4caf50"}}>  
                    <Stack> 
                        <Stack direction = "row"  justifyContent="center">
                        <Typography color = "#f5f5f5">
                        {props.body2}
                    </Typography>
                        </Stack>
                    </Stack>
                </CardContent>

            </Card>
            </Paper>

            <Paper  elevation = {4}> 
            <Card  sx ={{ width: 166.5, height: 130, backgroundColor: "#4caf50"}}>

                <CardContent>
                    <Typography noWrap color = "#f5f5f5" variant = "h6" >
                 <b>{props.title3}</b>
                    </Typography>
                </CardContent>

                <CardContent sx ={{backgroundColor: "#4caf50"}}>  
                    <Stack> 
                        <Stack direction = "row"  justifyContent="center">
                        <Typography noWrap color = "#f5f5f5" >
                        {props.body3}
                    </Typography>
                        </Stack>
                    </Stack>
                </CardContent>

            </Card>
            </Paper>
        </Stack>
        </Stack>
        </ThemeProvider>
        </Box>
        
    )
}
export default GroupFullGreenBox; 