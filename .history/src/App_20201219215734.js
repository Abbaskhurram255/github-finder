import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import User from './components/users/User';
import Alert from './components/layout/Alert';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import About from './components/pages/About';

import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
import Footer from './components/layout/Footer';

import './App.css';

const App = () => {
  const [alert, setAlert] = useState(null);

  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="app">
            <Navbar title="Github Finder" icon="fa fa-github" />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/user/:login" component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
            <Footer></Footer>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
