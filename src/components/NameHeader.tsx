import { CardContent, Card, Typography, Box, Container} from '@mui/material';
interface NameHeaderProps{
    lastName: string;
    firstName: string; 
}

const NameHeader = (props: NameHeaderProps) => {
    return (
        
            <Card sx = {{backgroundColor: "#212121"}}> 
                <Typography sx ={{ml: 2}} align = "left" variant = "h5"color = "white">
                    {props.lastName}, {props.firstName}
                </Typography>
            </Card>
    )

}
export default NameHeader; 