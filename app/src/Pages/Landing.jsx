import React from 'react';
import HeroComponent from '../Components/HomePage/HeroComponent';
import Howitworks from '../Components/HomePage/HowitWorks';
import ProductCTA from '../Components/HomePage/ProductCTA';
import SmokingHero from '../Components/HomePage/SmokingHero';

const Landing = () => {
    return (
        <>
            <HeroComponent/>
            <Howitworks/>
            <ProductCTA/>
            <SmokingHero/>
        </>
    );
}

export default Landing;
