import { CardContent, Typography} from '@mui/material';



interface HeaderProps {
    header: string; 
}
const Header = (props: HeaderProps) => {
    return (
        <CardContent sx = {{backgroundColor: "#424242"}}> 
        <Typography variant = "h6"color = "#f5f5f5"> {props.header} </Typography>
        </CardContent>
    )
}
export default Header; 