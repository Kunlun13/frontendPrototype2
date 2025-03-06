import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function Layout() {
  return (
    <>
    <div className='h-lvh '>

    <Header />
    <Outlet />
    <Footer />
    </div>
    </>
  )
}

export default Layout