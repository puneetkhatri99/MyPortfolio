import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import CursorFollower from "./components/CursorFollower";
function App() {
 

  return (
    <>
     
      <div className="relative">
      <CursorFollower />
       <NavBar />
      <SocialLinks/>
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
    </>
  )
}

export default App
