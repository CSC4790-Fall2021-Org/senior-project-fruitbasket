import "./profile.css";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Container from "react-bootstrap/Container";


const Profile = () => {
    return(
        <>
        <Container>
            <h1> Profile</h1>
        </Container>
        <Tabs justify defaultActiveKey="Create" id="home-nav" className="mb-3">
          <Tab eventKey="Create" title="Create"></Tab>
          <Tab eventKey="Read" title="Read"></Tab>
          <Tab eventKey="Update" title="Update"></Tab>
          <Tab eventKey="Delete" title="Delete">
          </Tab>
        </Tabs>
        </>
    );
};

export default Profile