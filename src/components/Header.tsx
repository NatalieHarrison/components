import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

interface HeaderProps {
  header: string;
}
const Header = (props: HeaderProps) => {
  return (
    <Card sx={{ backgroundColor: '#424242', height: 50 }}>
      <CardHeader title={props.header} sx={{ color: 'white', fontSize: '1' }}></CardHeader>
    </Card>
  );
};
export default Header;
