import { useState } from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './Screens/Home'
import Playground from './Screens/Playground'
import Provider from "./PlaygroundProvider/provider";

function App() {
 

  return (
    <>
      <Provider>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/playground" element={<Playground/>}/>
          
        </Routes>
        </BrowserRouter>
      </Provider>
      
    </>
  )
}

export default App
