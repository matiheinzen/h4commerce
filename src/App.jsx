import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './components/Cart'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Welcome from './components/Welcome'

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route  exact path='/' element={<Welcome/>}/>
        <Route  exact path='/catalogue' element={<ItemListContainer/>}/>
        <Route exact path='/category/:category' element={<ItemListContainer/>}/>
        <Route exact path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route exact path='/cart' element={<Cart/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
};

export default App