// import { useAuth0 } from "@auth0/auth0-react";
// import Spinner from '../../Spinner/Spinner';
import axios from 'axios';
import '../../../../node_modules/bootstrap/dist/css/bootstrap-grid.css';
import React, { Component } from 'react';
import './CustomizedTables.css';


export default class CustomizedTables extends Component {
  constructor(props) {
      super(props);
      this.state = {
          Customers: []
      };
  }
  getCustomersData() {
      axios
          .get(`/api/currentCustomerList`, {})
          .then(res => {
              const data = res.data
              const customers = data.map(c =>

                <table>
                  <thead>
                    <tr>
                      <th key={c.firstname} scope="col">Name</th>
                      <th key={c.address} scope="col">Address</th>
                      <th key={c.phonenumber} scope="col">Phone Number</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td data-label="name" key={c.firstname}>{c.firstname} {c.lastname}</td>
                      <td data-label="address" key={c.address}>{c.address}</td>
                      <td data-label="phonenumber" key={c.phonenumber}>{c.phonenumber}</td>
                    </tr>
                  </tbody>
                </table>

                  )

                  this.setState({
                      customers
                  })

          })
          .catch((error) => {
              console.log(error)
          })

  }
  componentDidMount(){
      this.getCustomersData()
  }
  render() {

      return (
          <div className='tableBody'>
              {this.state.customers}
          </div>
      )
  }
}