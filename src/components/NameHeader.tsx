import { CardContent, Card, Typography, Box, Container} from '@mui/material';
interface NameHeaderProps{
    lastName: string;
    firstName: string; 
}

const NameHeader = (props: NameHeaderProps) => {
    return (
        //can remove mt 
            <Card sx = {{backgroundColor: "#212121"}}> 
                <Typography color = "white">
                    {props.lastName}, {props.firstName}
                </Typography>
            </Card>
    )

}
export default NameHeader; 