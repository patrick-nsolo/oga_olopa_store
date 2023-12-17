//Edit website interface [App.js] here 

import './App.css';
import About from './components/AboutMe/About';
import Contact from './components/ContactForm/Contact';
import Gallery from './components/Gallery/Gallery';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Projects from './components/MyProjects/Projects';
import Tools from './components/Tools/Tools';

function App() {
  return (
    <div>
      <Header/>
      <Home/>
      <Projects/>
      <Gallery/>
      <About/>
      <Tools/>
      <Contact/>
    </div>
  );
}

export default App;
