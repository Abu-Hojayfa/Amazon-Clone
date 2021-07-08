import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home/Home";
import Login from "./Components/Login/Login.js";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <div className="App text-white">
        <Switch>
          <Route path="/home">
            <Navbar />
            <Home />
            <Footer />
          </Route>

          <Route path="/login">
            <Navbar />
            <Login />
          </Route>

          <Route path="/">
            <Navbar />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
