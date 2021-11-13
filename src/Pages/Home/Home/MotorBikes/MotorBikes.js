import React, { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import SingleBike from '../../Service/SingleBike';

const MotorBikes = () => {
    const [bikes, setBikes] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/motorBikes')
            .then(res => res.json())
            .then(data => setBikes(data));
    }, [])
    return (
        <Container>
            <Typography sx={{ color: 'success.main', m: 2 }} variant="h6" component="div">
                OUR SERVICES
            </Typography>
            <Typography variant="h4" component="div" sx={{ fontWeight: 900, m: 2 }}>
                Services We Provide
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

export default MotorBikes;