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
    <div className='flex justify-center items-center  h-full text-lg text-black p-10 mt-40'>
      <div className='relative w-96 rounded-2xl'
      style={{backgroundImage:"url('/src/assets/depositphotos_275795040-stock-photo-texture-of-bark-wood-use.jpg')", boxShadow:"1px 1px 80px black"}}>

      <div className='bg-slate-700/50 rounded-2xl p-10'>
          <form className='font-serif text-lg text-white'>
            <ul>
              <li className='text-center'>
              <div className='m-5'>
                <input type="text" className='bg-yellow-900 p-2 w-full outline-none rounded-lg ' 
                placeholder='Name'
                style={{boxShadow:"-2px -2px 2px black,inset 1px 1px 2px black,2px 2px 2px black,inset -1px -1px 2px black  "}}
                value={name}
                onChange={(e)=>{setName(e.target.value)}}
                />
                </div>
                <div className='m-5'>
                <input type="text" className='bg-yellow-900 p-2 w-full outline-none  rounded-lg'
                style={{boxShadow:"-2px -2px 2px black,inset 1px 1px 2px black,2px 2px 2px black,inset -1px -1px 2px black  "}}
                placeholder='Username'
                value={username}
                onChange={(e)=>{setUsername(e.target.value)}}
                />
              </div>
                </li>
                <div className='m-5'>

              <li className='text-center w-full outline-none'>
                <input type="password" className='bg-yellow-900  p-2  outline-none w-full  rounded-lg ' 
                placeholder='Enter Password'
                style={{boxShadow:"-2px -2px 2px black,inset 1px 1px 2px black,2px 2px 2px black,inset -1px -1px 2px black  "}}
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}}
                />
                </li>
                </div>
                <div className='m-5'>

                <li className='text-center'>
                <input type="password" className='bg-yellow-900 p-2 outline-none w-full rounded-lg' 
                style={{boxShadow:"-2px -2px 2px black,inset 1px 1px 2px black,2px 2px 2px black,inset -1px -1px 2px black  "}}
                placeholder='Confirm Password'
                value={confirmPassword}
                onChange={(e)=>{setConfirmPassword(e.target.value)}}
                />
              </li>
                </div>
                <div className='m-5'>

              <li className='text-center'>
                <input type="email" className='bg-yellow-900 p-2 w-full outline-none rounded-lg'
                style={{boxShadow:"-2px -2px 2px black,inset 1px 1px 2px black,2px 2px 2px black,inset -1px -1px 2px black  "}} 
                placeholder='email'
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}
                />

                <button type="submit" onClick={createAccount} className='bg-yellow-950 p-1 hover:bg-yellow-950/80
                shadow-sm shadow-black active:inset-shadow-black active:inset-shadow-sm text-yellow-100 p-2 mt-5 mb-1 rounded-xl outline-none'>Create Account</button>
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
    </div>
  )
}

export default Register