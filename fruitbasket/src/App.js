import "./App.css";
import logo from "./fruits.svg";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Container from "react-bootstrap/Container";
import Profile from "./profile";
import Explore from "./explore";
import Group from "./Group"

const Header = () => {
  return (
    <>
      <div className="header">
      <Container fluid>
        <Container>
          <img src={logo} height="100" width="100" />
        </Container>

        <Container>
          <h1> FRUITBASKET </h1>
        </Container>
      </Container>

      <Tabs justify defaultActiveKey="Explore" id="home-nav" className="mb-3">
        <Tab eventKey="Explore" title="Explore">
          <Explore></Explore>
        </Tab>
          
        <Tab eventKey="Matches" title="Matches"></Tab>
        <Tab eventKey="Messages" title="Messages"></Tab>
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
    <Container className="App">
        <Header />
    </Container>
  );
}

export default App;
