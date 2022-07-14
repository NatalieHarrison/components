import { useState } from 'react';

import { create, all } from 'mathjs';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

import MathInputLineChart from './mathInputLineChart';

import appTheme from '../theme';

const MathInput = () => {
  const Data = [
    {
      value1: 43,
      value2: 5,
      date: '2021-09-07T12:51:33Z',
    },
    {
      value1: 33,
      value2: 78,
      date: '2021-08-17T06:54:51Z',
    },
    {
      value1: 52,
      value2: 76,
      date: '2022-04-06T02:55:14Z',
    },
  ];
  const config = {};
  const math = create(all, config);

  const [input, setInput] = useState('');
  const [answer, setAnswer] = useState('');
  const [arr, setArr] = useState([]);

  const handleClick = () => {
    const node = math.parse(input);
    const code = node.compile();
    const scope = {
      a: Data[0].value1,
      b: Data[0].value2,
    };
    setAnswer(code.evaluate(scope));

    const temp = Data.map(function (element) {
      const node = math.parse(input);
      const code = node.compile();
      const scope = {
        a: element.value1,
        b: element.value2,
      };
      return {
        x: element.date,
        y: code.evaluate(scope) || 0,
      };
    });
    setArr(temp);
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
      <MathInputLineChart XYarray={arr} />
    </ThemeProvider>
  );
};
export default MathInput;
