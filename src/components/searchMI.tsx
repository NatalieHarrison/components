import { useState } from 'react';

import { Stack } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';

export default function ComboBox() {
  const [sde, setSde] = useState([]);

  const handleChange = (event, value) => {
    setSde(value);
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
          const x = alphabet[counter++]; //variable
          const y = element.label; //label ex: SDE1, SDE2
          const z = element.id; //id
          const assignSDE = { var: x, label: y, id: z };
          arr.push(assignSDE);
          console.log(arr);
          return (
            <ul>
              <li>
                {x} : {y}
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
    date: '7/16/2022',
    value1: 68,
    value2: 98,
  },
  {
    label: 'SDE2',
    id: '30366447331108',
    date: '3/15/2022',
    value1: 52,
    value2: 68,
  },
  {
    label: 'SDE3',
    id: '6767919495546354820',
    date: '3/30/2022',
    value1: 51,
    value2: 74,
  },
  {
    label: 'SDE4',
    id: '3546042140959302',
    date: '8/10/2021',
    value1: 73,
    value2: 11,
  },
  {
    label: 'SDE5',
    id: '56022365860200149',
    date: '7/9/2022',
    value1: 31,
    value2: 38,
  },
  {
    label: 'SDE6',
    id: '67093173390529818',
    date: '7/24/2021',
    value1: 41,
    value2: 92,
  },
  {
    label: 'SDE7',
    id: '36338427173226',
    date: '12/20/2021',
    value1: 99,
    value2: 35,
  },
  {
    label: 'SDE8',
    id: '3555301689506736',
    date: '1/11/2022',
    value1: 95,
    value2: 69,
  },
  {
    label: 'SDE9',
    id: '30359966499166',
    date: '2/15/2022',
    value1: 33,
    value2: 5,
  },
  {
    label: 'SDE10',
    id: '630452306781254287',
    date: '11/18/2021',
    value1: 87,
    value2: 91,
  },
];
