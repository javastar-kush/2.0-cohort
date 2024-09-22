import { useState, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import {CountContext} from './context'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <CountContext.Provider value={count}>
      <Count setCount={setCount}></Count>
      </CountContext.Provider>
    </div>
  )
}

function Count({setCount}){
  const count = useContext(CountContext)
  return <div>
    <CountRenderer count={count}></CountRenderer>
    <Buttons count={count} setCount={setCount}></Buttons>
  </div>
}

function CountRenderer(){
  const count = useContext(CountContext)
  return <div>
    {count}
  </div>
}

function Buttons({setCount}){
  const count = useContext(CountContext)
  return <div>
    <button onClick={()=>
    setCount(count+1)
    }>Increase</button>

    <button onClick={()=>
    setCount(count-1)
    }>Decrease</button>
  </div>
}

export default App
