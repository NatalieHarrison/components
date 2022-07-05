
// SAT: Prefer individual includes for @mui/material components e.g.
// import CardContent from '@mui/material/CardContent';
// import Card from '@mui/material/Card';
// It's  style we use but sorts better in the UI for others to be aware
// of what components are being used. Only for @mui/material. It's fine for 
// style imports.

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

    // SAT: Make another component e.g. Box (but use a better name) and then have the Card as that 
    // base component. Then this component can take an array of descriptions and be more dynamic.
    // This component then loops over the input array and creates N number of child Box components.
    return (
                <CardContent sx = {{backgroundColor: "#9e9e9e", height: 130}}> 
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
                                    <Typography color = "#4caf50"> {props.body1}
                                    </Typography><ArrowDropUpIcon 
                                    color = "success"></ArrowDropUpIcon>
                                    </Stack>
                                    <Typography color = "#4caf50">
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
                                    <Typography color = "#4caf50"> {props.body3}
                                    </Typography><ArrowDropUpIcon 
                                    color = "success"></ArrowDropUpIcon>
                                    </Stack>
                                    <Typography color = "#4caf50">
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