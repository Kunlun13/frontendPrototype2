import React from 'react'
import { Route, createRoutesFromElements } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

function Sidemenu() {

  return (
    <div className='h-full w-2xs bg-gray-900 m-1 rounded-lg flex flex-col items-center'>
        <div className='m-20'>
            <img src="../src/assets/react.svg" alt="Image not found" />
        </div>
        <div className='w-full flex flex-col items-center gap-5'>

        <div className='m-1 mt-20 hover:bg-pink-700 w-full transition-all duration-200 rounded-3xl text-pink-300'>
            <NavLink className={({isActive})=>{
                if(isActive==true)
                return "bg-gradient-to-r from-pink-800 from-60%  to-pink-500 to-90% w-full  text-pink-300 cursor-default block text-center p-5 text-2xl rounded-3xl"
            else
            return "bg-gray-950 hover:bg-pink-800 w-full transition-all duration-200 text-pink-300 cursor-default block text-center p-5 text-2xl rounded-xl"
    }} to='personal_tasks'>
                Personal Tasks
            </NavLink>
            </div>
        <div className='m-1 w-full'>
        <NavLink className={({isActive})=>{
            if(isActive==true)
            return "bg-gradient-to-r from-pink-800 from-60%  to-pink-500 to-90% w-full  text-pink-300 cursor-default block text-center p-5 text-2xl rounded-3xl"
        else
        return "bg-gray-950 hover:bg-pink-800 w-full transition-all duration-200 text-pink-300 cursor-default block text-center p-5 text-2xl rounded-xl"
}} to='groups'>
        My Groups
        </NavLink>
        </div>
        <div className='w-full'>
        <NavLink className={({isActive})=>{
            if(isActive==true)
            return "bg-gradient-to-r from-pink-800 from-60%  to-pink-500 to-90% w-full  text-pink-300 cursor-default block text-center p-5 text-2xl rounded-3xl"
        else
        return "bg-gray-950 hover:bg-pink-800 w-full transition-all duration-200 text-pink-300 cursor-default block text-center p-5 text-2xl rounded-xl"
}} to='settings'>
        Settings
        </NavLink>
        </div>
    </div>
    <div className='m-1 w-full'>
            <button className=" hover:text-pink-700
          transition-all duration-200 text-gray-400 cursor-default text-center p-5 text-md rounded-3xl active:text-pink-800">
            Join Group
            </button>
        </div>
    </div>
  )
}

export default Sidemenu