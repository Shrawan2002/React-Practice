import Lottery from './Lottery'
import './App.css'
import Counter from './Counter'
import Laudo from './Laudo'
import Todo from './Todo'
import { sum } from './helper'
import Form from './Form'
import Joker from './Joker'
function App() {

  let winCondition = (ticket)=>{
    return sum(ticket) == 15;
  }
  return (
    <>
    <Counter/>
    <Laudo/>
    <Todo/>
    <Lottery n ={3} winCondition={winCondition}/>
    <br/>
    <Form/>
    <br/>
    <Joker/>

    </>
  )
}

export default App
