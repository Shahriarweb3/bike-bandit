import React from 'react';
import Navigation from '../../../Shared/Navigation/Navigation';

import Banner from '../Banner/Banner';
import MotorBikes from './MotorBikes/MotorBikes';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <MotorBikes></MotorBikes>

            <h2>This is Another section</h2>
        </div>
    );
};

export default Home;