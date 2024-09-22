import { useState,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(10000000000)

  const divref=useRef();

  setTimeout(() => {
    console.log(divref.current)
    divref.current.innerHTML = 2300000000000;
  },[5000] )

  return (
    <div>
      My bank balance is <div ref={divref}>{count}</div>
    </div>
  )
}

export default App
