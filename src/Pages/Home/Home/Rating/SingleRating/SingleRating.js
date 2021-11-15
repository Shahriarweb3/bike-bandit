import React from 'react';
import { CardMedia, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
const SingleRating = (props) => {
    const { reviewerName, ratingText, userImg } = props.rating;
    return (
        <Grid item xs={3} sm={6} md={3} >

            <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>

                <CardMedia
                    component="img"
                    style={{ width: '30%', height: '30%', margin: '0 auto', borderRadius: '100px' }}

                    image={userImg}
                    alt="reviewer image"
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        {reviewerName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Review:{ratingText}
                    </Typography>
                </CardContent>

            </Card>
        </Grid>
    );
};

export default SingleRating;