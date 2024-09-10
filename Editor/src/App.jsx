import { useState } from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './Screens/Home'
import Playground from './Screens/Playground'
import Provider from './PlaygroundProvider/provider'
import Modal from './PlaygroundProvider/Modal';

function App() {
 

  return (
    <>
      <Provider>
       <Modal>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/playground" element={<Playground/>}/>
          </Routes>
        </BrowserRouter>
       </Modal>
      </Provider>
    </>
  )
}

export default App
