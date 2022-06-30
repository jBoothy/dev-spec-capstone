import axios from 'axios';
import '../../../../node_modules/bootstrap/dist/css/bootstrap-grid.css';
import React, { Component } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './CustomizedTables.css';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.common.white,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default class CustomizedTables extends Component {
  constructor(props) {
      super(props);
      this.state = {
          Customers: [],
          reps: []
      };
  }

  removeCustomer(e, value) {
    axios.delete('/api/customers/' + value).then((response) => {
      // console.log("RESPONSE FROM POST", response.data);
      this.getCustomersData()
      toast.success('Customer deleted successfully!', {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }, (err) => {
      console.log("Customer not deleted", err);
      toast.error('Customer not added', {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    });
  }

  getRepsData() {
    axios.get('/api/reps').then((response) => {
      // console.log("RESPONSE FROM GET", response.data);
      this.setState({
        reps: response.data
      })
    }
    , (err) => {
      console.log("Reps not retrieved", err);
    }
    );
  }
  

  getCustomersData() {
      axios
          .get(`/api/customers`, {})
          .then(res => {
              const data = res.data
              const customers = data.map(c => (

                      <StyledTableRow key={c.name}>
                        <StyledTableCell component="th" scope="row">
                          {c.firstname} {c.lastname}
                        </StyledTableCell>
                        <StyledTableCell align="right">{c.address}</StyledTableCell>
                        <StyledTableCell align="right">{c.phonenumber}</StyledTableCell>
                        <StyledTableCell align="right">{c.rep}</StyledTableCell>
                        <StyledTableCell align="right">
                        <Stack className='btnContain' align="right"  spacing={2}>
                          <Link to={'/customerProfile/' + c.id}><Button id='editBtn' variant="outlined" startIcon={<EditIcon/>}>Edit</Button></Link>
                          <Button id='deleteBtn' variant="outlined" startIcon={<DeleteIcon/>} onClick={(e) => this.removeCustomer(e, c.id)}>Delete</Button>
                        </Stack>
                        </StyledTableCell>
                      </StyledTableRow>
                    ))

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
            <div className="container">
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>Customer Name</StyledTableCell>
                      <StyledTableCell align="right">Address</StyledTableCell>
                      <StyledTableCell align="right">Phone Number</StyledTableCell>
                      <StyledTableCell align="right">Rep Name</StyledTableCell>
                      <StyledTableCell align="right"></StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                  {this.state.customers}
                  </TableBody>
                </Table>
              </TableContainer>
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