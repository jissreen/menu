import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
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
      <Footer />
      

      </Router>
    </div>
  )
}

export default App
