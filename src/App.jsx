import React from "react";

import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Education from "./components/Education/Education";
import Professional from "./components/Professional/Professional";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";

import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <Home />
        <About />
        <Professional />
        <Skills />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </div>
    )
  }
}

export default App;
