import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Home from './Home'

export default function Root() {
  return (
    <div>
        <Navbar></Navbar>
        {/* <Outlet></Outlet> */}
        <Home></Home>
        <Footer></Footer>
    </div>
  )
}
