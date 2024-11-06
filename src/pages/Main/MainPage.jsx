import React from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import "./MainPage.scss"
import Table from './components/Table/Table'
import TestimonialSection from './components/TestimonialSection/TestimonialSection'
import Footer from './components/Footer/Footer'

const MainPage = () => {
  return (
    <div className='div'>
      <Header />
      <Main />
      <Table />
      <TestimonialSection />
      <Footer />
    </div>


  )
}

export default MainPage