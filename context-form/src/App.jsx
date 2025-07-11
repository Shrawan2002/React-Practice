
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './contexts/UserConTextProvider'

function App() {
  
  return (
    
       <div className='bg-[#f0f4f8] min-h-screen flex grid-cols-3  items-center justify-center'>
       <div className='w-full '>
         <UserContextProvider>
        <Login/>
        <Profile/>
       </UserContextProvider>
       </div>
       </div>
     
  )
}

export default App
