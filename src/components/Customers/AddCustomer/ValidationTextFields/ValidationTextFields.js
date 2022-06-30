import React, { Component } from "react";
import axios from "axios";
import { TextField, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import './ValidationTextFields.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class ValidationTextFields extends Component {
  constructor(props){
    super(props)
    this.state = {
      firstname: "",
      lastname: "",
      address: "",
      phonenumber: "",
      rep: "",
      reps: []
    }
}


  onFNChange = (e) => {
    this.setState({
      firstname: e.target.value
    })
  }

  onLNChange = (e) => {
    this.setState({
      lastname: e.target.value
    })
  }

  onAChange = (e) => {
    this.setState({
      address: e.target.value
    })
  }

  onPNChange = (e) => {
    this.setState({
      phonenumber: e.target.value
    })
  }

  onRChange = (e) => {
    this.setState({
      rep: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    axios.post("/api/customers", this.state)
    .then(res => {
      console.log(res)
      // Reset input fields to empty after submit
      this.setState({
        firstname: "",
        lastname: "",
        address: "",
        phonenumber: "",
        rep: ""
      })
      toast.success('Customer added successfully!', {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }).catch(err => {
      console.log(err)
      toast.error('Customer not added', {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }
    )
  }

  // Get reps from axios call and map through them to create a dropdown menu that renders in the form
  componentDidMount() {
    axios.get("/api/reps")
      .then(res => {
        this.setState({
          reps: res.data
        })
      }
      )
  }

  renderReps = () => {
    return this.state.reps.map(rep => {
      return (
        <MenuItem key={rep.id} value={rep.firstname + " " + rep.lastname}>
          {rep.firstname} {rep.lastname}
        </MenuItem>
      )
    }
    )
  }

  render(){
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
        <TextField id="outlined-basic1" label="First Name" variant="outlined" value={this.state.firstname} onChange={this.onFNChange} required/>
        <TextField id="outlined-basic2" label="Last Name" variant="outlined" value={this.state.lastname} onChange={this.onLNChange} required/>
        <TextField id="outlined-basic3" label="Address" variant="outlined" value={this.state.address} onChange={this.onAChange} required/>
        <TextField id="outlined-basic4" label="Phone Number" variant="outlined" value={this.state.phonenumber} onChange={this.onPNChange} required/>
        <FormControl variant="outlined" className="formControl">
          <InputLabel id="demo-simple-select-outlined-label">Rep</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={this.state.rep}
            onChange={this.onRChange}
            label="Rep"
            required
          >
            {this.renderReps()}
          </Select>
        </FormControl>
          
          <Button className="defaultBtn" type="submit" onClick={ this.handleSubmit }>Submit</Button>
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
      
    )}
}



