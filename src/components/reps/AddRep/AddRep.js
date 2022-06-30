import React from "react";
import axios from "axios";
import { Box, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './AddRep.css';

export default function AddRep() {
  const [rep, setRep] = React.useState({
    firstname: "",
    lastname: "",
  });

  const onFNChange = (e) => {
    setRep({
      ...rep,
      firstname: e.target.value
    });
  }

  const onLNChange = (e) => {
    setRep({
      ...rep,
      lastname: e.target.value
    });
  }

  const onSubmit = (e) => {
    e.preventDefault();
    axios.post("/api/reps", rep)
      .then(res => {
        console.log(res);
        setRep({
          firstname: "",
          lastname: "",
        });
        toast.success("Rep added successfully!");
      }
      )
      .catch(err => {
        console.log(err);
        toast.error("Error adding rep!");
      }
      );
  }

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
        <TextField id="outlined-basic4" label="First Name" variant="outlined" onChange={onFNChange} required/>
        <TextField id="outlined-basic5" label="Last Name" variant="outlined"  onChange={onLNChange}  required/>
        <Button className="defaultBtn" type="submit" onClick={ onSubmit }>Submit</Button>
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
