import React from 'react'
import Header from './Companents/Header/Header'
import Skills from './Companents/Skills/Skills'
import Projects from './Companents/Projects/Projects'
import Contact from './Companents/Contact/Contact'
import Footer from './Companents/Footer/Footer'
import Home from './Companents/Home/Home'

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <Skills />
      {/* <Experience /> */}
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App