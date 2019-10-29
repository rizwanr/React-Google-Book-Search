import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from './pages/Search'
import Saved from './pages/Saved'
import Nav from './components/Nav';
import Jumbotron from "./components/Jumbotron";



class App extends Component {
  render() {
    return (
      <Router>
        <div className="App container">
          <Nav />
          <Jumbotron title="(React) Google Book Search" description="Search Book and Save Books of Interest" />
          <Switch>
            <Route exact path="/search" component={Search} />
            <Route exact path="/saved" component={Saved} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;



