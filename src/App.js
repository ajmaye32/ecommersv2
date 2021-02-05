import React from 'react';
import './App.css';
import Nav from './Nav';
import Contact from './Contact';
import Products from './Components/Products';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Footer from './Footer'



function App() {
  return (

    <Router>
      <div className="App" >
        <Nav />
        <Switch>
          <Route path="/products" component={Products} />
          <Route path="/contact" component={Contact} />
          <Route path="/home" component={Home} />
        </Switch>
        <Footer />
      </div>
    </Router >
  );

}

export default App;
