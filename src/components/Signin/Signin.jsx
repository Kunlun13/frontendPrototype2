import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Signin() {
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
  
  async function Signin(){
    const req = {
      username,
      password,
    }
    try {
      const res = await fetch("http://localhost:13000/api/v1/users/signin", 
      {
        method:"POST",
        headers: {
        "Content-Type": "application/json",
        // "Access-Control-Allow-Origin": true,
      },
        body: JSON.stringify(req),
        credentials: 'include',
      })
      if(!res.ok)
      {
        console.log("Sorry some error occored during an api call")
        return
      }
      console.log(await res.json())
      navigate(`/${username}`)      
    } catch (error) {
      console.log("Sorry some error occored while an api call ", error)
    }
  }

  async function Login(event){
    event.preventDefault()
    if (username == "" ||
      password=="")
    return
      
    await Signin()

  }

  return (
    <div className='flex justify-center items-center bg-gray-950 h-full text-lg text-pink-300 p-10'>
      <div className='bg-gray-900 w-96 rounded-2xl'>
        <div className='flex justify-center m-10'>
        <img src="src/assets/react.svg" alt="Image" />
        </div>
          <form className='m-10'>
            <ul>
              <li className='text-center'>
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
                <button type="submit" onClick={Login} className='bg-pink-400 p-1 hover:bg-pink-500
                shadow-sm shadow-black active:inset-shadow-black active:inset-shadow-sm text-pink-800 mt-5 mb-1 rounded-xl'>Sign In</button>
                <div>{""}</div>
              </li>
                </div>
            </ul>
          </form>
      </div>
    </div>
  )
}

export default Signin