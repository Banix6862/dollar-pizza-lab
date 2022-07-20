import React from 'react';
 import Navbar from './components/navbar';
import Pizza from './components/pizza';
import Menu from './components/menu';
import Contact from './components/contact';
import './App.css';

function App() {
  return(
    <div className="App">
      <Navbar/>
      <Pizza/>
      <Menu/>
      <Contact/>
    </div>
  );
}

export default App;
