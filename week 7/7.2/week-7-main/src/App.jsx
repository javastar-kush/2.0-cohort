import { useContext, useMemo, useState } from "react"
import { CountContext } from "./context";
import { countAtom } from "./store/atoms/count"
import { useRecoilValue } from "recoil";


function App() {

  return (
    <div>
        <Count />
    </div>
  )
}

function Count() {
  return <div>
    <CountRenderer />
    <Buttons />
  </div>
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return <div>
    <b>
      {count}
    </b>
  </div>
}

function Buttons() {
  const count =0
  return <div>
    <button onClick={() => {
      setCount(count + 1)
    }}>Increase</button>

    <button onClick={() => {
      setCount(count - 1)
    }}>Decrease</button>
  </div>
}

export default App
