import { useEffect, useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [sum, setSum] = useState(0)
  const [counter, setCounter] = useState(0)

  let count = useMemo(()=>{
    let finalcount =0;
    for(let i=1;i<=sum;i++){
      finalcount+=i;
  }
  return finalcount
  }, [sum])

  return (
    <div>
      <input type="text" onChange={function(e){
        setSum(e.target.value)
      }} placeholder="enter the number"/>
      <h3> sum is {count}</h3>
      <button onClick={()=>{
      setCounter(counter+1)
    }}>counter {counter}</button>
    </div>
  )
}

export default App
