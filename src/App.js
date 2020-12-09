import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Home, Dashboard } from "./Components";
function App() {
  return (
    <div className="App">
      <Router>
        {/* <Navigation /> */}
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/dashboard" exact component={() => <Dashboard />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;