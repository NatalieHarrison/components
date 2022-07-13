import { useState } from 'react';

import { create, all } from 'mathjs';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import appTheme from '../theme';
import { ThemeProvider } from '@mui/material/styles';

const MathInput = () => {
  const config = {};
  const math = create(all, config);

  const [input, setInput] = useState('');
  const [answer,setAnswer] = useState('')
  const handleClick = () => {
    setAnswer(math.evaluate(input));
  };
  console.log(answer);

  return (
    <ThemeProvider theme={appTheme}>
      
      <Stack direction="row" justifyContent="center" alignItems="center" spacing={2} >
        <TextField value={input} onChange={(e) => setInput(e.target.value)}></TextField>
        <Button variant = "contained" onClick={handleClick} sx={{backgroundColor: 'success.main'}}>Evaluate</Button>
        {answer}
      </Stack>
    </ThemeProvider>
  );
};
export default MathInput;
