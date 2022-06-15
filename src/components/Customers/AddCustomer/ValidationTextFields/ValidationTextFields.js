import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import "./ValidationTextFields.css"

export default function ValidationTextFields() {
  const [paid, SetPaid] = React.useState('');

  const handleChange = (event) => {
    SetPaid(event.target.value);
  };


  return (
    <div>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-error"
          label="Customer Name"
          // defaultValue="Hello World"
        />
      </div>
      <div>
        <TextField
          required
          id="outlined-error"
          label="Customer Address"
          // defaultValue="Hello World"
        />
      </div>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Paid?</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={paid}
          label="Paid"
          onChange={handleChange}
        >
          <MenuItem value={'yes'}>Yes</MenuItem>
          <MenuItem value={'no'}>No</MenuItem>
        </Select>
      </FormControl>
      <div>
        <TextField
          required
          id="outlined-error"
          label="Rep Name"
          // defaultValue="Hello World"
        />
      </div>
    </Box>
    <button className="submitBtn" type='submit'>Submit</button>
    </div>
  );
}