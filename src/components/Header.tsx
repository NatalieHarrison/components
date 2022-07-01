import { CardContent, CardHeader, Typography, Card} from '@mui/material';



interface HeaderProps {
    header: string; 
}
const Header = (props: HeaderProps) => {
    return (
        <Card sx = {{backgroundColor: "#424242", height: 50}}> 
            <CardHeader title = {props.header} sx = {{color: "white", fontSize: "1"}}></CardHeader>
    
        </Card>
    )
}
export default Header; 