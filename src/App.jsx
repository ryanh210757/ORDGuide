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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-md mx-auto px-4 py-6 text-center">
          <h1 className="text-2xl font-bold text-gray-900">🏢 Welcome To ORD10/11!</h1>
        </div>
      </div>

      <BrowserRouter>
        {/* Navigation */}
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="grid grid-cols-2 gap-3 mb-6">
            <Link 
              className="bg-white text-gray-900 font-semibold py-4 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 text-center hover:bg-gray-50" 
              to="/"
            >
              🏠 Home
            </Link>  
            <Link 
              className="bg-white text-gray-900 font-semibold py-4 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 text-center hover:bg-gray-50" 
              to="/about"
            >
              ℹ️ About
            </Link>
            <Link 
              className="bg-white text-gray-900 font-semibold py-4 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 text-center hover:bg-gray-50" 
              to="/faq"
            >
              ❓ FAQ
            </Link>
            <Link 
              className="bg-white text-gray-900 font-semibold py-4 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 text-center hover:bg-gray-50" 
              to="/feedback"
            >
              💬 Feedback
            </Link>
          </div>

          {/* Page Content */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/faq" element={<FAQ />}></Route>
              <Route path="/feedback" element={<Feedback />}></Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
