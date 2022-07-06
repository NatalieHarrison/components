import { useState } from 'react';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Checkbox from '@mui/material/Checkbox';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

interface BoxChecksProps {
  categoryTitle1: string;
  c1checkBox1:string;
  c1checkBox2:string; 
  c1checkBox3:string;
  c1checkBox4:string;
  c1checkBox5:string;
  categoryTitle2: string;
  c2checkBox1:string;
  c2checkBox2:string; 
  c2checkBox3:string;
  c2checkBox4:string;
  c2checkBox5:string;
  categoryTitle3: string;
  c3checkBox1:string;
  c3checkBox2:string;
  c3checkBox3:string;
  c3checkBox4:string;
  // c3checkBox5:string;
  categoryTitle4: string;
  c4checkBox1:string;
  c4checkBox2:string;
  c4checkBox3:string;
  c4checkBox4:string;
  c4checkBox5:string;
}

interface BoxesChecksProps{
  boxChecksItems: BoxChecksProps[];
}

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const BoxChecks = (props: BoxChecksProps) => {
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
              <b> {props.categoryTitle1}</b>
            </Typography>
            <FormGroup>
              <FormControlLabel control={<Checkbox/>} label= {props.c1checkBox1} />
              <FormControlLabel control={<Checkbox/>} label={props.c1checkBox2} />
              <FormControlLabel control={<Checkbox/>} label={props.c1checkBox3} />
              <FormControlLabel control={<Checkbox/>} label={props.c1checkBox4} />
              <FormControlLabel control={<Checkbox/>} label={props.c1checkBox5} />
            </FormGroup>

            <Typography align="left">
              {' '}
              <b>{props.categoryTitle2}</b>
            </Typography>
            <FormGroup>
              <FormControlLabel control={<Checkbox/>} label={props.c2checkBox1} />
              <FormControlLabel control={<Checkbox/>} label={props.c2checkBox2} />
              <FormControlLabel control={<Checkbox/>} label={props.c2checkBox3} />
              <FormControlLabel control={<Checkbox/>} label={props.c2checkBox4} />
              <FormControlLabel control={<Checkbox/>} label={props.c2checkBox5} />
            </FormGroup>

            <Typography align="left">
              {' '}
              <b> {props.categoryTitle3}</b>
            </Typography>
            <FormGroup>
              <FormControlLabel control={<Checkbox/>} label={props.c3checkBox1} />
              <FormControlLabel control={<Checkbox/>} label={props.c3checkBox2} />
              <FormControlLabel control={<Checkbox/>} label={props.c3checkBox3} />
              <FormControlLabel control={<Checkbox/>} label={props.c3checkBox4} />
              {/* <FormControlLabel control={<Checkbox/>} label={props.c3checkBox5} /> */}
            </FormGroup> 

            <Typography align="left">
              {' '}
              <b> {props.categoryTitle4}</b>
            </Typography>
            <FormGroup>
              <FormControlLabel control={<Checkbox/>} label={props.c4checkBox1} />
              <FormControlLabel control={<Checkbox/>} label={props.c4checkBox2}  />
              <FormControlLabel control={<Checkbox/>} label= {props.c4checkBox3}  />
              <FormControlLabel control={<Checkbox/>} label={props.c4checkBox4}  />
              <FormControlLabel control={<Checkbox/>} label={props.c4checkBox5}  />
            </FormGroup> 
          </CardContent>
        </Collapse>
      </Card>
    
  );
};

const BoxesChecks = (props: BoxesChecksProps) => {
  return(
    <Box>
      {props.boxChecksItems && props.boxChecksItems.map((boxCheck) => <BoxChecks {...boxCheck} ></BoxChecks> )}
    </Box>
    
  )
};

export default BoxesChecks;
