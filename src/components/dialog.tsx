import { useState } from 'react';

import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const Dialogg = () => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = (value: string) => {
    setOpen(false);
  };
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open simple dialog
      </Button>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle> Terms and Conditions</DialogTitle>
        <DialogContent>
          {' '}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptas dolorem veritatis error, vel nemo
          adipisci quasi laboriosam molestias itaque, soluta nobis sapiente totam minus iusto, porro ipsa fugiat enim?
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default Dialogg;
