import React from 'react'
import { Route, createRoutesFromElements } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

function Sidemenu() {

  return (
    <div className='h-full w-2xs bg-gray-900 m-1 rounded-lg flex flex-col items-center' style={{backgroundImage:"url('/src/assets/depositphotos_275795040-stock-photo-texture-of-bark-wood-use.jpg')"}}>
        <div className='bg-slate-700/50 rounded-2xl h-full w-full flex flex-col justify-center items-center'>
        <div className=''>

            <div>
            <img src="../src/assets/pngimg.com - mug_coffee_PNG16824.png" className='h-15' alt="Image not found" />
            </div>

            <div className='text-white font-serif text-3xl text-center'>
        Cozify
            </div>
        </div>
        <div className='w-full flex flex-col items-center gap-5'>

        <div className='m-1 mt-20  w-full transition-all duration-200 rounded-3xl'>
            <NavLink className={({isActive})=>{
                if(isActive==true)
                return "bg-gradient-to-r font-serif from-yellow-950/70 from-60%  to-red-800/50 to-90% w-full  text-yellow-100 cursor-default block text-center p-5 text-2xl rounded-3xl"
            else
            return " hover:bg-yellow-950/70 font-serif w-full transition-all duration-200 cursor-default block text-center p-5 text-3xl rounded-xl text-white bg-yellow-950/50"
    }} to='personal_tasks'>
                Personal Tasks
            </NavLink>
            </div>
        <div className='m-1 w-full'>
        <NavLink className={({isActive})=>{
            if(isActive==true)
            return "bg-gradient-to-r font-serif from-yellow-950/70 from-60%  to-red-800/50 to-90% w-full  text-yellow-100 cursor-default block text-center p-5 text-2xl rounded-3xl"
        else
        return " hover:bg-yellow-950/70 font-serif w-full transition-all duration-200  cursor-default block text-center p-5 text-3xl text-white bg-yellow-950/50 rounded-xl"
}} to='groups'>
        Group Tasks
        </NavLink>
        </div>
        <div className='w-full'>
        <NavLink className={({isActive})=>{
            if(isActive==true)
            return "bg-gradient-to-r font-serif from-yellow-950/70 from-60%  to-red-800/50 to-90% w-full  text-yellow-100 cursor-default block text-center p-5 text-2xl rounded-2xl"
        else
        return " font-serif hover:bg-yellow-950/70 w-full transition-all duration-200  cursor-default block text-center p-5 text-3xl text-white bg-yellow-950/50 rounded-xl"
}} to='settings'>
        Settings
        </NavLink>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Sidemenu