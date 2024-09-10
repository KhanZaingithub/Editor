import { useState } from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './Screens/Home'
import Playground from './Screens/Playground'
import Provider from './PlaygroundProvider/provider'
import ModalProvider from './playgroundprovider/ModalProvider'
import CurrentModal from './playgroundprovider/Modals/Modal'

function App() {
 

  return (
    <>
      <Provider>
       <ModalProvider>
       <CurrentModal/>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/playground" element={<Playground/>}/>
          </Routes>
        </BrowserRouter>
       </ModalProvider>
      </Provider>
    </>
  )
}

export default App
