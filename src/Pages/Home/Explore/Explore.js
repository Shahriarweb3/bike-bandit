import React, { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import SingleBike from '../Service/SingleBike';

const Explore = () => {
    const [bikes, setBikes] = useState([]);


    useEffect(() => {
        fetch('https://fierce-garden-19030.herokuapp.com/motorBikes')
            .then(res => res.json())
            .then(data => setBikes(data));
    }, [])
    return (
        <Container sx={{ mb: 10 }}>
            <Typography sx={{ color: 'success.main', m: 2 }} variant="h6" component="div">
                OUR TRENDY BIKES
            </Typography>

            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {

                        bikes.map(bike => <SingleBike
                            key={bike.name}
                            bike={bike}
                        ></SingleBike>)
                    }
                </Grid>
            </Box>
        </Container >
    );
};

export default Explore;