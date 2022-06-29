import React, { Component } from "react";
import HomeButton from "../../homeButton/homeButton";
import axios from "axios";
import { useParams } from "react-router-dom";
import '../../Customers/AddCustomer/ValidationTextFields/ValidationTextFields.css';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TextField } from "@mui/material";

export default class CustomerProfile extends Component {
  constructor(props) {
      super(props);
      this.state = {
          Customers: []
      };
      
  }


  componentDidMount(props) {
    const { id } = this.c.id
    axios.get(`/api/customers/${id}`).then((res) => {
              const data = res.data
              const customers = data.map(c => (

                    <Box
                    component="form"
                    sx={{
                      '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    className="formBox"
                    >
                      <TextField id="outlined-basic1" label="First Name" variant="outlined" value={this.state.firstname} required/>
                      <TextField id="outlined-basic2" label="Last Name" variant="outlined" /* value={this.state.lastname} onChange={this.onLNChange} */ required/>
                      <TextField id="outlined-basic3" label="Address" variant="outlined" /* value={this.state.address} onChange={this.onAChange} */ required/>
                      <TextField id="outlined-basic4" label="Phone Number" variant="outlined" /* value={this.state.phonenumber} onChange={this.onPNChange} */ required/>
                      <TextField id="outlined-basic5" label="Rep Name" variant="outlined" /* value={this.state.rep} onChange={this.onRChange} */ required/>
                      <Button className="defaultBtn" type="submit" >Submit</Button>
                    </Box>

                    ))

                  this.setState({
                      customers
                  })

          })
          .catch((error) => {
              console.log(error)
          })

  }
  

  render() {

      return (
          <div>
              <HomeButton/>
              {this.state.customers}
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
}