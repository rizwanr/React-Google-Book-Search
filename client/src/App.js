import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from './pages/Search';
import Saved from './pages/Saved';
import NoMatch from './pages/NoMatch';
import Nav from './components/Nav';



class App extends Component {
  render() {
    return (
      <Router>
        <div className="App container">
          <Nav />
          <Switch>
            <Route path="/search" component={Search} />
            <Route exact path="/saved" component={Saved} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;



