import React from 'react';
import { Drawer, List, ListItem, ListItemText, Menu } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import logo from './TextLogo1.png';
import icon from './menu.png';
import '../App.css';


function Navbar({ isMobile }) {
 const [drawerOpen, setDrawerOpen] = React.useState(false);
 const location = useLocation();

 const toggleDrawer = (open) => {
  setDrawerOpen(open);
};

const handleDrawerToggle = () => {
  toggleDrawer(!drawerOpen);
};
 return (
    <>
      <Drawer
        variant={isMobile ? 'temporary' : 'permanent'}
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          style: {
            width: 250,
            backgroundColor: '#365367',
            borderColor : '#365367',
          },
        }}
      >
        <List>
          <ListItem>
            <img src={logo} alt="logo" width="auto" height="75" />
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/ChampionsClub"
            sx={{ backgroundColor: location.pathname === '/ChampionsClub' ? '#f494AB' : '', "&:hover": { backgroundColor: "#ffbaa2",}, color: location.pathname === '/ChampionsClub' ? '#f9f4e6' : '' }}
          >
          <ListItemText primary="Champions Club" sx={{ color: location.pathname === '/ChampionsClub' ? '#365367' : '#f9f4e6', }} />
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/SingleGame"
            sx={{ backgroundColor: location.pathname === '/SingleGame' ? '#f494AB' : '', "&:hover": { backgroundColor: "#ffbaa2",}, color: location.pathname === '/SingleGame' ? '#f9f4e6' : '' }}
          >
            <ListItemText primary="Game Records" sx={{ color: location.pathname === '/SingleGame' ? '#365367' : '#f9f4e6', }} />
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/SingleSeason"
            sx={{ backgroundColor: location.pathname === '/SingleSeason' ? '#f494AB' : '', "&:hover": { backgroundColor: "#ffbaa2",}, color: location.pathname === '/SingleSeason' ? '#f9f4e6' : '' }}
          >
            <ListItemText primary="Season Records" sx={{ color: location.pathname === '/SingleSeason' ? '#365367' : '#f9f4e6', }} />
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/Career"
            sx={{ backgroundColor: location.pathname === '/Career' ? '#f494AB' : '', "&:hover": { backgroundColor: "#ffbaa2",}, color: location.pathname === '/Career' ? '#f9f4e6' : '' }}
          >
            <ListItemText primary="Career Records" sx={{ color: location.pathname === '/Career' ? '#365367' : '#f9f4e6', }} />
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/H2H"
            sx={{ backgroundColor: location.pathname === '/H2H' ? '#f494AB' : '', "&:hover": { backgroundColor: "#ffbaa2",}, color: location.pathname === '/H2H' ? '#f9f4e6' : '' }}
          >
            <ListItemText primary="Head to Head Stats" sx={{ color: location.pathname === '/H2H' ? '#365367' : '#f9f4e6', }} />
          </ListItem>
        </List>
      </Drawer>
      {isMobile && <button onClick={() => toggleDrawer(true)}><img src={icon} alt="menu" width="24" height="24" /></button>}
    </>
 );
}

export default Navbar;