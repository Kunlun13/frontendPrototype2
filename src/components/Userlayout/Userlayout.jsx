import React from 'react'
import { Outlet, useParams } from 'react-router-dom'
import Sidemenu from '../Sidemenu/Sidemenu'

function Userlayout() {
    const { id } = useParams()
  return (
    <div className='h-full flex flex-col'>
        <div className='bg-gray-900 p-1 pl-10'>
            <img src="../src\assets\react.svg" alt="Img not found"  />
        </div>
    <div className='flex p-1 border-8 border-gray-700 h-full w-full bg-gray-950'>
        <div>
        <Sidemenu/>
        </div>
    <div className='w-full'>
    <Outlet/>
    </div>
    </div>
    </div>
  )
}

export default Userlayout