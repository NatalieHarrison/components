import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';


import { create, all } from 'mathjs'

const config = { }
const math = create(all, config)

const []


const MathInput = () => {
  return(
    <Box>
      <Stack direction = "row">
        <Input></Input>
        <Button>Evaluate</Button>
      </Stack>
    </Box>
  )
}
export default MathInput; 