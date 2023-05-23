import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function RowRadioButtonsGroup() {
  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label" style={{ color: 'black', fontSize: '15px' }}>Gender</FormLabel>
      <RadioGroup 
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel
  value="female"
  control={<Radio sx={{ color: '#3EB489'}} />}
  label={<span style={{ color: 'black' }}>Female</span>}
/>
<FormControlLabel
  value="male"
  control={<Radio sx={{ color: '#3EB489' }} />}
  label={<span style={{ color: 'black' }}>male</span>}
/>
<FormControlLabel
  value="others"
  control={<Radio sx={{ color: '#3EB489' }} />}
  label={<span style={{ color: 'black' }}>others</span>}
/>
      </RadioGroup>
    </FormControl>
  );
}
