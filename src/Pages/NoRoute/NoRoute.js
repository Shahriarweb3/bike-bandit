import React from 'react';
import Box from '@mui/material/Box';
import { Paper, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const NoRoute = () => {
    return (
        <Box

            sx={{
                justifyContent: 'center',
                p: 6,
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 1,
                    width: '60%,',
                    height: '50%,'
                },
            }}
        >
            <Paper sx={{ p: 20 }} elevation={3}><h2 style={{ textAlign: 'center' }}>Sorry, You Typed Wrong Path</h2>
                <br />
                <Link to='/' style={{ textDecoration: 'none' }}><Button style={{ marginTop: '-20px' }} variant="contained"> Go to Home</Button></Link>
            </Paper>
        </Box>
    );
};

export default NoRoute;