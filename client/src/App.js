import React from "react";
import "./App.css";
import Nav from "./components/Navbar/index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchBooks from './pages/SearchBooks'

function App() {
  return (
    <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={SearchBooks} />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
