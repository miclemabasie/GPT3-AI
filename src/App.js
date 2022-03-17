import React from 'react'
import { Header, Blog, Possibility, Features, Footer, WhatGPT3 } from './containers'
import { Brand, CTA, Navbar } from './components'
import './App.css'

function App() {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar />
        <Header />
      </div>      
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App