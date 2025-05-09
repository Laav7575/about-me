import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Travel from './pages/Travel'
import Projects from './pages/Projects'
import Home from './pages/Home'
import { Route, Routes } from 'react-router'
import Music from './pages/Music'

function App() {
  
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/music" element={<Music />} />
        </Routes>
      </div>
    </>
  )
}

export default App
