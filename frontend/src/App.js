import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import DonorForm from './components/donor/donorForm';
import Login from './components/login/login';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/donorform' component={DonorForm} />
          <Route path='/login' component={Login}/>
          
        </Switch>
      </div>
    </BrowserRouter>
  
  );
}

export default App;
