import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png';
import homeBanner from '../../../images/homeBanner.jpg'
import { Button, Container, Typography } from '@mui/material';
import { fontFamily } from '@mui/system';


const mainBanner = {
    background: `url(${homeBanner})`
}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400
}
// flexGrow: 1
const Banner = () => {
    return (
        <div style={mainBanner} sx={{ height: '100' }}>
            <Container>
                <Grid container spacing={2}>

                    <Grid item xs={12} md={6} style={{ ...verticalCenter, textAlign: 'left' }}>
                        <Box>
                            <Typography sx={{ fontFamily: 'Monospace', fontWeight: 'bold' }} variant="h3" style={{ color: 'Black', }}>
                                DROP A GEAR <br />
                                AND DISAPPEAR
                            </Typography>
                            <Typography variant="body2" sx={{ my: 3, fontFamily: 'sans-serif', fontWeight: 'bold' }} style={{ color: 'black', textAlign: 'left' }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolore corrupti quae ullam nostrum minima, aspernatur possimus nemo assumenda praesentium.
                            </Typography>
                            <br />
                            <Button variant="contained" style={{ backgroundColor: '#46CAC4' }}>EXPLORE BIKES</Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} style={verticalCenter}>
                        <img style={{ width: '400px' }} src={chair} alt="" />
                    </Grid>

                </Grid>
            </Container>
        </div >
    );
};

export default Banner;
