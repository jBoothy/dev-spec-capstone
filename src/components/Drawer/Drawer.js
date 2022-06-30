import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ViewListIcon from '@mui/icons-material/ViewList';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import './Drawer.css';

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    menu: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

    // render Dashboard button in drawer that links to dashboard
    const Dashboard = () => {
        return (
            <ListItem button component={Link} to="/">
                <ListItemIcon>
                    <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
            </ListItem>
        );
    }

    // render Add Customer button in drawer that links to add customer page
    const AddCustomer = () => {
        return (
            <ListItem button component={Link} to="/addcustomer">
                <ListItemIcon>
                    <AddCircleOutlineIcon />
                </ListItemIcon>
                <ListItemText primary="Add Customer" />
            </ListItem>
        );
    }

    // render Customer List button in drawer that links to customer list page
    const CustomerList = () => {
        return (
            <ListItem button component={Link} to="/customerList">
                <ListItemIcon>
                    <ViewListIcon />
                </ListItemIcon>
                <ListItemText primary="Customer List" />
            </ListItem>
        );
    }
    

    // render Add Rep button in drawer that links to add rep page
    const AddRep = () => {
        return (
            <ListItem button component={Link} to="/addrep">
                <ListItemIcon>
                    <AddCircleOutlineIcon />
                </ListItemIcon>
                <ListItemText primary="Add Rep" />
            </ListItem>
        );
    }
    

    // render Rep List button in drawer that links to rep list page
    const RepList = () => {
        return (
            <ListItem button component={Link} to="/repList">
                <ListItemIcon>
                    <ViewListIcon />
                </ListItemIcon>
                <ListItemText primary="Rep List" />
            </ListItem>
        );
    }

    // render Contact button in drawer that links to contact page
    const Contact = () => {
        return (
            <ListItem button component={Link} to="/Contact">
                <ListItemIcon>
                    <ContactPageIcon />
                </ListItemIcon>
                <ListItemText primary="Contact" />
            </ListItem>
        );
    }

    

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
        <List>
        <Dashboard/>
        <Divider/>
        <AddCustomer/>
        <CustomerList/>
        <AddRep/>
        <RepList/>
        <Contact/>
        <Divider/>

        </List>
        
    </Box>
  );

  return (
    <div>
      {['menu'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}
          style={
            {
                color: 'white'
            }
        }>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}