import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTheme, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import { TableHead } from '@mui/material';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import TextField from '@mui/material/TextField';
import '../../../../node_modules/bootstrap/dist/css/bootstrap-grid.css';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;
  const [customers, setCustomers] = useState(false);
  useEffect(() => {
    getCustomers();
  }, []);

  function getCustomers() {
    fetch('http://localhost:3001')
      .then(response => {
        return response.text();
      })
      .then(data => {
        setCustomers(data);
      });
  }

  function deleteCustomers() {
    let id = prompt('Enter merchant id');
    fetch(`http://localhost:3001/customers/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        return response.text();
      })
      .then(data => {
        alert(data);
        getCustomers();
      });
  }

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function createData(firstname, lastname, address, number, paid, installed, rep) {
  return { firstname, lastname, address, paid, number, installed, rep};
}

const rows = [
  
  createData('Bailey', 'Haskell', '867 N 5309 E Tyler, TX', '866-456-9876', 'No', 'Yes', "John Booth"),
  createData('Ronni', 'Volesenko', '694 S 200 E Rust, WA', '999-867-5309', 'Yes', 'No', "John Booth"),
  // createData('Rick Oss', '4567 W 656 S Salem, UT', '801-636-5667', 'Yes', 'Yes', "Cassidy"),
  // createData('Victor Cruz', '567 St. New York', '564-123-4567', 'No', 'No', "John"),
  // createData('Johnny Depp', '103 Amber Ln Hollywood, California', '987-654-3210', 'Yes', 'Yes', "Cassidy")
].sort((a, b) => (a.name < b.name ? -1 : 1));

export default function CustomPaginationActionsTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper}>
      <div className='searchBar'>
        <TextField id="outlined-search" label="Search field" type="search" />
      </div>
      <div className='table-responsive'>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table; customized table" className='table'>
        <TableHead>
        <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Address</StyledTableCell>
            <StyledTableCell align="right">Phone Number</StyledTableCell>
            <StyledTableCell align="right">Paid</StyledTableCell>
            <StyledTableCell align="right">Installed</StyledTableCell>
            <StyledTableCell align="right">Rep</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <TableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.firstname} {row.lastname}
              </StyledTableCell>
              <StyledTableCell style={{ width: 300 }} align="right">
                {row.address}
              </StyledTableCell>
              <StyledTableCell style={{ width: 300 }} align="right">
                {row.number}
              </StyledTableCell>
              <StyledTableCell style={{ width: 300 }} align="right">
                {row.paid}
              </StyledTableCell>
              <StyledTableCell style={{ width: 300 }} align="right">
                {row.installed}
              </StyledTableCell>
              <StyledTableCell style={{ width: 300 }} align="right">
                {row.rep}
              </StyledTableCell>
            </TableRow>
          ))}

          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <StyledTableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
      </div>
    </TableContainer>
  );
}