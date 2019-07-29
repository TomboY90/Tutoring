import React from "react";
import Main from "./Pages/Main";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/home" component={Main} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
