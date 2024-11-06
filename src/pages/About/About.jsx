import React from 'react'
import Header from '../Main/components/Header/Header'
import Main from './components/Main/Main'
import Prices from './components/Prices/Prices'
import ClientsSection from './components/Clients/Clients'
import Capabilities from './components/Capabilities/Capabilities'
import Footer from '../Main/components/Footer/Footer'

const About = () => {
    return (
        <>
            <Header />
            <Main />
            <Prices />
            <ClientsSection />
            <Capabilities />
            <Footer />
        </>
    )
}

export default About