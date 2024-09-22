import {BrowserRouter, Route, Routes, useNavigate} from 'react-router-dom'
import './App.css'
import { lazy } from 'react'
const Dashboard = lazy(() => import('./components/dashboard'))
const Landing = lazy(() => import('./components/landing'))

function App() {
  return (
    <div>
      <BrowserRouter>
      <Appbar></Appbar>
        <Routes>
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/" element={<Landing></Landing>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function Appbar(){
    const navigate = useNavigate();
  return <div>
        <button onClick={()=>{
          navigate("/")
        }}>Landing</button>
        <button onClick={()=>{
          navigate("/dashboard")
        }}>Dashboard</button>
  </div>
}

export default App
