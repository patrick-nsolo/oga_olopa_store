//Edit website interface [App.js] here 

import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Shop from './components/Shop/Shop';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  return (
    <div>
      <Header/>
      <Home/>
      <Shop/>
      <About/>
      <Contact/>
    </div>
  );
}

export default App;
