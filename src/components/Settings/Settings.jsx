import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

function Settings() {
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const [oldPass, setOldPass] = useState("")
    const [newPass, setNewPass] = useState("")
    const [passwordPanel, setPasswordPanel] = useState("none")
    const [displayLogout, setDisplayLogout] = useState("block")

    const getProfile = async ()=>{
        const req = {
            name: "haha",
          }
          try {
            const res = await fetch("http://localhost:13000/api/v1/users/profile",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(req),
                credentials: "include",
              })
    
            if (!res.ok) {
              return console.log("Oops!!")
            }
    
            const data = await res.json()
            setName(data.name)
            setEmail(data.email)
            // setLoading(false)
            // console.log(data)
          } catch (error) {
            console.log(error)
          }
    }

    getProfile()

    const changePassword = async () =>{
        if(oldPass == "" || newPass == "")
        return setErrorMessage("Password Cannot be Empty")
        setErrorMessage("")

        const req = {
          oldP: oldPass,
          newP: newPass,
        }
        console.log(oldPass)
        console.log(newPass)
        setOldPass("")
        setNewPass("")
        try {
          const res = await fetch("http://localhost:13000/api/v1/users/changePassword", {
            method: "POST",
            headers:{
              "Content-Type" : "application/json"
            },
            body: JSON.stringify(req),
            credentials: "include"
          })

          if(!res.ok)
          {
            if(res.status==401)
            return setErrorMessage("Wrong Password")

            return
          }

          console.log("Password changed Successfully")
          pasword()
        } catch (error) {
            // console.log(error)
        }
    }

    const pasword = () =>{
        if(passwordPanel=='none')
        {
          setPasswordPanel('block')
          setDisplayLogout('none')
        }
        else
        {
          setPasswordPanel('none')
          setDisplayLogout('block')
        }
    }

    return (
        <>
        <div className="relative flex justify-center items-center h-full overflow-y-auto flex-col bg-yellow-950/50">
        <div style={{display:`${displayLogout}`}}>

        <div className="text-cyan-500">
            
            <div>Name: {name}</div>
            <div>Email: {email}</div>
            
        </div>
        <div>
            <button className='p-3 bg-gradient-to-r 
            from-yellow-900 to-yellow-700 rounded-2xl
            shadow-md shadow-yellow-600 hover:from-yellow-700 active:shadow-yellow-500 hover:to-yellow-900 transition-all tran' onClick={pasword}> Change Password</button>
            <button className="bg-red-500 p-2 rounded-xl hover:bg-red-400 active:bg-red-600 m-5" onClick={async ()=>{
              try {
                const res = await fetch("http://localhost:13000/api/v1/users/logout",
                {
                  method: "GET",
                  headers: {
                    "Content-Type": "application/json"
                  },
                  credentials: "include",
                })
                
                    if (!res.ok) {
                      return console.log("Oops!!")
                    }
                    
                    const data = await res.text()
                    console.log(data)
                    // setLoading(false)
                    // console.log(data)
                  } catch (error) {
                    console.log(error)
                  }
                  navigate("../../")
                }}>Logout</button>
        </div>
        </div>
        <div className="absolute h-full w-full" style={{display:passwordPanel}}>
        <button className='text-yellow-700 rounded-2xl bg-yellow-950/50 p-2 hover:font-bold m-2' onClick={pasword}>Back</button>
        <div className="flex flex-col h-full items-center justify-center">
            <div className="m-2">

            <input className="border-2 border-yellow-600 rounded-lg shadow-xl bg-yellow-950/70 outline-none p-2" type="password" placeholder="Old Password" name="" onChange={(e)=>{
              setOldPass(e.target.value)
            }}  value={oldPass}/>
            </div>
            <div className="m-2">

            <input className="border-2 border-yellow-600 rounded-lg shadow-xl bg-yellow-950/70 outline-none p-2" type="password" onChange={(e)=>{
              setNewPass(e.target.value)
              // console.log(newPass)
            }} value={newPass} placeholder="New Password" name="" />
            </div>

            <div>
              <button type="submit" className="m-5 p-3 bg-gradient-to-r 
            from-green-700 to-green-500 rounded-2xl
            shadow-md shadow-green-300 hover:from-green-600 hover:to-green-600 text-white text-xl" onClick={()=>{
              changePassword()
            }}>Submit</button>
            </div>
            <div className="text-red-400 text-sm">{errorMessage}</div>
        </div>
        </div>
        </div>
        </>
    )
}

export default Settings