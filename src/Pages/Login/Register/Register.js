import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png';

const Register = () => {
    const [loginData, setLoginData] = useState();
    const { user, registerUser, isLoading } = useAuth();
    const history = useHistory();


    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);

    }
    const handleLoginSubmit = e => {

        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password, history, loginData.name);
        alert('Registered Successfully')
        e.preventDefault();

    }

    return (
        <Container>

            <Grid container spacing={2}>
                <Grid sx={{ mt: 8 }} item xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>
                        Register
                        {!isLoading && <form onSubmit={handleLoginSubmit}>
                            <TextField
                                sx={{ width: '75%' }}
                                id="standard-basic"
                                name="name"
                                onBlur={handleOnChange}
                                label="Your Name"
                                variant="standard" />
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
                            <TextField
                                sx={{ width: '75%' }}
                                id="standard-basic"
                                label="Confirm Password"
                                name="password2"
                                onBlur={handleOnChange}
                                type="password"
                                variant="standard" />
                            <NavLink
                                to="/login"
                                style={{ textDecoration: "none" }}
                            >
                                <Button variant="text">Registered User? Please Login</Button>
                            </NavLink>

                            <br />
                            <br />
                            <Button type="submit" variant="contained" style={{ backgroundColor: '#46CAC4' }}>REGISTER</Button>
                        </form>}
                        {isLoading && < CircularProgress />}
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img stye={{ width: '100%' }} src={login} alt="" />
                </Grid>

            </Grid>

        </Container>
    );
};

export default Register;