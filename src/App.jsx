import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Stack from "./components/Stack";
import Work from "./components/Work";
import Ventures from "./components/Ventures";
import Process from "./components/Process";
import About from "./components/About";
import Contact from "./components/Contact";
import Loader from "./components/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = isLoading ? "hidden" : "";
    document.body.style.overflow = isLoading ? "hidden" : "";

    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  return (
    <div className="min-h-screen bg-bg text-ink">
      <NavBar />
      <main className="pt-8 sm:pt-10 lg:pt-12">
        <Hero />
        <About />
        <Experience />
        <Stack />
        <Work />
        <Ventures />
        <Process />
        <Contact />
      </main>
      {isLoading ? <Loader onComplete={() => setIsLoading(false)} /> : null}
    </div>
  );
}

export default App;
