import { useState } from 'react';

import { create, all } from 'mathjs';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

import Legend from './Legend';
import MathInputLineChart from './mathInputLineChart';

import appTheme from '../theme';

const MathInput = ({ selections }) => {
  // console.log(selections);

  const arrOfValues = []; //used to take into account values that are undefined since they weren't selected
  selections.map(function (element) {
    if (element != undefined) {
      arrOfValues.push(element);
    } else {
      arrOfValues.push(0);
    }
  });
  // console.log(arrOfValues);

  const config = {};
  const math = create(all, config);

  const [input, setInput] = useState('');
  const [answer, setAnswer] = useState('');
  const [arr, setArr] = useState([]);

  const handleClick = () => {
    const node = math.parse(input);
    const code = node.compile();

    const scope = {
      a: arrOfValues[0],
      b: arrOfValues[1],
      c: arrOfValues[2],
      d: arrOfValues[3],
      e: arrOfValues[4],
      f: arrOfValues[5],
      g: arrOfValues[6],
      h: arrOfValues[7],
      i: arrOfValues[8],
      j: arrOfValues[9],
      k: arrOfValues[10],
      l: arrOfValues[11],
      m: arrOfValues[12],
      n: arrOfValues[13],
      o: arrOfValues[14],
      p: arrOfValues[15],
      q: arrOfValues[16],
      r: arrOfValues[17],
      s: arrOfValues[18],
      t: arrOfValues[19],
      u: arrOfValues[20],
      v: arrOfValues[21],
      x: arrOfValues[22],
      y: arrOfValues[23],
      z: arrOfValues[24],
    };
    setAnswer(code.evaluate(scope));

    const temp = data.map(function (element) {
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
