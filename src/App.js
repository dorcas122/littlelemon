import React from 'react'
import Nav from './component/nav/Nav'
import './App.css'
import Header from './component/header/Header'
import Menu from './component/menu/Menu'
import Footer from './component/footer/Footer'
import Testimonial from './component/testimonial/Testimonial'
import About from './component/about/About'
// import ReserveForm from './reserve/ReserveForm'
const App = () => {
  return (
    <>
     <Nav/>
     <Header/>
     {/* <ReserveForm/> */}
     <Menu/>
     <Testimonial/>
     <About/>
     <Footer/>
    </>
  )
}

export default App