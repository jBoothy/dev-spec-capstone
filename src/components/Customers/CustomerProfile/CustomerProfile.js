import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import '../../Customers/AddCustomer/ValidationTextFields/ValidationTextFields.css';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TextField, InputLabel, FormControl, MenuItem, Select } from "@mui/material";

export default function CustomerProfile() {
  const { id } = useParams();
  const [c, setC] = React.useState({
    firstname: "",
    lastname: "",
    address: "",
    phonenumber: "",
    rep: "",
    reps: []
  });

  // Have customer information show up on page load
  useEffect(() => {
    axios
      .get(`/api/customers/${id}`)
      .then(res => {
        setC(res.data[0]);
      })
      .catch(err => {
        console.log(err);
      }
      );
  }, [id]);

  const onFNChange = (e) => {
    setC({
      ...c,
      firstname: e.target.value
    });
  }

  const onLNChange = (e) => {
    setC({
      ...c,
      lastname: e.target.value
    });
  }

  const onAChange = (e) => {
    setC({
      ...c,
      address: e.target.value
    });
  }

  const onPNChange = (e) => {
    setC({
      ...c,
      phonenumber: e.target.value
    });
  }

  const onRChange = (e) => {
    setC({
      ...c,
      rep: e.target.value
    });
  }

  // Submit customer information to database
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`/api/customers/${id}`, c).then((res) => {
      console.log(res);
      setC({
        firstname: "",
        lastname: "",
        address: "",
        phonenumber: "",
        rep: ""
      });
      toast.success('Customer updated successfully!', {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }).catch((err) => {
      console.log("Customer not found", err);
    }
    );
  }

  const [reps, setReps] = React.useState([
    {
      reps: []
    }
  ]);
  useEffect(() => {
    axios.get("/api/reps").then((res) => {
      setReps(res.data);
    }
    ).catch((err) => {
      console.log("Reps not found", err);
    }
    );
  }
  , []);


  return (

  <div>
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      className="formBox"
      >
        <TextField id="outlined-basic1" label="First Name" variant="outlined" value={c.firstname} onChange={onFNChange} required/>
        <TextField id="outlined-basic2" label="Last Name" variant="outlined" value={c.lastname} onChange={onLNChange} required/>
        <TextField id="outlined-basic3" label="Address" variant="outlined" value={c.address} onChange={onAChange} required/>
        <TextField id="outlined-basic4" label="Phone Number" variant="outlined" value={c.phonenumber} onChange={onPNChange} required/>
        <FormControl variant="outlined" className="formControl">
          <InputLabel id="demo-simple-select-outlined-label">Rep</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={c.rep}
            onChange={onRChange}
            label="Rep"
            required
          >
            {reps.map((rep) => (
              <MenuItem key={rep.id} value={rep.firstname + " " + rep.lastname}>{rep.firstname + " " + rep.lastname}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button className="defaultBtn" type="submit" onClick={handleSubmit} >Submit</Button>
      </Box>
    <ToastContainer
      position="bottom-center"
      autoClose={1000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  </div>

  )
}