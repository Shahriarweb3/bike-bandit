import { Button, CircularProgress, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../../../hooks/useAuth';


const BuyerInfo = (props) => {
    const { user } = useAuth();
    const { name, description } = props.buyNow;
    const initialBookingInfo = { name: user.displayName, email: user.email, productName: name, productDescription: description, address: '', city: '', phone: '', orderStatus: 'Pending' }
    const [bookingInfo, setBookingInfo] = useState(initialBookingInfo);


    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookingInfo };
        newInfo[field] = value;
        setBookingInfo(newInfo);
    }


    const onSubmit = e => {
        const orderConfirm = { ...bookingInfo }
        fetch('http://localhost:5000/orders', {
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
                        sx={{ width: '75%' }}
                        id="standard-basic"
                        name="productName"
                        defaultValue={name}
                        onBlur={handleOnBlur}
                        variant="standard" />
                    <TextField
                        sx={{ width: '75%' }}
                        id="standard-basic"
                        name="productDescription"
                        defaultValue={description}
                        onBlur={handleOnBlur}
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