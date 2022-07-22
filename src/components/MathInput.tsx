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
  console.log(selections);
  // selections.map(function(element){
  //   console.log(element)
  //   console.log(element.value)
  //   console.log(selections.indexOf)
  // })

  const config = {};
  const math = create(all, config);

  const [input, setInput] = useState('');
  const [answer, setAnswer] = useState('');
  const [arr, setArr] = useState([]);

  const handleClick = () => {
    const node = math.parse(input);
    const code = node.compile();
    
    const scope = {
      a: selections[0],
      b: selections[1],
      c: selections[2],
      d: selections[3],
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
