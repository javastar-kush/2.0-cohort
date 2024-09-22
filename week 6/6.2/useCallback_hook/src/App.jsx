import { memo,useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function a(){
    console.log("hi there")
  }

  return (
   <div>
    <button onClick={()=>{setCount(count+1)}}> counter {count}</button>
    <Demo a={a}></Demo>
   </div>
  )
}

const Demo = memo(function({a}){
  console.log("re render")
  return
   <div>
    <h1>hello {a}</h1>
  </div>
})
export default App
