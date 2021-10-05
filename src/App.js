import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          
        </Switch>
      </Router>
    </div>
  );
};

export default App;
