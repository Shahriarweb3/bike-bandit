import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const Footer = () => {
    return (
        <Box sx={{ width: '100%', bgcolor: 'text.primary' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    <h1 style={{ color: 'white' }}>Bike Bandit</h1>
                </Grid>
                <Grid sx={{ display: 'flex', flexDirection: 'column' }} item xs={6}>
                    <Link to="/explore">
                        <Button variant="text" style={{ color: 'white' }}> Explore Bikes</Button>
                    </Link>
                    <Link to="/aboutus">
                        <Button variant="text" style={{ color: 'white' }}> About Us</Button>
                    </Link>
                    <Link to="/contactus">
                        <Button variant="text" style={{ color: 'white' }}> Contact Us</Button>
                    </Link>

                </Grid>
            </Grid>
        </Box>
    );
};

export default Footer;