import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import "./App.scss";
import { SignUp } from "./components/forms/SignUp";
import { Login } from "./components/forms/Login";

function App() {
  return (
    <div className="text-center">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/login" component={Login} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
