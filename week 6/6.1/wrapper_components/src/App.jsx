import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <CardWrapper> HELLO THERE</CardWrapper>
    </div>
  )
}

function CardWrapper({children}){
  console.log(children)
  return <div style={{
    border : "5px solid black"
  }}>{children}</div>
}

export default App
