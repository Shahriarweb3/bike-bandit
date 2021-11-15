import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import homeBanner from '../../../images/bikeBanner.jpg';
import { Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';


const mainBanner = {
    background: `url(${homeBanner})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400
}
// flexGrow: 1
const Banner = () => {

    return (
        <div style={mainBanner}  >
            <Container >
                <Grid container spacing={2}>

                    <Grid item xs={12} md={6} style={{ ...verticalCenter, textAlign: 'left' }}>
                        <Box>
                            <Typography sx={{ fontFamily: 'Monospace', fontWeight: 'bold' }} variant="h3" style={{ color: 'White', }}>
                                DROP A GEAR <br />
                                AND DISAPPEAR
                            </Typography>
                            <Typography variant="body2" sx={{ my: 3, fontFamily: 'sans-serif', fontWeight: 'bold' }} style={{ color: 'white', textAlign: 'left' }}>
                                Motorcycling culture is something that riders enjoy no matter how different they are in terms of religion, gender, language, race, or skin color
                            </Typography>
                            <br />
                            <Link style={{ textDecoration: 'none' }} to='/explore'>
                                <Button variant="contained" style={{ backgroundColor: '#46CAC4' }}>EXPLORE BIKES</Button>
                            </Link>
                        </Box>
                    </Grid>
                    <Grid>

                    </Grid>

                </Grid>
            </Container>
        </div >
    );
};

export default Banner;
