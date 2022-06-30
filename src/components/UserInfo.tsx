import { CardContent, Card, Typography, Box, Container, List, ListItem, Stack} from '@mui/material';

interface UserInfoProps  {
    openDate: string;
    activeStatus: string; 
    qualificationReason: string;
    location: string;
    generation: string;
    gender: string; 
    memberType: string;
    preferredBranch: string;
    preferredATM: string;
    totLTProducts: string;
    openProducts: string;
 


}


const UserInfo = (props: UserInfoProps) => {
    return (
        //can remove mt 
        <Box sx = {{mt:2, backgroundColor: "#9e9e9e", height: 300, width: 1069}}>
                <Card sx = {{backgroundColor: "#212121"}}> 
                 <Typography variant = "h6"color = "white"> Member Information </Typography>
                </Card>


                <Card sx = {{backgroundColor: "#white"}}> 
                <Stack direction = "row">
                    <CardContent sx = {{ width: 529}}>
                        <List>
                            <ListItem>
                                <b>Open Date:  </b>
                                {props.openDate} 
                            </ListItem>

                            <ListItem>
                                <b>Active Status: </b>
                                {props.activeStatus}
                            </ListItem>

                            <ListItem>
                                <b>Qualification Reason: </b>
                                {props.qualificationReason}
                            </ListItem>

                            <ListItem>
                                <b>Location: </b>
                                {props.location}
                            </ListItem>

                            <ListItem>
                                <b>Generation: </b>
                                {props.generation}
                            </ListItem>

                            <ListItem>
                                <b>Gender: </b>
                                {props.gender}
                            </ListItem>
                        </List>
                    </CardContent>

                 <CardContent>
                    <List>
                        <ListItem>
                            <b>Member Type: </b>
                            {props.memberType}
                        </ListItem>

                        <ListItem>
                            <b>Preferred Branch: </b>
                            {props.preferredBranch}
                        </ListItem>

                        <ListItem>
                            <b>Preferred ATM/PTM: </b>
                            {props.preferredATM}
                        </ListItem>

                        <ListItem>
                            <b>Total Lifetime Products: </b>
                            {props.totLTProducts}
                        </ListItem>

                        <ListItem>
                            <b>Open Products: </b>
                            {props.openProducts}
                        </ListItem>
                    </List>
                </CardContent>


                </Stack>
                </Card>

        </Box>
    )

}
export default UserInfo; 