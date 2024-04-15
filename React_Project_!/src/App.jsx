import React from 'react'
import './App.css' //global css kahi bhi access kar sakte ho
import Navbar from './components/Navbar'
import Hero from './components/Hero'
export default function App() {
  return (
    <div>
      <Navbar />
      <Hero/>
    </div>
  )
}
