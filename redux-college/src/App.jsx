import './App.css'
import { store } from './app/Store'
import Todo from './components/Todo'
import {Provider} from "react-redux"
function App() {
  return (
    <div> 
      <Provider store={store}>
        <Todo/>
      </Provider>
    </div>
  )
}

export default App
