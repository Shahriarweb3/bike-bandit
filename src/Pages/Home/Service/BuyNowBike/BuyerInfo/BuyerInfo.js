import { Button, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../../../hooks/useAuth';


const BuyerInfo = (props) => {
    const { user } = useAuth();
    const { productName, productPrice } = props.buyNow;
    const initialBookingInfo = { name: user.displayName, email: user.email, address: '', city: '', phone: '' }
    const [bookingInfo, setBookingInfo] = useState(initialBookingInfo);


    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookingInfo };
        newInfo[field] = value;
        setBookingInfo(newInfo);
    }


    const onSubmit = e => {
        const orderConfirm = { ...bookingInfo, productName, productPrice }
        fetch('https://fierce-garden-19030.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderConfirm)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Order processed Successfully');

                }
            })

        e.preventDefault();
    };

    return (

        < div >
            <Grid sx={{ mt: 8 }} item xs={12} md={6}>
                <form onSubmit={onSubmit}>
                    <TextField
                        sx={{ width: '75%' }}
                        id="standard-basic"
                        name="name"
                        onBlur={handleOnBlur}
                        label="Your Name"
                        defaultValue={user.displayName}
                        variant="standard" />
                    <TextField
                        sx={{ width: '75%' }}
                        id="standard-basic"
                        name="email"
                        defaultValue={user.email}
                        onBlur={handleOnBlur}
                        label="Your Email"
                        variant="standard" />
                    <br />
                    <TextField
                        disabled
                        sx={{ width: '75%' }}
                        id="standard-basic"
                        name="productName"
                        value={`Bike Name: ${productName}`}
                        variant="standard" />

                    <TextField
                        disabled
                        sx={{ width: '75%' }}
                        id="standard-basic"
                        name="productPrice"
                        value={`Tk ${productPrice}`}
                        variant="standard" />

                    <TextField
                        sx={{ width: '75%' }}
                        id="standard-basic"
                        label="address"
                        name="address"
                        onBlur={handleOnBlur}
                        variant="standard" />
                    <TextField
                        sx={{ width: '75%' }}
                        id="standard-basic"
                        label="city"
                        name="city"
                        onBlur={handleOnBlur}
                        variant="standard" />
                    <TextField
                        sx={{ width: '75%' }}
                        id="standard-basic"
                        label="phone"
                        name="phone"
                        onBlur={handleOnBlur}
                        variant="standard" />
                    <Button type="submit" variant="contained" style={{ backgroundColor: '#46CAC4' }}>Buy Now</Button>
                </form>

            </Grid>
        </div >
    );
};

export default BuyerInfo;