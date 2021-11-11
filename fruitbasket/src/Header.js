import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Profile from "./profilePage/profile";
import Explore from "./explorePage/explore";
import Group from "./Group";
import Likes from "./Likes";
import Messages from "./Messages";

export const Header = () => {
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
