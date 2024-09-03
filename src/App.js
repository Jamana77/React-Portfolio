// import logo from './logo.svg';
// import './App.css';
import Experience from "./components/Experience"
import Contact from "./components/Contact"
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

// import Hello from "./components/Hello";

function App() {
  useEffect(() => {
    Aos.init();
   
  }, [])
  
  return (
    <>
    <Navbar/>
    <div className="container">
      <Home/>
      <Experience/>
      <Skills/>
      <Projects/>
      <Contact/>
     
    </div>
    </>
  )
}

export default App;
