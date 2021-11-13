
import React from 'react';
import { CardMedia, Grid } from '@mui/material';
import Card from '@mui/material/Card';

import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link, NavLink } from 'react-router-dom';

const SingleBike = ({ bike }) => {
    // const { name, description, img } = props.bike;
    const { _id, name, description, img } = bike;
    return (

        <Grid item xs={4} sm={4} md={4} >

            <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>

                <CardMedia
                    component="img"
                    style={{ width: '80%', height: '80%', margin: '0 auto' }}

                    image={img}
                    alt="honda image"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <NavLink style={{ textDecoration: 'none', margin: 'auto' }} to={`/motorbikes/${_id}`}>
                        <Button variant="contained" style={{ backgroundColor: '#46CAC4', }}>BUY NOW</Button>
                    </NavLink>

                </CardActions>
            </Card>
        </Grid>
    );
};

export default SingleBike;