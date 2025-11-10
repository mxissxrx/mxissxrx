import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/NavBar/Navbar'
import Logo from './Components/Logo/Logo'

// Pages
import Home from './Components/Pages/Home'
import Pinterest from './Components/Pages/Pinterest/Pinterest'
import Amazon from './Components/Pages/Amazon/Amazon'
import Dhgate from './Components/Pages/Dhgate/Dhgate'

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const links = [
    { name: "HOME", path: "/" },
    { name: "PINTEREST POSTS", path: "/pinterest" },
    { name: "AMAZON FINDS", path: "/amazon" },
    { name: "DHGATE FINDS", path: "/dhgate" },
  ]

  const handleLinkClick = (path) => {
    setIsMenuOpen(false)
    setTimeout(() => {
      window.location.href = path
    }, 250) // slightly longer delay to match slower animation
  }

  return (
    <Router>
      <div className="relative w-full min-h-screen">
        {/* Header Section */}
        <div className="relative z-50">
          <Logo />
          <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </div>

        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pinterest" element={<Pinterest />} />
          <Route path="/amazon" element={<Amazon />} />
          <Route path="/dhgate" element={<Dhgate />} />
        </Routes>

        {/* Mobile Menu */}
        <div
          className={`fixed bottom-0 left-0 w-full bg-[#FBEAF2] z-40 transform transition-transform duration-500 ease-in-out
            ${isMenuOpen ? "translate-y-0" : "translate-y-full"} rounded-t-3xl top-28 lg:top-auto`}
        >
          <ul className="flex flex-col items-center gap-6 py-8 text-lg">
            {links.map((link) => (
              <li
                key={link.name}
                className="w-full text-center p-4 hover:bg-white cursor-pointer transition-all"
              >
                <button
                  onClick={() => handleLinkClick(link.path)}
                  className="font-bold uppercase tracking-[2.6px]"
                  style={{ fontFamily: 'HelveticaNeueLight' }}
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Router>
  )
}

export default App



