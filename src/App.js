import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import UsernameTodo from "./components/username-todo.component";
import CreateAccount from "./components/create-account.component";
import MainPageTodo from "./components/main-page-todo.component";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">
              HomePage
            </Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/login/" className="nav-link">
                    Login
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link to="/createaccount" className="nav-link">
                    Create Account
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <br />
          <Route path="/" exact component={MainPageTodo} />
          <Route path="/login/:username" component={UsernameTodo} />
          <Route path="/createaccount" component={CreateAccount} />
        </div>
      </Router>
    );
  }
}

export default App;
