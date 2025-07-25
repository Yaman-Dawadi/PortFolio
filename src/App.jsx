import Navbar from './Components/Navbar/Navbar'
import './App.css'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import Project from './Components/Projects/Project'
import Contact from './Components/Contact/Contact'

function App() {

  return (
    <>
      <div className='bg-[#050414] text-white'>
        <div className="realative pt-20">
          <Navbar />
          <About />
          <Skills />
          <Project />
          <Contact />
        </div>
        </div>
    </>
  )
}

export default App