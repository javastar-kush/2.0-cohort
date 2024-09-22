import { useState } from 'react'
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])

useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/todos')
  .then(async function(res){
    const json = await res.json();
    setTodos(json);
  })
},[])

  return (
    <div>
      {todos.map(todo => <Havetodo key={todo.id} completed={todo.completed==true ? "true":"false" } description={todo.id} title={todo.title}></Havetodo>)}
    </div>
  )
}

function Havetodo({title, description, completed}){
  return <div style={{
    border : "3px solid red",
    margin : 10,
    padding : 20
  }}>
    <h4>Id no : {description}</h4>
    <h2>Title : {title}</h2>
    <h3>Status : {completed}</h3>
  </div>
}

export default App
