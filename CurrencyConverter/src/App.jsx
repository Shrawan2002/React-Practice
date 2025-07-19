
import './App.css'
import InputBox from './components/InputBox'
import useCourrencyInfo from './hooks/useCourrencyInfo'

function App() {
  let data = useCourrencyInfo("usd")

  return (
    <div className='w-full mb-1'>
      <InputBox label= "from" amount={200} />
       <InputBox label= "from" amount={200} />
    </div>
  )
}

export default App
