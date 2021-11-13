import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';



const Navigation = () => {
    const { user, logOut, name } = useAuth();
    // const { user, logOut, name } = useAuth();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Doctors Portal
                    </Typography>
                    <Link to="/home">

                    </Link>

                    {
                        user?.email ?

                            <Box>
                                <NavLink style={{ textDecoration: 'none' }} to="/orders">
                                    <Button style={{ color: 'white' }} variant="text">Manage Orders</Button>
                                </NavLink>
                                <NavLink style={{ textDecoration: 'none' }} to="/dashboard">
                                    <Button style={{ color: 'white' }} variant="text">DashBoard</Button>
                                </NavLink>
                                <NavLink style={{ textDecoration: 'none' }} to="/addproduct">
                                    <Button style={{ color: 'white' }} variant="text">Add a Product</Button>
                                </NavLink>
                                <Button onClick={logOut} color="inherit">Logout</Button>

                            </Box>

                            :
                            <NavLink to="/login">
                                <Button color="inherit">Login</Button>
                            </NavLink>
                    }

                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;