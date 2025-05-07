import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Travel from './pages/Travel'
import Projects from './pages/Projects'
import Home from './pages/Home'
import { CatchingPokemon } from '@mui/icons-material'
import { Route, Routes } from 'react-router'

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/Projects" element={<Projects />} />
        </Routes>
      </div>
    </>
  )
}

export default App
