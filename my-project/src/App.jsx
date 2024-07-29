

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Languages from "./components/Languages";
import Tools from "./components/Tools";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import CoreSubjects from "./components/CoreSubjects";
import Acheviements from "./components/Acheviements";


const App = () => {
  return ( 
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 left-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Languages/>
        <Tools />
        <CoreSubjects />
       <Projects /> 
       <Acheviements />
       <Contact />
    
      
      </div>
    </div>
  );
};

export default App;

