import { useState } from 'react'
import ItemListconteiner from './components/ItemListConteiner/ItemListConteiner'
import NavBar from './components/NavBar/NavBar'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
<>
    <NavBar />
    <ItemListconteiner saludo={'saludo'}/>
  </>
  )
}

export default App
