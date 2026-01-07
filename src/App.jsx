import { useState } from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import About from './About'
import FAQ from './FAQ'
import Feedback from './Feedback'
import './App.css'

function App() {
  const [view, setView] = useState("home")
  const [open, setOpen] = useState(false)

  return (
    <BrowserRouter>
      <Link to="/about">About</Link>
      <Link to="/faq">FAQ</Link>
      <Link to="/feedback">Feedback</Link>
      <Routes>
        <Route path="/about" element={<About />}></Route>
        <Route path="/faq" element={<FAQ />}></Route>
        <Route path="/feedback" element={<Feedback />}></Route>
      </Routes>
      
      <h1>Welcome To ORD10/11</h1>
      <button onClick={() => setView("about")}>About</button>
      {view === 'about' && <About/ >}
    </BrowserRouter>
  )
}

export default App
