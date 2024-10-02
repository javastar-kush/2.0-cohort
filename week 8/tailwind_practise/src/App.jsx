import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RevenueCard } from './components/RevenueCard'

function App() {
  return (
    <div className="grid grid-cols-4">
    <RevenueCard title={"Amount Paid"} orderCount={13} amount={"78,65,526"}></RevenueCard>
    </div>
  )
}

export default App
