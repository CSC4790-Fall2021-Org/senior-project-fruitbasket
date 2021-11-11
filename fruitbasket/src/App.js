import "./App.css";
import logo from "./fruits.svg";
import Container from "react-bootstrap/Container";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Login } from "./Login";
import { Header } from "./Header";

function App() {
  return (
    <Router>
      <Container fluid>
        <Container className="text-center">
          <img src={logo} height="100" width="100" />
        </Container>

        <Container>
          <h1 className="text-center"> FRUITBASKET </h1>
        </Container>
      </Container>
      <div>
        <ul>
          <li>
            <Link to="/">login</Link>
          </li>
          <li>
            <Link to="/app">app</Link>
          </li>
        </ul>

        <hr />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/app">
            <Header />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
