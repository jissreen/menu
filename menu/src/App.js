import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
      </Routes>
      </Router>
    </div>
  )
}

export default App
