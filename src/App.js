import "./App.css";
import Progress from "./components/Progress";
import Education from "./components/Education";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Education/>
      <Skills/>
      <Projects/>
      <Progress/>
    </>
  );
}

export default App;
