import React from 'react'
import Header from './P5ReactRouter/Header'
import Footer from './P5ReactRouter/Footer'
import { Outlet } from 'react-router-dom'

function P4Layout() {
  return (
    <>
    
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default P4Layout