import React from 'react'
import Cart from './Cart'
import NavigationBar from './NavigationBar'
import Home from './Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className='main'>
    <BrowserRouter>
      <NavigationBar /> 
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/cart" element={<Cart />}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App