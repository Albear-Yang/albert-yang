import Header from './components/Header'
import Line1 from './components/Line1'
import TitleNav from './components/NavbarTitle'
import FeaturedPost from './components/FeaturedPost'
import ProScroldiv from './components/ProjectScrollWheel'
import Mainpage from './components/Mainpage'

import './App.css'
import {HashRouter as Router, Routes, Route} from 'react-router-dom'

import Home from './Pages/Home'
import About from './Pages/About'
import Project from './Pages/Project'

function App(){
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/projects" element={<Project/>}/>
        </Routes>
      </Router>
    )
    


}

export default App;