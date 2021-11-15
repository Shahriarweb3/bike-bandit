import { Divider } from '@mui/material';
import React from 'react';
import Banner from '../Banner/Banner';
import App from '../Volgs/YoutubeEmbed';
import MotorBikes from './MotorBikes/MotorBikes';
import Rating from './Rating/Rating';

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <Divider></Divider>
            <MotorBikes></MotorBikes>
            <Divider sx={{ p: 5 }}></Divider>
            <Rating></Rating>
            <Divider sx={{ p: 4 }}></Divider>
            <App></App>
            <Divider sx={{ p: 4 }}></Divider>
        </div>
    );
};

export default Home;