import { useState } from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import About from './About'
import FAQ from './FAQ'
import Feedback from './Feedback'
import Home from './Home'
import './App.css'

function App() {
  const [open, setOpen] = useState(false)

  return (
    <>
    <h1>Welcome To ORD10/11!</h1>
    <BrowserRouter>
      <div className='actionGrid'>
      <Link className="button" to="/">Home</Link>  
      <Link className="button" to="/about">About</Link>
      <Link className="button" to="/faq">FAQ</Link>
      <Link className="button" to="/feedback">Feedback</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/faq" element={<FAQ />}></Route>
        <Route path="/feedback" element={<Feedback />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
