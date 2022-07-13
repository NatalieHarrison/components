import { useState } from 'react';

import { create, all } from 'mathjs';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

import appTheme from '../theme';

const Data = [
  {
    value1: 42,
    value2: 94,
    date: '12/16/2021',
  },
  {
    value1: 43,
    value2: 52,
    date: '4/24/2022',
  },
  {
    value1: 44,
    value2: 26,
    date: '7/7/2022',
  },
  {
    value1: 80,
    value2: 97,
    date: '8/24/2021',
  },
  {
    value1: 79,
    value2: 79,
    date: '10/17/2021',
  },
  {
    value1: 87,
    value2: 30,
    date: '3/20/2022',
  },
  {
    value1: 89,
    value2: 25,
    date: '1/7/2022',
  },
  {
    value1: 48,
    value2: 1,
    date: '7/6/2022',
  },
  {
    value1: 70,
    value2: 87,
    date: '4/17/2022',
  },
  {
    value1: 58,
    value2: 5,
    date: '11/30/2021',
  },
  {
    value1: 29,
    value2: 54,
    date: '7/5/2022',
  },
  {
    value1: 45,
    value2: 63,
    date: '7/8/2022',
  },
  {
    value1: 51,
    value2: 46,
    date: '8/31/2021',
  },
  {
    value1: 87,
    value2: 70,
    date: '7/30/2021',
  },
  {
    value1: 12,
    value2: 46,
    date: '2/11/2022',
  },
  {
    value1: 19,
    value2: 79,
    date: '12/1/2021',
  },
  {
    value1: 61,
    value2: 22,
    date: '7/31/2021',
  },
  {
    value1: 78,
    value2: 19,
    date: '12/21/2021',
  },
  {
    value1: 39,
    value2: 39,
    date: '8/22/2021',
  },
  {
    value1: 42,
    value2: 71,
    date: '12/1/2021',
  },
  {
    value1: 90,
    value2: 30,
    date: '10/21/2021',
  },
  {
    value1: 87,
    value2: 87,
    date: '12/5/2021',
  },
  {
    value1: 62,
    value2: 61,
    date: '8/8/2021',
  },
  {
    value1: 4,
    value2: 88,
    date: '10/2/2021',
  },
  {
    value1: 45,
    value2: 66,
    date: '5/30/2022',
  },
  {
    value1: 97,
    value2: 29,
    date: '9/24/2021',
  },
  {
    value1: 1,
    value2: 69,
    date: '2/25/2022',
  },
  {
    value1: 59,
    value2: 6,
    date: '5/22/2022',
  },
  {
    value1: 90,
    value2: 53,
    date: '10/17/2021',
  },
  {
    value1: 34,
    value2: 19,
    date: '3/17/2022',
  },
  {
    value1: 85,
    value2: 11,
    date: '11/23/2021',
  },
  {
    value1: 54,
    value2: 92,
    date: '10/16/2021',
  },
  {
    value1: 1,
    value2: 45,
    date: '8/15/2021',
  },
  {
    value1: 88,
    value2: 48,
    date: '10/12/2021',
  },
  {
    value1: 9,
    value2: 56,
    date: '9/11/2021',
  },
  {
    value1: 5,
    value2: 75,
    date: '5/1/2022',
  },
  {
    value1: 20,
    value2: 10,
    date: '12/3/2021',
  },
  {
    value1: 28,
    value2: 28,
    date: '9/4/2021',
  },
  {
    value1: 65,
    value2: 70,
    date: '5/10/2022',
  },
  {
    value1: 19,
    value2: 46,
    date: '12/27/2021',
  },
  {
    value1: 91,
    value2: 83,
    date: '10/27/2021',
  },
  {
    value1: 54,
    value2: 64,
    date: '8/4/2021',
  },
  {
    value1: 98,
    value2: 43,
    date: '7/27/2021',
  },
  {
    value1: 27,
    value2: 35,
    date: '4/15/2022',
  },
  {
    value1: 1,
    value2: 39,
    date: '3/24/2022',
  },
  {
    value1: 32,
    value2: 97,
    date: '2/21/2022',
  },
  {
    value1: 29,
    value2: 17,
    date: '12/4/2021',
  },
  {
    value1: 5,
    value2: 38,
    date: '2/26/2022',
  },
  {
    value1: 72,
    value2: 45,
    date: '3/27/2022',
  },
  {
    value1: 72,
    value2: 74,
    date: '9/16/2021',
  },
  {
    value1: 7,
    value2: 82,
    date: '12/24/2021',
  },
  {
    value1: 55,
    value2: 27,
    date: '10/25/2021',
  },
  {
    value1: 98,
    value2: 72,
    date: '1/26/2022',
  },
  {
    value1: 15,
    value2: 68,
    date: '4/25/2022',
  },
  {
    value1: 87,
    value2: 77,
    date: '8/20/2021',
  },
  {
    value1: 37,
    value2: 65,
    date: '9/13/2021',
  },
  {
    value1: 22,
    value2: 17,
    date: '2/12/2022',
  },
  {
    value1: 42,
    value2: 72,
    date: '5/29/2022',
  },
  {
    value1: 97,
    value2: 91,
    date: '7/25/2021',
  },
  {
    value1: 79,
    value2: 68,
    date: '6/21/2022',
  },
  {
    value1: 98,
    value2: 100,
    date: '1/13/2022',
  },
  {
    value1: 18,
    value2: 8,
    date: '3/25/2022',
  },
  {
    value1: 84,
    value2: 13,
    date: '3/29/2022',
  },
  {
    value1: 78,
    value2: 41,
    date: '3/15/2022',
  },
  {
    value1: 25,
    value2: 15,
    date: '7/21/2021',
  },
  {
    value1: 83,
    value2: 20,
    date: '1/2/2022',
  },
  {
    value1: 93,
    value2: 53,
    date: '4/5/2022',
  },
  {
    value1: 91,
    value2: 29,
    date: '1/1/2022',
  },
  {
    value1: 35,
    value2: 72,
    date: '9/22/2021',
  },
  {
    value1: 2,
    value2: 88,
    date: '8/7/2021',
  },
  {
    value1: 83,
    value2: 27,
    date: '12/22/2021',
  },
  {
    value1: 77,
    value2: 81,
    date: '7/5/2022',
  },
  {
    value1: 9,
    value2: 25,
    date: '4/11/2022',
  },
  {
    value1: 40,
    value2: 100,
    date: '11/16/2021',
  },
  {
    value1: 1,
    value2: 83,
    date: '3/22/2022',
  },
  {
    value1: 42,
    value2: 70,
    date: '12/22/2021',
  },
  {
    value1: 95,
    value2: 41,
    date: '12/30/2021',
  },
  {
    value1: 31,
    value2: 70,
    date: '1/14/2022',
  },
  {
    value1: 77,
    value2: 56,
    date: '9/9/2021',
  },
  {
    value1: 17,
    value2: 3,
    date: '5/18/2022',
  },
  {
    value1: 73,
    value2: 43,
    date: '4/19/2022',
  },
  {
    value1: 100,
    value2: 47,
    date: '10/26/2021',
  },
  {
    value1: 12,
    value2: 6,
    date: '8/25/2021',
  },
  {
    value1: 89,
    value2: 78,
    date: '12/17/2021',
  },
  {
    value1: 59,
    value2: 73,
    date: '9/29/2021',
  },
  {
    value1: 32,
    value2: 7,
    date: '3/16/2022',
  },
  {
    value1: 12,
    value2: 58,
    date: '10/3/2021',
  },
  {
    value1: 49,
    value2: 12,
    date: '3/12/2022',
  },
  {
    value1: 29,
    value2: 19,
    date: '7/7/2022',
  },
  {
    value1: 45,
    value2: 41,
    date: '6/30/2022',
  },
  {
    value1: 84,
    value2: 61,
    date: '10/22/2021',
  },
  {
    value1: 60,
    value2: 43,
    date: '2/10/2022',
  },
  {
    value1: 32,
    value2: 32,
    date: '1/29/2022',
  },
  {
    value1: 95,
    value2: 86,
    date: '3/23/2022',
  },
  {
    value1: 50,
    value2: 9,
    date: '3/17/2022',
  },
  {
    value1: 49,
    value2: 97,
    date: '10/31/2021',
  },
  {
    value1: 26,
    value2: 15,
    date: '9/20/2021',
  },
  {
    value1: 65,
    value2: 97,
    date: '6/24/2022',
  },
  {
    value1: 58,
    value2: 67,
    date: '9/22/2021',
  },
  {
    value1: 1,
    value2: 26,
    date: '1/10/2022',
  },
];
let aTotal = 0;
Data.map(function (element) {
  aTotal = element.value1 + aTotal;
  return aTotal;
});
console.log(aTotal);

let bTotal = 0;
Data.map(function (element) {
  bTotal = element.value2 + bTotal;
  return bTotal;
});
console.log(bTotal);

const MathInput = (Data) => {
  const config = {};
  const math = create(all, config);

  const [input, setInput] = useState('');
  const [answer, setAnswer] = useState('');

  const handleClick = () => {
    const node = math.parse(input);
    const code = node.compile();
    const scope = {
      a: aTotal,
      b: bTotal,
    };
    setAnswer(code.evaluate(scope));
  };
  return (
    <ThemeProvider theme={appTheme}>
      <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
        <TextField value={input} onChange={(e) => setInput(e.target.value)}></TextField>
        <Button variant="contained" onClick={handleClick} sx={{ backgroundColor: 'success.main' }}>
          Evaluate
        </Button>
        {answer}
      </Stack>
    </ThemeProvider>
  );
};
export default MathInput;
