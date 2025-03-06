import React, { useEffect, useRef, useState } from 'react'
import { Navigate, redirect, useNavigate } from 'react-router-dom'

function Register() {

  const [name, setName] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [passwordError, setPasswordError] = useState(false)
  const navigate = useNavigate()

  // const ref = useRef(null)
  // const passError = ref.current
  // console.log(passError)

  // useEffect(function error (){

  //   if(passwordError)
  //   return "hidden"
  //   return ""
  // }, [passwordError])
  
  async function createUser(){
    const req = {
      name,
      username,
      password,
      email: email?email:""
    }
    try {
      const res = await fetch("https://taskorganizer-nb9b.onrender.com/api/v1/users/signup", 
      {
        method:"POST",
        headers: {
        "Content-Type": "application/json"
      },
        body: JSON.stringify(req)
      })
      if(!res.ok)
      {
        console.log("Sorry some error occored during an api call")
      }
      console.log("User Acount Created!!!")
      navigate("/Signin")
      
    } catch (error) {
      console.log("Sorry some error occored while an api call ", error)
    }
  }

  async function createAccount(event){
    event.preventDefault()
    if (password!=confirmPassword|| 
      name=="" ||
      username == "" ||
      password=="" ||
      (email!="" && !/\S+@\S+\.\S+/.test(email)))
    return
      
    await createUser()

  }

  return (
    <div className='flex justify-center items-center bg-gray-950 h-full text-lg text-pink-300 p-10'>
      <div className='bg-gray-900 w-96 rounded-2xl'>
          <form className='m-10'>
            <ul>
              <li className='text-center'>
              <div className='m-5'>
                <input type="text" className='bg-gray-800 p-1 w-full outline-none rounded-lg' 
                placeholder='Name'
                value={name}
                onChange={(e)=>{setName(e.target.value)}}
                />
                </div>
                <div className='m-5'>
                <input type="text" className='bg-gray-800 p-1 w-full outline-none  rounded-lg' 
                placeholder='Username'
                value={username}
                onChange={(e)=>{setUsername(e.target.value)}}
                />
              </div>
                </li>
                <div className='m-5'>

              <li className='text-center w-full outline-none'>
                <input type="password" className='bg-gray-800 p-1  outline-none w-full  rounded-lg' 
                placeholder='Enter Password'
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}}
                />
                </li>
                </div>
                <div className='m-5'>

                <li className='text-center'>
                <input type="password" className='bg-gray-800 p-1 outline-none w-full rounded-lg' 
                placeholder='Confirm Password'
                value={confirmPassword}
                onChange={(e)=>{setConfirmPassword(e.target.value)}}
                />
              </li>
                </div>
                <div className='m-5'>

              <li className='text-center'>
                <input type="email" className='bg-gray-800 p-1 w-full outline-none rounded-lg' 
                placeholder='email'
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}
                />

                <button type="submit" onClick={createAccount} className='bg-pink-400 p-1 hover:bg-pink-500
                shadow-sm shadow-black active:inset-shadow-black active:inset-shadow-sm text-pink-800 mt-5 mb-1 rounded-xl'>Create Account</button>
                {password!=confirmPassword && 
                <p className="text-red-400 text-sm">
                  Passwords should match
                  </p>
                }
                <div>{""}</div>
              </li>
                </div>
            </ul>
          </form>
      </div>
    </div>
  )
}

export default Register