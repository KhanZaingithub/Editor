import { useState } from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './Screens/Home'
import Playground from './Screens/Playground'

function App() {
 

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/playground" element={<Playground/>}/>
        
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
