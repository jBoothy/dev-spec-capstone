import * as React from 'react';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Contact() {
  // Submit button toasts a success message
  const handleSubmit = (e) => {
    e.preventDefault()
    toast.success('Complaint sent to the trash bin!', {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }


  return (
    <div className='mainBody'>
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <div>
        <TextField
          label="First Name"
          id="outlined-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
        />
        <TextField
          label="Last Name"
          id="outlined-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
        />
        <TextField
          label="Employee ID"
          id="outlined-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
        />
        <TextField
        label="Department"
        id="outlined-start-adornment"
        sx={{ m: 1, width: '25ch' }}
        InputProps={{
          startAdornment: <InputAdornment position="start"></InputAdornment>,
        }}
      />
      <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Description</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            
            startAdornment={<InputAdornment position="start"></InputAdornment>}
            label="Amount"
          />
        </FormControl>
        <Button className="defaultBtn" type="submit" onClick={handleSubmit}>Submit</Button>
      </div>
      
    </Box>
    <ToastContainer
    position="bottom-center"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    />
    </div>
  );
}