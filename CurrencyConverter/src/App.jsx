
import './App.css'
import useCourrencyInfo from './hooks/useCourrencyInfo'

function App() {
  let data = useCourrencyInfo("usd")

  return (
    <div className='bg-green-600'>
      <h1>
        Corency converte
        {data.inr}
      </h1>
    </div>
  )
}

export default App
