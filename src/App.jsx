

import {ReactLenis} from "lenis/react"

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About"
import Projects from "./components/Projects"
import Coffee from "./components/Coffee"
import Contact from "./components/Contact";

const App = () => {

  return (
    <ReactLenis root>
    <Header/>
    <main>
      <Hero/>
      <About/>
      <Projects/>
      <Coffee/>
      <Contact/>
    </main>
    </ReactLenis>
  )
}

export default App