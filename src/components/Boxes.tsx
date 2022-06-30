import { CardContent,Card, Typography, Stack, Paper} from '@mui/material';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


interface BoxesProps {
    title1: string;
    body1: string; 
    num1: string;
    title2: string;
    body2: string; 
    num2: string;
    title3: string;
    body3: string; 
    num3: string; 
}

const Boxes = (props: BoxesProps) => {
    //TODO
    //Need to change color to green or red depending on if positive or negative 

    return (
                <CardContent sx = {{backgroundColor: "#9e9e9e", height: 200}}> 
                    <Stack direction = "row" justifyContent="center" alignItems="center">
                    
                    <Stack direction="row" spacing={1}>
                    <Paper  elevation = {4}> 
                        <Card  sx ={{ width: 166.5, height: 150}}>
                            <CardContent sx ={{backgroundColor: "#424242"}}>
                                <Typography color = "#f5f5f5" >
                                {props.title1}
                                </Typography>
                            </CardContent>

                            <CardContent>  
                                <Stack> 
                                    <Stack direction = "row"  justifyContent="center">
                                    <Typography color = "#2e7d32"> {props.body1}
                                    </Typography><ArrowDropUpIcon 
                                    color = "success"></ArrowDropUpIcon>
                                    </Stack>
                                    <Typography color = "#2e7d32">
                                    ({props.num1}) </Typography>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Paper>

                    <Paper  elevation = {4}> 
                        <Card  sx ={{ width: 166.5, height: 150}}>
                            <CardContent sx ={{backgroundColor: "#424242"}}>
                                <Typography color = "#f5f5f5" >
                                {props.title2}
                                </Typography>
                            </CardContent>

                            <CardContent>  
                                <Stack> 
                                    <Stack direction = "row"  justifyContent="center">
                                    <Typography color = "#d32f2f"> {props.body2}
                                    </Typography><ArrowDropDownIcon 
                                    color = "error"></ArrowDropDownIcon>
                                    </Stack>
                                    <Typography color = "#d32f2f">
                                    ({props.num2}) </Typography>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Paper>
         
                    <Paper  elevation = {4}> 
                        <Card  sx ={{ width: 166.5, height: 150}}>
                            <CardContent sx ={{backgroundColor: "#424242"}}>
                                <Typography color = "#f5f5f5" >
                                {props.title3}
                                </Typography>
                            </CardContent>

                            <CardContent>  
                                <Stack> 
                                    <Stack direction = "row" justifyContent="center">
                                    <Typography color = "#2e7d32"> {props.body3}
                                    </Typography><ArrowDropUpIcon 
                                    color = "success"></ArrowDropUpIcon>
                                    </Stack>
                                    <Typography color = "#2e7d32">
                                    ({props.num3}) </Typography>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Paper>
                </Stack>
                </Stack> 
                </CardContent> 
    )
}
export default Boxes; 