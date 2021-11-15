import { TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../../hooks/useAuth';


const Review = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {

        fetch('https://fierce-garden-19030.herokuapp.com/rating', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Review Added Successfully');
                }
            })
    }
    return (
        <div>
            <h2>Give Your Review</h2>
            <form style={{ backgroundColor: 'white', marginLeft: '35%', marginRight: '35%', border: '1px solid gray', borderRadius: '10px', }} className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
                <Box style={{ padding: '30px' }}>
                    <TextField
                        sx={{ width: '100%', mb: 4 }}
                        id="standard-basic"
                        value={user.displayName}
                        {...register("reviewerName")}
                        label="Your Email"
                        variant="standard" />
                    <TextField
                        id="outlined-multiline-static"
                        label="Text here"
                        {...register("ratingText")}
                        multiline
                        rows={4}
                    />
                    <TextField
                        sx={{ width: '100%' }}
                        id="standard-basic"
                        {...register("userImg")}
                        defaultValue="https://i.ibb.co/0hF4Mn4/review.png"
                        variant="standard" />
                    <input value="Submit Reiew" style={{ width: '80%' }} type="submit" />
                </Box>

                {/* <input style={{ width: '250px' }} defaultValue={user.displayName} {...register("reviewerName")} />
                <textarea style={{ width: '250px', marginTop: '30px', marginLeft: '-10px' }} defaultValue="" placeholder="Rating Text" {...register("ratingText")} />
                <input style={{ width: '250px' }} placeholder="Image url" defaultValue="https://i.ibb.co/0hF4Mn4/review.png" {...register("userImg")} /> */}

            </form>
        </div>
    );
};

export default Review;