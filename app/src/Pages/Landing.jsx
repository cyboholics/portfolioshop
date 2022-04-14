import React from 'react';
import HeroComponent from '../Components/HomePage/HeroComponent';
import Howitworks from '../Components/HomePage/HowitWorks';
import ProductCTA from '../Components/HomePage/ProductCTA';

const Landing = () => {
    return (
        <>
            <HeroComponent/>
            <Howitworks/>
            <ProductCTA/>
        </>
    );
}

export default Landing;
