import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Card, CardActions, CardContent, CardMedia, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const ManageProducts = () => {
    const [bikes, setBikes] = useState([]);


    // Load all products on admin dashboard

    useEffect(() => {
        fetch('https://fierce-garden-19030.herokuapp.com/motorbikes')
            .then(res => res.json())
            .then(data => setBikes(data));
    }, [])

    // Delete a product from ui and database

    const handleProductDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://fierce-garden-19030.herokuapp.com/motorbikes/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert('deleted')
                        const remainingBikes = bikes.filter(order => order._id !== id);
                        setBikes(remainingBikes);
                    };
                })
        }
    }
    return (
        <Container sx={{ mb: 10 }}>
            <Typography sx={{ color: 'success.main', m: 2 }} variant="h6" component="div">
                Total Bikes: {bikes.length}
            </Typography>

            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} >
                    {

                        bikes.map(bike =>

                            <Grid item xs={12} sm={6} md={4}>

                                <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>

                                    <CardMedia
                                        component="img"
                                        style={{ width: '80%', height: '80%', margin: '0 auto' }}

                                        image={bike.img}
                                        alt="honda image"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {bike.productName}
                                        </Typography>

                                        <Typography variant="body2" color="text.secondary">
                                            {bike.productPrice}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>

                                        <Button onClick={() => handleProductDelete(bike._id)} variant="contained" style={{ backgroundColor: '#46CAC4', marginLeft: '80px' }}>Delelet Product</Button>


                                    </CardActions>
                                </Card>
                            </Grid>

                        )
                    }
                </Grid>
            </Box>
        </Container >
    );
};

export default ManageProducts;