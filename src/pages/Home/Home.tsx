import NavBar from "../../components/NavBar/NavBar"
import Hero from "./sections/Hero/Hero"
import About from "./sections/About/About"
import Skills from "./sections/Skills/Skills"
import Projects from "./sections/Projects/Projects"

const Home = () => {
  

    return (
      <>
        <NavBar />
        <Hero /> 
        <About /> 
        <Skills />
        <Projects />
      </>
    )
  }
  
  export default Home