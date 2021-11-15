import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import SingleBike from '../../Service/SingleBike';
import SingleRating from './SingleRating/SingleRating';



const Rating = () => {
    const [rating, setRating] = useState([]);
    useEffect(() => {
        fetch('https://fierce-garden-19030.herokuapp.com/rating')
            .then(res => res.json())
            .then(data => setRating(data));
    }, [])
    return (
        <Container>
            <Typography sx={{ color: 'success.main', m: 2 }} variant="h6" component="div">
                Buyer Reviews
            </Typography>

            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {

                        rating.map(rating => <SingleRating
                            key={rating._id}
                            rating={rating}
                        ></SingleRating>)
                    }
                </Grid>
            </Box>
        </Container >
    );
};

export default Rating;