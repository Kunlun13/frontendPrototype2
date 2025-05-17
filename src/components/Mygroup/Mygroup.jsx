import React from 'react'
import { useState, useEffect } from 'react'

function Mygroup() {
  const style1 = 'h-36 w-full sm:h-80 sm:w-60 rounded-3xl bg-gradient-to-b from-pink-800 to-purple-800  hover:from-pink-700  shadow-2xl shadow-black m-5 flex flex-col'

  const style2 = 'h-36 w-full sm:h-80 sm:w-60 rounded-3xl    shadow-sm shadow-black m-5 p-5 flex justify-center items-center text-6xl select-none hover:bg-gradient-to-b to-purple-950 '


  // const [loading, setLoading] = useState(true)
  const [loadingTask, setLoadingTask] = useState(true)
  const [list, setList] = useState([])
  const [tasks, setTasks] = useState([])
  const [currentGroup, setCurrentGroup] = useState("")

  let jason = []

    async function displayTodos() {
      const req = {
        name: "haha",
      }

      try {
        const res = await fetch("http://localhost:13000/api/v1/groups/enlistGroup",
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
        setList(data)
        // setLoading(false)
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    };
    
  
  let arr = ["haha", "ksjsks", "jaja", "ksks"]

  async function checkPermission(group){
    const req = {
        group,
    } 

    if(!group)
    return
    
    try {
      const res = await fetch("http://localhost:13000/api/v1/groups/permission",
      {
        method:"POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
        credentials: "include"
      })

      if(!res.ok)
      {
        return console.log(res)
      }
      
      const data = await res.json()
      console.log(data)
      return data.permission
    } catch (error) {
      console.log("Some Error Occured")
    }
  }

  // function addNewTask() {
  //   alert("hshs");
  // }

  async function loadTasks(groupId)
  {

    try {
      const req = {
        group: groupId,
      }
      const res = await fetch("http://localhost:13000/api/v1/users/enlistTask",
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
      setTasks(data)
      setLoadingTask(false)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
    
  }
  
  async function displayTasks(groupId) {
    console.log(checkPermission(groupId))
    if (updateTaskOpacity == "none") {
      setupdateTaskOpacity("flex")
      settaskDisplay("none");
    }
    else {
      setupdateTaskOpacity("none")
      settaskDisplay("flex")
      return
    }
    setCurrentGroup(groupId)

    loadTasks(groupId)
    
  }



  const [updateTaskOpacity, setupdateTaskOpacity] = useState("none")
  const [updateGroupOpacity, setupdateGroupOpacity] = useState("none")
  const [taskDisplay, settaskDisplay] = useState("flex")
  const [name, setName] = useState("")
  const [newTaskName, setNewTaskName] = useState("")
  const [newTaskDetails, setNewTaskDetails] = useState("")

  const [groupName, setGroupName] = useState("")
  const [groupDetail, setGroupDetail] = useState("")

  async function showNewGroup(group, name, detail) {
      setCurrentGroup(group)
      setGroupName(name)
      setGroupDetail(detail)
    
    
    if (updateGroupOpacity == "none") {
      setupdateGroupOpacity("flex")
      settaskDisplay("none");
    }
    else {
      setupdateGroupOpacity("none")
      settaskDisplay("flex")
      return;
    }
    
  }

  async function addingNewTask(){
    if(newTaskName == "")
    return
    try {
      const req = {
        group: currentGroup,
        name: newTaskName,
        details: newTaskDetails,
      }
      const res = await fetch("http://localhost:13000/api/v1/users/addNewTask",
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

      // const data = await res.json()
      // setTasks(data)
      setLoadingTask(false)
      loadTasks(currentGroup)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
    setNewTaskName("")
    setNewTaskDetails("")
  }

  const [groupFloatingOpacity, setGroupFloatingOpacity] = useState("none")

  async function updateTask(element)
  {
    console.log(element)

    try {
      let a = true
      if(element.completed)
      a = false
      const req = {
        ...element, 
        task : element._id,
        completed: a,
      }
      const res = await fetch("http://localhost:13000/api/v1/users/updateTask",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(req),
          credentials: "include",
        })

      if (!res.ok) {
        return console.log(res)
      }

      const data = await res.json()
      console.log(data)
    } catch (error) {
      console.log(error)
    }
    loadTasks(element.group)
  }

  async function createNewGroup(group) {

    if(!group){

    const req = {
      name: groupName,
      aboutGroup: groupDetail,
    }
    try {
      const res = await fetch("http://localhost:13000/api/v1/groups/addNewGroup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify(req),
      })

      if (!res.ok) {
        console.log(res)
        return console.log("response is not Ok!!")
      }

      showNewGroup("", "", "")
      displayTodos()
      // setLoading(true)

    } catch (error) {
      console.log(error)
      console.log("Some Error occured while creating group!!")
    }
  }
  else{
    const req = {
      name: groupName,
      aboutGroup: groupDetail,
      group
    }
    setGroupName("")
    setGroupDetail("")
    try {
      const res = await fetch("http://localhost:13000/api/v1/users/editGroup", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify(req),
      })

      if (!res.ok) {
        console.log(res)
        return console.log("response is not Ok!!")
      }

      showNewGroup("", "", "")
      displayTodos()
      // setLoading(true)

    } catch (error) {
      console.log(error)
      console.log("Some Error occured while creating group!!")
    }
  }
  }

  // if (loading)
  //   return "Loading"
  useEffect(()=>{
    displayTodos()
  }, 
  [])


  return (
    <div className='flex relative w-full bg-gray-800 rounded-2xl h-full text-white border-10 border-gray-600  flex-wrap overflow-y-auto py-5' style={{ WebkitScrollSnapType: 'block' }}>

      <div className='flex relative h-full w-full overflow-y-auto flex-wrap' style={{ display: taskDisplay }}>

        {
          list.map((element) => {
            return <div onClick={() => {
              displayTasks(element._id)
            }} className={style1} style={{ backgroundColor: `#03fcf010` }}
             >
              
              <div className='text-xl text-center mt-10'>
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
              <div className='flex justify-around mt-auto  mt-30'>
                <div className='text-gray-950 hover:text-gray-400'
                onClick={(e)=>{
                  e.stopPropagation()
                  showNewGroup(element._id, element.name, element.aboutGroup)
                }}
                >Edit</div>
                <button className='text-gray-950 hover:text-red-400 shadow' 
                onClick={async (e)=>{
                  e.stopPropagation()

                  const req = {
                    group : element._id,
                  }

                  try {
                    const res = await fetch("http://localhost:13000/api/v1/users/removeGroup", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json"
                      },
                      credentials: "include",
                      body: JSON.stringify(req),
                    })
              
                    if (!res.ok) {
                      console.log(res)
                      return console.log("response is not Ok!!")
                    }
                    displayTodos()
                    // setLoading(true)
              
                  } catch (error) {
                    console.log(error)
                    console.log("Some Error occured while creating group!!")
                  }
                  
                }}
                >Delete</button>
              </div>
            </div>
          })
        }

        <div className={style2} style={{ backgroundColor: `#03fcf010` }} onClick={() => {
          showNewGroup("", "", "");
        }} >
          +
        </div>

      </div>
      <div className='absolute flex flex-col p-5 w-full h-full bg-gray-800'
        style={{ display: updateTaskOpacity }} >
        <div className='mb-10' onClick={
          () => { displayTasks() }
        }>
          Back
        </div>

        <div className='flex justify-center items-center'>
        <div className='w-full'>

          { 
          
          
            tasks.map(element => {
            return <div className='border-b-1 border-t-1 border-gray-700 m-1 p-2' 
            >
              <div className='flex justify-between'>
                <div>{element.name}</div>
                <div><input type="checkbox" name=""  id="" checked={element.completed} 
                onChange={
                  ()=>{
                    updateTask(element)}
                  }
                />
                <button className='bg-red-600 ml-5'
                style={{display:userAccess}}
                onClick={async function (){
                  try {
                    const req = {
                      task: element._id,
                      group: currentGroup,
                    }
                    const res = await fetch("http://localhost:13000/api/v1/groups/removeTask",
                      {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json"
                        },
                        body: JSON.stringify(req),
                        credentials: "include",
                      })
              
                    if (!res.ok) {
                      return console.log(res)
                    }
              
                    // const data = await res.json()
                    // setTasks(prev => prev.filter(task => task._id !== element._id))
                    loadTasks(currentGroup)
                    console.log(tasks)

                    // console.log(data)
                  } catch (error) {
                    console.log(error)
                  }

                }}>
                  Delete
                </button>
                </div>
              </div>
              <div>
               {element.details}
              </div>
            </div>  
            })
          }
          </div>
        </div>
          <div className='mt-10'><button type="button" className='bg-green-300' onClick={()=>{
            addingNewTask()
          }}>Add New Task</button>
          <div className='mt-5'>
            <input type="text" value={newTaskName} onChange = {(e)=>{
              setNewTaskName(e.target.value)
            }} placeholder='Task Name'/>

            <input type="text" placeholder='Task Details' value={newTaskDetails} onChange = {(e)=>{
              setNewTaskDetails(e.target.value)}}/>
          </div>
          </div>

      </div>

      <div className='absolute flex flex-col items-start p-5 w-full h-full bg-gray-800' style={{ display: updateGroupOpacity }} >
        <div className='w-full flex justify-start '>
          <button className='text-green-400 hover:text-green-300' onClick={() => {
            showNewGroup("", "", "")
          }}>Back</button>
        </div>

        <div className='flex justify-center items-center w-full self-center h-full'>

          <div>

            <div className='m-5'>
              <input value={groupName} className='text-green-300 border-2 border-green-700 outline-none p-2' type="text" placeholder='Task Group Name'
                onChange={(e) => {
                  setGroupName(e.target.value)
                }}
              />
            </div>
            <div className='m-5'>
              <textarea value={groupDetail} id="" className='text-green-300 border-2 border-green-700 p-2 outline-none w-64 h-30'
                onChange={(e) => {
                  setGroupDetail(e.target.value)
                }}
                placeholder='Task Group details'></textarea>
            </div>
            <div className='flex justify-center items-center'>

              <button className='p-3 bg-gradient-to-r 
            from-green-700 to-green-500 rounded-2xl
            shadow-md shadow-green-300 hover:from-green-600 hover:to-green-600' onClick={() => {
                  createNewGroup(currentGroup)
                }}>{currentGroup?"Update":"Create Group"}</button>
            </div>
          </div>
        </div>

      </div>

      

    </div>
  )
}

export default Mygroup