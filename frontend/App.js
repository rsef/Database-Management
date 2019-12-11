import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

//import UsernameTodo from "./components/username-todo.component";
import CreateAccount from "./components/create-account.component";
import EditAccount from "./components/edit-accounts.component";
import ListAccounts from "./components/list-all-accounts.component";
import MainPage from "./components/main-page.component";
import ThankYouPage from "./components/thank-you-page.component";
import DeleteUser from "./components/deleted-user.component";

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
                    Sign Up To Donate
                  </Link>
                </li>  
                <li className="navbar-item">
                  <Link to="/users" className="nav-link">
                    Edit users
                  </Link>
                </li>  
              </ul>
            </div>
          </nav>
          <br />
          <Route path="/" exact component={MainPage} />
          <Route path="/edit/:id" component={EditAccount} />
          <Route path="/createaccount" component={CreateAccount} />
          <Route path="/users" component={ListAccounts} />
          <Route path="/thankyou" component={ThankYouPage}/>
          <Route path="/delete/:id" component={DeleteUser}/>
        </div>
      </Router>
    );
  }
}

export default App;
