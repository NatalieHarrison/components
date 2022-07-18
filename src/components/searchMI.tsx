import { useState } from 'react';

import { Stack, Typography } from '@mui/material';
import Autocomplete, { AutocompleteRenderOptionState } from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';

export default function ComboBox() {
  const [sde, setSde] = useState([]);

  const handleChange = (event, value) => {
    setSde(value);
  };
  return (
    <Box>
      <Stack direction="row">
        <Autocomplete
          multiple
          id="combo-box-demo"
          options={labelAndID}
          sx={{ width: 300 }}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} label="label" />}
        />
      </Stack>
      {sde.map(function (element) {
        return <Typography>{element.label}</Typography>;
      })}
    </Box>
  );
}

const labelAndID = [
  { label: 'SDE1', id: '2BzdflybK77cWYRapaslZJmunMa' },
  { label: 'SDE2', id: '2Bwy9VsccgGIQk1TmTiyDFzP0Y9' },
  { label: 'SDE3', id: '2Bwy9YZ6SVnJL6BBDQpE2j7EUBJ' },
  { label: 'SDE4', id: '2Bwy9VPjjzrzQtqg2jYuVT7E18d' },
  { label: 'SDE5', id: '2Bwy9W29p2gUKRLMBH1iVbv0IGE' },
  { label: 'SDE6', id: '2Bwy9XbPIw4H9JPtkI6ONpCH9r9' },
  { label: 'SDE7', id: '2Bwy9UhruJjjUrPAZ27GzgdljMW' },
];
