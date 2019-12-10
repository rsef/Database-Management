import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import DonorForm from './components/donor/donorForm'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/donorform' component={DonorForm} />
          
        </Switch>
      </div>
    </BrowserRouter>
  
  );
}

export default App;
