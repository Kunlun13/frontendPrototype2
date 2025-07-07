import React from 'react'
import { Outlet, useParams } from 'react-router-dom'
import Sidemenu from '../Sidemenu/Sidemenu'

function Userlayout() {
    const { id } = useParams()
  return (
    <div className='h-full flex flex-col'>
        <div className='text-white p-1 pl-4'>
          Cozify
            {/* <img src="../src\assets\react.svg" alt="Img not found"  /> */}
        </div>
    <div className='flex p-1 border-8 border-yellow-950 h-full w-full bg-gray-950'>
        <div>
        <Sidemenu/>
        </div>
    <div className='w-full' style={{backgroundImage:"url('/src/assets/pexels-freephotos-64779.jpg')", backgroundSize:"cover", backgroundPosition:"center"}}>
    <Outlet/>
    </div>
    </div>
    </div>
  )
}

export default Userlayout