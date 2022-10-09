import React from 'react'
import HeroComponent from '../Components/HomePage/HeroComponent'
import Howitworks from '../Components/HomePage/HowitWorks'
import ProductCTA from '../Components/HomePage/ProductCTA'
import SmokingHero from '../Components/HomePage/SmokingHero'
import { Helmet } from 'react-helmet'

const Landing = () => {
    return (
        <>
            <Helmet htmlAttributes>
                <html lang="en" />
                <title>Home - Portfolio Shop: We build for you</title>
                <meta name="description" content="Portfolio Shop is a fast growing open source portfolio management system with several templates to help people build portfolios at a go." />
            </Helmet>
            <HeroComponent />
            <Howitworks />
            <ProductCTA />
            <SmokingHero />
        </>
    )
}

export default Landing
