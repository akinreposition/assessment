import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Navbar from './components/navBar/Navbar'
import { SignUp } from "./components/forms/SignUp";
import { Login } from "./components/forms/Login";
import Footer from "./components/footer/Footer";
import "./App.scss";

function App() {
  return (
    <div className="text-center">
      <Router>
        <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/sign-up" component={SignUp} />
            <Route exact path="/login" component={Login} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
      </Router>
    </div>
  );
}

export default App;
