import React from 'react'
import { Outlet, useParams } from 'react-router-dom'
import Sidemenu from '../Sidemenu/Sidemenu'

function Userlayout() {
    const { id } = useParams()
  return (
    <div className='h-full flex flex-col'>
        <div className='text-white bg-yellow-950/50 p-1 pl-4'>
            {/* <img 
            src="../src/assets/pngimg.com - mug_coffee_PNG16824.png" className='h-10 inline mx-2' alt="Image not found" /> */}
          Do it with Leisure......

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