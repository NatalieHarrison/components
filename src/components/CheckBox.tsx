import { useState } from 'react';

import { Check } from '@mui/icons-material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Box,
  Card,
  CardActions,
  Collapse,
  IconButtonProps,
  IconButton,
  styled,
  Typography,
  CardContent,
  Checkbox,
} from '@mui/material';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const CheckBox = () => {
  const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Box>
      <Card sx={{ width: 300, backgroundColor: '#e0e0e0' }}>
        <CardActions>
          <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
            <ExpandMoreIcon></ExpandMoreIcon>
          </ExpandMore>
        </CardActions>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography align="left">
              {' '}
              <b> Seg Name</b>
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Box>
  );
};
export default CheckBox;
