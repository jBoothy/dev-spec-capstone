import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import "./ValidationTextFields.css"

export default function ValidationTextFields() {
  const [firstname, setFirstname] = React.useState('');
  const [lastname, setLastname] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [phonenumber, setPhoneNumber] = React.useState('');
  const [paid, setPaid] = React.useState('');
  const [installed, setInstalled] = React.useState('');
  const [rep, setRep] = React.useState('');
  
  // const [customers, setCustomers] = useState(false);
  
  // function createCustomer(){
  //   let customer = {
  //     'firstname': '',
  //     'lastname': '',
  //     'address': '',
  //     'phonenumber': '',
  //     'ispaid': Boolean,
  //     'isinstalled': Boolean,
  //     'rep': ''
  //   } 
  // }


  return (
    <div className='mainBody'>
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
          label="Customer First Name"
          onChange={(event)=>{
            setFirstname(event.target.value)
          }}
        />
      </div>
      <div>
        <TextField
          required
          id="outlined-error"
          label="Customer Last Name"
          onChange={(event)=>{
            setLastname(event.target.value)
          }}
        />
      </div>
      <div>
        <TextField
          required
          id="outlined-error"
          label="Customer Address"
          onChange={(event)=>{
            setAddress(event.target.value)
          }}
        />
      </div>
      <div>
        <TextField
          required
          id="outlined-error"
          label="Customer Phone Number"
          onChange={(event)=>{
            setPhoneNumber(event.target.value)
          }}
        />
      </div>
      <div>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Paid?</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          // value={paid}
          label="Paid"
          onChange={(event)=>{
            setPaid(event.target.value)
          }}
        >
          <MenuItem value={'yes'}>Yes</MenuItem>
          <MenuItem value={'no'}>No</MenuItem>
        </Select>
      </FormControl>
      </div>
      <div>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Installed?</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          // value={paid}
          label="Installed"
          onChange={(event)=>{
            setInstalled(event.target.value)
          }}
        >
          <MenuItem value={'yes'}>Yes</MenuItem>
          <MenuItem value={'no'}>No</MenuItem>
        </Select>
      </FormControl>
      </div>
      <div>
        <TextField
          required
          id="outlined-error"
          label="Rep Name"
          onChange={(event)=>{
            setRep(event.target.value)
          }}
        />
      </div>
    </Box>
    <button className="submitBtn" type='submit'>Submit</button>
    </div>
  );
}