import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { ThemeProvider } from '@mui/material/styles';

import appTheme from '../theme';

interface HeaderProps {
  header: string;
}
const Header = (props: HeaderProps) => {
  return (
    <ThemeProvider theme={appTheme}>
      <Card sx={{ backgroundColor: 'primary.main', maxHeight: 50 }}>
        <CardHeader title={props.header} sx={{ color: 'secondary.main', fontSize: '1' }}></CardHeader>
      </Card>
    </ThemeProvider>
  );
};
export default Header;
