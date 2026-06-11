import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Stack from "./components/Stack";
import Work from "./components/Work";
import Ventures from "./components/Ventures";
import Process from "./components/Process";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-bg text-ink">
      <NavBar />
      <main>
      <Hero />
      <Experience />
      <Stack />
      <Work />
      <Ventures />
      <Process />
      <About />
      <Contact />
      </main>
    </div>
  );
}

export default App;
