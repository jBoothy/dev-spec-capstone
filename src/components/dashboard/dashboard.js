import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';
import LogoutBtn from "./Logout/Logout";
import './dashboard.css';
import Spinner from "../Spinner/Spinner";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ViewListIcon from '@mui/icons-material/ViewList';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import GetAppIcon from '@mui/icons-material/GetApp';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Divider from "@mui/material/Divider";


const Dashboard = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div><Spinner/></div>;
  }

    return (
    isAuthenticated && (
      <div> 
      <div className='mainBody'>
      
      

      <Stack className="btnCont" direction="row" spacing={2}>
        <Button className="btn" variant="contained" href="/addcustomer"><Link to="/addcustomer"><AddCircleOutlineIcon/> Add Customer </Link></Button>
        <Divider/>
        <Button className="btn" variant="contained" href="/customerList"><Link to="/customerList"><ViewListIcon/> Customer List </Link></Button>
        <Divider/>
        <Button className="btn" variant="contained" href="/addrep"><Link to="/addrep"><AddCircleOutlineIcon/> Add Rep </Link></Button>
        <Divider/>
        <Button className="btn" variant="contained" href="/repList"><Link to="/repList"><ViewListIcon/> Rep List </Link></Button>
        <Divider/>
        <Button className="btn" variant="contained" href="/Contact"><Link to="/Contact"><ContactPageIcon/> Contact </Link></Button>
        <Divider/>
        <Button className="btn" variant="contained" href="/app" disabled><Link to="/app"><GetAppIcon/> App Download </Link></Button>
        <Divider/>
        <LogoutBtn/>
      </Stack>

      </div></div>
    ))
  }

export default Dashboard;
