import { useState } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numbAllowed,setNumbAllowed] = useState(false)
  const [charAllowed,setCharAllowed] = useState(false) 
  const [password,setPassword] = useState("");

  



  return (
    <>
    <div className='flex justify-center items-center min-h-screen  bg-black-800'>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-6 pb-8 font-medium text-orange-700'>
        <h1>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-2'>
        <input type="text" 
        className='outline-none w-full px-3 '
        placeholder='enter text'
         
        />
        <button className='px-2 bg-blue-500 text-white py-1'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2 '>
          <div className=' flex  items-center gap-x-2 justify-center'>
            <input type="range" 
            min={6}
            max={100}
            value={length}
            className='cursor-pointer '
            onChange={(e)=>setLength(e.target.value)}
            />
            <label>length : {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" 
             defaultChecked = {numbAllowed}
             onChange={()=>setNumbAllowed((prev) => !prev)}
            />
            <label>Number</label>
          </div>
          <div className='flex items-center gap-x-2'>
            <input type="checkbox" 
             defaultChecked = {charAllowed}
             onChange={()=>setCharAllowed((prev)=> !prev)}
            />
            <label>Character</label>
          </div>

        </div>
      </div>

    </div>
    </>
  )
}

export default App
