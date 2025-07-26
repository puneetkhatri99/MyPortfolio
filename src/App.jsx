import Home from "./components/Home"
import NavBar from './components/NavBar'
import CursorFollower from  './components/CursorFollower'
import About from './components/About'
import Experience from './components/Experince';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Skills from './components/Skills'
import SocialLinks from './components/SocialLinks'

const App = () => {

  return (
    <div className="font-sans bg-gray-900 text-white min-h-screen
                 dark:bg-gray-100 dark:text-gray-900"> 
      <CursorFollower />
      <NavBar/>
      <SocialLinks/>
      <Home />
      <About />
      <Experience /> 
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default App;
