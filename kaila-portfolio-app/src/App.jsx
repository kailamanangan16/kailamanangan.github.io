// cd Desktop\Personal\Portfolio\kailamanangan.github.io\kaila-portfolio-app
// cd kailamanangan.github.io/kaila-portfolio-app

import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/home.jsx'
import About from './pages/about.jsx'
import Experience from './pages/experience.jsx'
import Projects from './pages/Projects.jsx'

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
