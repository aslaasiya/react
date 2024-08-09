import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import Signup2 from './components/Signup2'
import { Route, Routes } from 'react-router-dom'
import Statebase from './components/Statebase'
import Welcome from './components/Welcome'
import Api from './components/Api'

function App() {
  const [count, setCount] = useState(0)

  return (<>


    
   
    <Navbar />
    <Routes>
      
      <Route path="/signup" element={<Signup2 />} />
      <Route path="/login" element={<Login />} />
      <Route path="/halo mann" element={< Statebase />} />
      <Route path="/ADI" element={< Welcome />} />
      <Route path="/ASHRAF" element={< Api />} />
      

    </Routes>
   
    </>

      )
}

export default App
