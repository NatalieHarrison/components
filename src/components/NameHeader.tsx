import Card from '@mui/material/Card';
import { ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import appTheme from '../theme';

interface NameHeaderProps {
  lastName: string;
  firstName: string;
}

const NameHeader = (props: NameHeaderProps) => {
  return (
    <ThemeProvider theme={appTheme}>
      <Card sx={{ backgroundColor: 'primary.main', maxHeight: 50 }}>
        <Typography sx={{ ml: 2 }} align="left" variant="h5" color="secondary.main">
          {props.lastName}, {props.firstName}
        </Typography>
      </Card>
    </ThemeProvider>
  );
};
export default NameHeader;
