import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from "./component/Home"
import About from './component/About'
import Products from './component/Products'

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/products/:product' element={<Products/>}/>
      </Routes>
    </>
    
  )
}
