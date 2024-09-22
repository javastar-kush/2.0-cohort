import { useState } from 'react'
import React, { memo } from "react"

 let counter =4
function App() {
  const [todos, setTodos] = useState([{
    id : 1,
    title : "gym 7.30 to 9",
    description : "have to go the gym"
  },{
    id : 2,
    title : "Full stack",
    description : "Learn about hooks in react"
  },{
    id : 3,
    title : "Mathematics",
    description : "Solve dpp of trigo"
  }])

  function updateTodo() {
    setTodos([...todos, {
      id : counter++,
      title : "Puja",
      description : "Mausi's Baby shower"
    }])
  }

  return(
    <div>
      <button onClick={updateTodo}>ADD TODO</button>
      {todos.map(todo => <InputTodo key={todo.id} title={todo.title} description={todo.description}></InputTodo>)}
    </div>
  )
}

function InputTodo({title, description}){
  return <div>
    <h2>{title}</h2>
    <h4>{description}</h4>
  </div>
}

export default App
