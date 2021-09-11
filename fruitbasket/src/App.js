import "./App.css";
import logo from "./logo.png";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Container from "react-bootstrap/Container";
import Profile from "./profile";

const Header = () => {
  return (
    <>
      <Container fluid>
        <Container>
          <img src={logo} height="100" width="100" />
        </Container>

        <Container>
          <h1> FRUITBASKET </h1>
        </Container>
      </Container>

      <Tabs justify defaultActiveKey="Discover" id="home-nav" className="mb-3">
        <Tab eventKey="Discover" title="Discover"></Tab>
        <Tab eventKey="Likes" title="Likes"></Tab>
        <Tab eventKey="Messages" title="Messages"></Tab>
        <Tab eventKey="Profile" title="Profile">
          <Profile></Profile>
        </Tab>
      </Tabs>
    </>
  );
};

function App() {
  return (
    <Container className="App">
      <Header />
    </Container>
  );
}

export default App;
