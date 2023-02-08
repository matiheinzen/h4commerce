import React from 'react'
import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
      <Navbar/>
      <ItemListContainer greeting="Bienvenidos a su libreria virtual"/>
    </>
  )
}

export default App