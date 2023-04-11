import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Menu from './Pages/Menu'
import About from './Pages/About'
import Contact from './Pages/Contact'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/Menu" exact element={<Menu/>}/>
        <Route path="/About" exact element={<About/>}/>
        <Route path="/Contact" exact element={<Contact/>}/>
      </Routes>
      <Footer />
      

      </Router>
    </div>
  )
}

export default App
