import { useEffect, useState } from 'react';

import { Stack } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';

import MathInput from './MathInput';

export default function Legend(props, Mock) {
  console.log(Mock);
  const [sde, setSde] = useState([]);
  const handleChange = (event, value) => {
    //value is an empty array and adds object after each selection a user makes
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
    let counter = 0;
    const temp = [];
    value.map(function (element) {
      //assigning elements of each object to a new object called assignSDE
      const x = alphabet[counter++]; //variable
      const y = element.label; //label ex: SDE1, SDE2
      const z = element.id; //id
      const assignSDE = { var: x, label: y, id: z }; //assigning a variable to the object and its ID
      temp.push(assignSDE);
    });
    setSde(temp); //after each selection, an object is being added or deleted and the temp array is being updated.
    props.sdes(temp);
  };

  // useEffect(()=> {
  //   sdes(sde)
  // },[sde])

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
