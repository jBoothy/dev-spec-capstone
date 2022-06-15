import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './FormPropsTextFields.css';

export default function FormPropsTextFields() {
  return (
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
          id="outlined-required"
          label="Customer Name"
          // defaultValue="Customer Name"
        />
        <TextField
          required
          id="outlined-required"
          label="Address"
          // defaultValue="Address"
        />
        <TextField
          required
          id="outlined-required"
          label="Phone Number"
          // defaultValue="Phone Number"
        />
        <TextField
          required
          id="outlined-required"
          label="Paid For"
          // defaultValue="Paid For?"
        />
        <TextField
          required
          id="outlined-required"
          label="Installed"
          // defaultValue="Installed?"
        />
        <TextField
          required
          id="outlined-required"
          label="Rep"
          // defaultValue="Rep Name"
        />
      </div>
    </Box>
  );
}