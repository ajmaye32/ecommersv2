import React from 'react';
import './App.css';
import Nav from './Nav'
import Products from './Components/Products';
import About from './About'
import Contact from './Contact'

function App() {
  return (
    <div className="App" >
      <Nav />
      <About />
      <Products />
      <Contact />
    </div>
  );

}

export default App;
