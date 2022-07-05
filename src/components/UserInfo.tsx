import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

interface UserInfoProps {
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
    <Box sx={{ mt: 2, maxHeight: 300, maxWidth: 700 }}>
      <Card sx={{ backgroundColor: '#212121', mb: 1 }}>
        <Typography align="left" variant="h6" color="white" sx={{ ml: 1 }}>
          {' '}
          Member Information{' '}
        </Typography>
      </Card>

      <Card sx={{ backgroundColor: '#white', maxHeight: 260 }}>
        <Stack direction="row">
          <CardContent sx={{ width: 300 }}>
            <List>
              <ListItem>
                <b>Open Date: </b>
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
  );
};
export default UserInfo;
