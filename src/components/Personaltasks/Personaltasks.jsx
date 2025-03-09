import React from 'react'

function Personaltasks() {
  return (
    <div className='flex bg-gray-800 rounded-2xl h-full text-white border-10 border-gray-600  flex-wrap overflow-y-auto py-5' style={{WebkitScrollSnapType:'block'}}>
        
        <div className='h-36 w-full sm:h-80 sm:w-60 rounded-3xl bg-gradient-to-b from-pink-800 to-purple-800  hover:from-pink-700  shadow-2xl shadow-black m-5 p-5'>
            Task 1
        </div>
        <div className='h-36 w-full sm:h-80 sm:w-60 rounded-3xl bg-gradient-to-b from-pink-800 to-purple-800  hover:from-pink-700  shadow-2xl shadow-black m-5 p-5'>
            Task 2
        </div>
        <div className='h-36 w-full sm:h-80 sm:w-60 rounded-3xl bg-gradient-to-b from-pink-800 to-purple-800  hover:from-pink-700  shadow-2xl shadow-black m-5 p-5'>
            Task 3
        </div>
        
    </div>
  )
}

export default Personaltasks