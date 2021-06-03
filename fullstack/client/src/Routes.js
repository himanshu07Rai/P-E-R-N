import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        {/* <PrivateRoute exact path="/dashboard" component={Dashboard} /> */}
      </Switch>
    </Router>
  );
}

export default Routes;