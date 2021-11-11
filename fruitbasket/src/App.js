import "./App.css";
import logo from "./fruits.svg";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Profile from "./profilePage/profile";
import Explore from "./explorePage/explore";
import Group from "./Group";
import Likes from "./Likes";
import Messages from "./Messages";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div class="container-fluid">
        <div class="row">
        <div class="col-md-3">
        </div>
          <div class="col-md-3">
            <h1 className="text-center p-5">Login</h1>

            <Card className="Login text-center">
              <Form>
                <Form.Group size="lg" controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control autoFocus type="email" />
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" />
                </Form.Group>
                <Link to="/app">
                <Button block size="lg" type="submit">
                  Login
                  
                </Button>
                </Link>
              </Form>
            </Card>
          </div>

          <div class="col-md-6">
            <h1 className="text-center">Create New User</h1>
          </div>
        </div>
      </div>
    </>
  );
};

const Header = () => {
  return (
    <>
      <div className="header">
        <Tabs
          justify
          defaultActiveKey="Explore"
          id="home-nav"
          className="mb-3 navbarmain"
        >
          <Tab eventKey="Explore" title="Explore" className="exploretab">
            <Explore></Explore>
          </Tab>

          <Tab eventKey="Likes" title="Likes">
            <Likes></Likes>
          </Tab>

          <Tab eventKey="Messages" title="Messages">
            <Messages></Messages>
          </Tab>
          <Tab eventKey="Fruit Baskets" title="Fruit Baskets">
            <Group></Group>
          </Tab>
          <Tab eventKey="Profile" title="Profile">
            <Profile></Profile>
          </Tab>
        </Tabs>
      </div>
    </>
  );
};

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
