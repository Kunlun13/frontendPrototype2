import React, { useEffect, useState } from 'react'

 function Personaltasks() {

  const style1 = 'h-36 w-full sm:h-80 sm:w-60 rounded-3xl bg-gradient-to-b from-pink-800 to-purple-800  hover:from-pink-700  shadow-2xl shadow-black m-5 '

  const style2 = 'h-36 w-full sm:h-80 sm:w-60 rounded-3xl    shadow-sm shadow-black m-5 p-5 flex justify-center items-center text-6xl select-none hover:bg-gradient-to-b to-purple-950 '


  const [loading, setLoading] = useState(true)
  const [list, setList] = useState([])

  let jason = []

  useEffect(()=>{
    async function displayTodos(){
      const req = {
        name: "haha",
      }
  
      try {
        const res = await fetch("http://localhost:13000/api/v1/users/enlistGroup", 
        {
          method:"POST",
          headers: {
          "Content-Type": "application/json"
        },
          body: JSON.stringify(req),
          credentials: "include",
        })
        
        if(!res.ok)
        {
          return console.log("Oops!!")
        }
        
        const data = await res.json() 
        setList(data)
        setLoading(false)
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    };
    displayTodos()
  }, []);
  let arr = ["haha","ksjsks", "jaja", "ksks"]
  

  // function addNewTask() {
  //   alert("hshs");
  // }

  function updateTasks(groupId){
    setupdateTaskOpacity("flex");
    console.log(groupId)
  }
  const [updateTaskOpacity, setupdateTaskOpacity] = useState("none")

  if (loading)
  return "Loading"

  return (
    <div className='flex relative bg-gray-800 rounded-2xl h-full text-white border-10 border-gray-600  flex-wrap overflow-y-auto py-5' style={{WebkitScrollSnapType:'block'}}>

        {
          list.map((element)=>{
            return <div onClick={()=>{
              updateTasks(element._id)
            }} className={style1} style={{backgroundColor:`#03fcf010`}} >
            <div className='text-2xl text-center mt-20'>
              {element.name}
            </div>
            <div className='flex justify-center'>

            <div className='text-center mt-10 text-xs'>
              <div className='text-center text-purple-300' >Created At</div>
              <div className='text-gray-300'>{element.createdAt.substring(0, 10).split("-").reverse().join(".")}</div>
              <div className='text-center text-purple-300 mt-5' >About Group</div>
              <div className='text-center text-gray-300'>{element.aboutGroup}</div>
            </div>
            </div>
        </div>
          })
        }

        <div className={style2} style={{backgroundColor:`#03fcf010`}} >
            +
        </div>

        <div className='absolute p-5 w-full h-full bg-gray-800' style={{display:updateTaskOpacity}} >
          back

          <div className='flex justify-center items-center'>

              {
                  arr.map((element)=>{
                    return <div>
                      
                    </div>
                  })
              }
          </div>

        </div>
    </div>
  )
}

export default Personaltasks