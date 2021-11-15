import { Container, Card, CardContent, CardMedia, Grid, Typography, TextField } from '@mui/material';
import userEvent from '@testing-library/user-event';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../../../hooks/useAuth';
import BuyerInfo from './BuyerInfo/BuyerInfo';
import './BuyerInfo/BuyerInfo.css';

const BuyNowBike = () => {
    // const { _id, name, description, img } = bike;
    const { user } = useAuth();
    const { bikeId } = useParams();
    const [buyNow, setBuyNow] = useState({});

    useEffect(() => {
        fetch(`https://fierce-garden-19030.herokuapp.com/motorBikes/${bikeId}`)
            .then(res => res.json())
            .then(data => setBuyNow(data));
    }, [bikeId])

    return (
        <div>
            <h2>Order Detail</h2>
            <Container sx={{ justifyContent: 'space-around', display: 'flex', flexDirection: 'row' }} >
                <Grid item xs={4} sm={4} md={6} >

                    <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>

                        <CardMedia
                            component="img"
                            style={{ width: '80%', height: '80%', margin: '0 auto' }}

                            image={buyNow.img}
                            alt="honda image"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {buyNow.productName}
                            </Typography>
                            <Typography gutterBottom variant="h5" component="div">
                                {buyNow.productPrice}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {buyNow.productDescription}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <BuyerInfo
                    buyNow={buyNow}
                ></BuyerInfo>
            </Container>


        </div >
    );
};

export default BuyNowBike;