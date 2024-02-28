import React,{ useState} from 'react';
import './App.css';

const App=()=> {
  const[todos, setTodos]= useState([])
  const[userInput, setUserInput]= useState([""])
  const addData=()=>{
    setTodos([...todos, userInput])
    setUserInput('')

  }


  return<div>
    <h1> TodoList</h1>
    <input onChange ={(event)=> setUserInput(event.target.value)}type='text'></input>
    <button onClick={()=> addData()}>Add</button>
    <ul>
    {
      todos.map((todo,index)=> <li key={index}>{todo}</li>)
    }
  </ul>
  </div>
}
   export default App;








  //   <input type='text'></input>
  //   <button> Add</button>
  //   <ul>
  //     {
  //       todos.map((todo)=> <li> {todo}</li>)
  //     }
  //   </ul>
  // </div>