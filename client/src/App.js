import "./App.css";
import Home from "./Screens/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/NavBar";
import CartScreen from "./Screens/CartScreen/CartScreen";
import Errorpage from "./Components/ErrorPage/Errorpage";
import Register from "./Screens/Register/Register";
import Login from "./Screens/Login/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/cart">
            <CartScreen />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="*">
            <Errorpage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
