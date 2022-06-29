import React, { useEffect } from "react";
import HomeButton from "../../homeButton/homeButton";
import axios from "axios";
import { useParams } from "react-router-dom";
import '../../Customers/AddCustomer/ValidationTextFields/ValidationTextFields.css';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TextField } from "@mui/material";

export default function CustomerProfile() {
  const { id } = useParams();
  const [c, setC] = React.useState({
    firstname: "",
    lastname: "",
    address: "",
    phonenumber: "",
    rep: ""
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
  }, []);

  // useEffect(() => {
  //   axios.get(`/api/customers/${id}`).then((res) => {
  //     // console.log("RESPONSE FROM GET", res.data);
  //     setC(res.data);
  //   }).catch((err) => {
  //     console.log("Customer not found", err);
  //   });
  // }, [id]);

  // Make all input fields change customer information in state
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
      // Make input fields uneditable after submit
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

  return (

  <div>
    <HomeButton/>
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      className="formBox"
      >
        <TextField id="outlined-basic1" label="First Name" variant="outlined" value={c.firstname} onChange={onFNChange}/>
        <TextField id="outlined-basic2" label="Last Name" variant="outlined" value={c.lastname} onChange={onLNChange}/>
        <TextField id="outlined-basic3" label="Address" variant="outlined" value={c.address} onChange={onAChange}/>
        <TextField id="outlined-basic4" label="Phone Number" variant="outlined" value={c.phonenumber} onChange={onPNChange}/>
        <TextField id="outlined-basic5" label="Rep Name" variant="outlined" value={c.rep} onChange={onRChange}/>
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