import { useState } from 'react';

import { Stack } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';


import App from '../App';
import MathInput from './MathInput';

export default function Legend() {
  const [sde, setSde] = useState([]);
  const handleChange = (event, value) => {
    const temp = [];
    value.map(function (element) {
      const x = alphabet[counter++]; //variable
      const y = element.label; //label ex: SDE1, SDE2
      const z = element.id; //id
      const assignSDE = { var: x, label: y, id: z };
    
      temp.push(assignSDE);
    });

    setSde(temp);
  };


  let counter = 0;
  const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  console.log(sde);
  // MathInput(sde)

  return (
    <Box>
      <Stack direction="row">
        <Autocomplete
          multiple
          id="combo-box-demo"
          options={data}
          sx={{ width: 300 }}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} label="label" />}
        />
        <p>Legend:</p>
        {sde.map(function (element) {
          //only reading the data
          return (
            <ul>
              <li>
                {element.var} : {element.label}
              </li>
            </ul>
          );
        })}
      </Stack>
    </Box>
  );
}

const arr = [];
const data = [
  {
    label: 'SDE1',
    id: '3569900637734151',
  },
  {
    label: 'SDE2',
    id: '30366447331108',
  },
  {
    label: 'SDE3',
    id: '6767919495546354820',
  },
  {
    label: 'SDE4',
    id: '3546042140959302',
  },
  {
    label: 'SDE5',
    id: '56022365860200149',
  },
  {
    label: 'SDE6',
    id: '67093173390529818',
  },
  {
    label: 'SDE7',
    id: '36338427173226',
  },
  {
    label: 'SDE8',
    id: '3555301689506736',
  },
  {
    label: 'SDE9',
    id: '30359966499166',
  },
  {
    label: 'SDE10',
    id: '630452306781254287',
  },
];
