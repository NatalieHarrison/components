import { useState } from 'react';

import { create, all } from 'mathjs';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

import MathInputLineChart from './mathInputLineChart';

import appTheme from '../theme';

const MathInput = (passedSde) => {
  const Mock = [
    //return data
    {
      SDE1: 43,
      SDE2: 5,
      SDE3: 6,
      SDE4: 10,
      SDE5: 11,
      date: '2021-09-07T12:51:33Z',
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
      a: Mock[0].SDE1,
      b: Mock[0].SDE2,
    };
    setAnswer(code.evaluate(scope));

    const temp = Mock.map(function (element) {
      const node = math.parse(input);
      const code = node.compile();
      const scope = {
        //variables and what they store
        a: element.SDE1,
        b: element.SDE2,
      };
      return {
        // plot: x = x-axis, y = y-axis
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
