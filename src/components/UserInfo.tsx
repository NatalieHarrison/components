import { CardContent, Card, Typography, Box, Container} from '@mui/material';


const UserInfo = () => {
    return (
        //can remove mt 
        <Box sx = {{mt:2, backgroundColor: "#9e9e9e", height: 300}}>

         

            <Container sx = {{mt: 1}}>
                <Card sx = {{backgroundColor: "#212121"}}> Member Information</Card>



            </Container>

        </Box>
    )

}
export default UserInfo; 