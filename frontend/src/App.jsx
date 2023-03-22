import { useState } from 'react'

import './App.css'
import { Home } from './Pages/Home'
import { Routes, Route } from 'react-router-dom'
import DisplayInfo from './Pages/DisplayInfo'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/displayinfo" element={<DisplayInfo />} />
      </Routes>
    </div>
  )
}

export default App
