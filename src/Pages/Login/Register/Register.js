import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/honda_cbr.jpg';

const Register = () => {
    const [registerData, setRegisterData] = useState();
    const { user, registerUser, isLoading } = useAuth();
    const history = useHistory();


    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegisterData = { ...registerData };
        newRegisterData[field] = value;
        setRegisterData(newRegisterData);

    }
    const handleRegisterSubmit = e => {

        if (registerData.password !== registerData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(registerData.email, registerData.password, history, registerData.name);
        alert('Registered Successfully')
        e.preventDefault();

    }

    return (
        <Container>
            <h2 style={{ color: 'purple' }}>Please Register</h2>
            <Grid container spacing={2}>

                <Grid sx={{ mt: 8 }} item xs={12} md={6}>
                    <Typography variant="h3" gutterBottom>
                        {!isLoading && <form onSubmit={handleRegisterSubmit}>
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