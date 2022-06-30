import React, { Component } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';


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

export default class RepList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Reps: [],
    };
  }

  removeRep(e, value) {
    axios.delete('/api/reps/' + value).then((response) => {
      // console.log("RESPONSE FROM POST", response.data);
      this.getRepsData()
      toast.success('Rep deleted successfully!', {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }, (err) => {
      console.log("Rep not deleted", err);
      toast.error('Rep not added', {
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
    axios
      .get(`/api/reps`, {})
      .then((res) => {
        const data = res.data;
        const Reps = data.map((r) => (

                      <StyledTableRow key={r.name}>
                        <StyledTableCell component="th" scope="row">
                          {r.firstname} {r.lastname}
                        </StyledTableCell>
                        <StyledTableCell align="right">{r.id}</StyledTableCell>
                        <StyledTableCell align="right">
                        <Stack className='btnContain' align="right"  spacing={2}>
                          <Link to={'/editRep/' + r.id}><Button id='editBtn' variant="outlined" startIcon={<EditIcon/>}>Edit</Button></Link>
                          <Button id='deleteBtn' variant="outlined" startIcon={<DeleteIcon/>} onClick={(e) => this.removeRep(e, r.id)}>Delete</Button>
                        </Stack>
                        </StyledTableCell>
                      </StyledTableRow>

        )
        );
        this.setState({ Reps });
      }
      , (err) => {
        console.log(err)
      }
      );
  }

  componentDidMount() {
    this.getRepsData();
  }
          

  render() {
    return (
      <div>
            <div className="container">
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>Rep Name</StyledTableCell>
                      <StyledTableCell align="right">Rep ID</StyledTableCell>
                      <StyledTableCell align="right"></StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                  {this.state.Reps}
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
      </div>
    );
  }
}
