import React from "react";
import axios from "axios";
import './ValidationTextFields.css';

export default function ValidationTextFields() {

  const submitCustomer=(e)=>{
    e.preventDefault();
    axios
    .post(`/api/addcustomer`, { 
      firstname: "",
      lastname: "",
      address: "",
      phonenumber: ""
     }).then(res=>{
      console.log(res)
    })
  }

    return (
      <div>
        <input placeholder="First Name" id="firstname"/>
        <input placeholder="Last Name" id="lastname"/>
        <input placeholder="Address" id="address"/>
        <input placeholder="Phone Number" id="phonenumber"/>
        <button className="defaultBtn" onClick={submitCustomer}>Submit</button>
      </div>
    )
}