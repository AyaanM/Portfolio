import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About"
import Projects from "./components/Projects"
import Coffee from "./components/Coffee"
import Contact from "./components/Contact";

const App = () => {

  const styles = 'background: black; color: limegreen; font-size:large; font-weight:bold;' 

  console.log("%cThank you so much for visiting my website 🤩", styles)
  console.log("%cView the github repo for this project here: https://github.com/AyaanM/Portfolio", styles)
  console.log("%cAny feedback is greatly appreciated. Lets nerd out over this website if you want to. Feel free to each out to me through LinkedIn!", styles)

  return (
    <>
    <Header/>
    <main>
      <Hero/>
      <About/>
      <Projects/>
      <Coffee/>
      <Contact/>
    </main>
    </>
  )
}

export default App