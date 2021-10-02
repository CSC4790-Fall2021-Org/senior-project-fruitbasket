import "./App.css";
import logo from "./fruits.svg";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Container from "react-bootstrap/Container";
import Profile from "./profile";
import Explore from "./explorePage/explore";
import Group from "./Group";
import Likes from "./Likes";
import MessagingUI from "./MessagingUI"

const Header = () => {
  return (
    <>
      <div className="header">
      <Container fluid>
        <Container className="text-center">
          <img src={logo} height="100" width="100" />
        </Container>

        <Container>
          <h1 className="text-center"> FRUITBASKET </h1>
        </Container>
      </Container>

      <Tabs justify defaultActiveKey="Explore" id="home-nav" className="mb-3 navbarmain">
        <Tab eventKey="Explore" title="Explore" className="exploretab">
          <Explore></Explore>
        </Tab>
          
        <Tab eventKey="Likes" title="Likes">
          <Likes></Likes>
        </Tab>
          
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
