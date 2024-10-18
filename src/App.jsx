import { useState } from 'react'
import { Main } from './components/Main/header.jsx'
import { About } from './components/About/about.jsx'
import { Service } from './components/Service/service.jsx'
import { Projects } from './components/Projects/project.jsx'

function App() {

  return (
    <>
    <Main />
    <About />
    <Service />
    <Projects />
    </>
  )
}

export default App
