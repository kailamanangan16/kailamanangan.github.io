// cd Desktop\Personal\Portfolio\kailamanangan.github.io\kaila-portfolio-app
// npm i react-router-dom <- to add the routers on desktop!!

import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/home.jsx'
import About from './pages/about.jsx'
import Experience from './pages/experience.jsx'
import Projects from './pages/projects.jsx'

function App() {
  return (
    <Router> 
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/about" element = {<About/>}/>
        <Route path="/experience" element = {<Experience/>}/>
        <Route path="/projects" element = {<Projects/>}/>
      </Routes>
    </Router>
  )
}

export default App
