import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png';

const Login = () => {
    const [loginData, setLoginData] = useState();
    const { user, loginUser, isLoading } = useAuth();
    const location = useLocation();
    const history = useHistory()


    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);

    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history)
        alert('hello')
        e.preventDefault();
    }
    return (
        <Container>
            <h2>this is login</h2>
            <Grid container spacing={2}>
                <Grid sx={{ mt: 8 }} item xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>
                        Login
                        <form onSubmit={handleLoginSubmit}>
                            <TextField
                                sx={{ width: '75%' }}
                                id="standard-basic"
                                name="email"
                                onBlur={handleOnChange}
                                label="Your Email"
                                variant="standard" />
                            <br />
                            <TextField
                                sx={{ width: '75%' }}
                                id="standard-basic"
                                label="Password"
                                name="password"
                                onBlur={handleOnChange}
                                type="password"
                                variant="standard" />
                            <NavLink
                                to="/register"
                                style={{ textDecoration: "none" }}
                            >
                                <Button variant="text">New User? Please Register</Button>
                            </NavLink>

                            <br />
                            <br />
                            <Button type="submit" variant="contained" style={{ backgroundColor: '#46CAC4' }}>LOGIN</Button>
                        </form>
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img stye={{ width: '100%' }} src={login} alt="" />
                </Grid>

            </Grid>

        </Container>
    );
};

export default Login;
