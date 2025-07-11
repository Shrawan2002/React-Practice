import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import College from './College'
import { SubjectContext } from './ContextApi'

function App() {
  const [subject, setSubject] = useState("")

  return (
    <div className='bg-blue-600 w-full p-8'>
    <SubjectContext.Provider value= {{subject}}>
         <select  value={subject} onChange={(e)=>setSubject(e.target.value)} className='mb-10'>
        <option value="">select option</option>
         <option value="Math">Math</option>
          <option value="Physics">Physics</option>
           <option value="Chemistry">Chemistry</option>
            <option value="English">English</option>
      </select>
      <h1 >Context Api</h1>
      <College/>
      <button className='bg-red-600 mt-10 h-10 w-100  p-10' onClick={()=>setSubject("")}>Clear subject</button>
    </SubjectContext.Provider>
    </div>
  )
}

export default App
