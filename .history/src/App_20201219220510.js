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

import './App.css';

const App = () => {
  useState(null);

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
              <footer class="container-full padv">
<p><a href="/">CoderStats</a> is a free service that displays statistics for coders with public Git repositories on GitHub.<br>
<a href="https://github.com/coderstats/coderstats.net">Source Code</a> •
<a href="https://chrome.google.com/webstore/detail/necogepejonacpphmlmcagmbjaogpbng">Chrome Extension</a> • <a href="https://addons.mozilla.org/en-US/firefox/addon/coderstats/">Firefox Add-on</a> • <a href="https://teespring.com/stores/codershirts" title="T-Shirts, hoodies, mugs and stickers for coders">CoderShirts Store</a>
</p></footer>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
