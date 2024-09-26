import { useContext, useMemo, useState } from "react"
// import { CountContext } from "./context";
import { countAtom, evenSelector } from "./store/atoms/count"
import { RecoilRoot, useRecoilValue, useRecoilState, useSetRecoilState } from "recoil";


function App() {

  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  )
}

function Count() {
  console.log("Count")
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
    <IsEven></IsEven>
  </div>
}

function Buttons() {
  // const [count, setCount] = useRecoilState(countAtom);
  const setCount = useSetRecoilState(countAtom);
  console.log("hello");
  return <div>
    <button onClick={() => {
      setCount(count => count+1)
    }}>Increase</button>

    <button onClick={() => {
      setCount(count => count-1)
    }}>Decrease</button>
  </div>
}

function IsEven(){
  const count = useRecoilValue(evenSelector);
  return <div>
    {count % 2==0 ? "is even " : "is odd"}
  </div>
}

export default App
