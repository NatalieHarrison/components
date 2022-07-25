import { useState } from 'react';

import { create, all } from 'mathjs';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

import MathInputLineChart from './mathInputLineChart';

import appTheme from '../theme';

const MathInput = ({ selections }) => {
  console.log(selections)
   const config = {};
  const math = create(all, config);

  const [input, setInput] = useState('');
  const [answer, setAnswer] = useState('');
  const [arr, setArr] = useState([]);

  const handleClick = () => {
    const node = math.parse(input);
    const code = node.compile();
    const scope = { //
      a: selections[0].a,
      b: selections[0].b,
      c: selections[0].c,
      d: selections[0].d,
      e: selections[0].e,
      f: selections[0].f,
      g: selections[0].g,
      h: selections[0].h,
      i: selections[0].i,
      j: selections[0].j,
      k: selections[0].k,
      l: selections[0].l,
      m: selections[0].m,
      n: selections[0].n,
      o: selections[0].o,
      p: selections[0].p,
      q: selections[0].q,
      r: selections[0].r,
      s: selections[0].s,
      t: selections[0].t,
      u: selections[0].u,
      v: selections[0].v,
      w: selections[0].w,
      x: selections[0].x,
      y: selections[0].y,
      z: selections[0].z
    };
    setAnswer(code.evaluate(scope));


    const chartArray = []
    for (let i = 0; i < selections.length; i++){
      const node = math.parse(input);
      const code = node.compile();
      let scope2 = {
        a: selections[i].a,
        b: selections[i].b,
      }
      chartArray.push({
        x: selections[i].date,
        y: code.evaluate(scope2)
      })
    }
    setArr(chartArray)
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
