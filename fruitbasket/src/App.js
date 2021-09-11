import "./App.css";
import logo from "./logo.png";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

const Header = () => {
  return (
      <><Container fluid>
		  <Container>
			  <img src={logo} height="100" width="100" />
		  </Container>

		  <Container>
			  <h1> FRUITBASKET </h1>
		  </Container>
	  </Container><Nav justify variant="tabs" defaultActiveKey="/home">
			  <Nav.Item>
				  <Nav.Link href="link-0">Discover</Nav.Link>
			  </Nav.Item>

			  <Nav.Item>
				  <Nav.Link eventKey="link-1">Likes</Nav.Link>
			  </Nav.Item>

			  <Nav.Item>
				  <Nav.Link eventKey="link-2">Messages</Nav.Link>
			  </Nav.Item>

			  <Nav.Item>
				  <Nav.Link eventKey="Link-3">Profile</Nav.Link>
			  </Nav.Item>
		  </Nav></>
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
