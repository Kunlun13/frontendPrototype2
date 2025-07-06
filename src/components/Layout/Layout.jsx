import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function Layout() {
  return (
    <>
    <div className='h-lvh overflow-y-auto '
    style={{backgroundImage:"url('/src/assets/pexels-freephotos-64779.jpg')", backgroundSize:"cover", backgroundPosition:"center"}}>

    <Header />
    <div>
    <Outlet />

    {/* <img className='h-full w-full absolute' src="/src/assets/pexels-freephotos-64779.jpg" alt="cup and coffee" srcset="" /> */}
    </div>
    <div className='bottom-0 fixed w-full'>

    <Footer />
    </div>
    </div>
    </>
  )
}

export default Layout