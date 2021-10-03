import "./profile.css";

import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Form from "react-bootstrap/Form";

import Container from "react-bootstrap/Container";
import axios from "axios";
import { Component } from "react";
import service from "./service";

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profiles: [],
    };
  }

  componentDidMount() {
    this.retrieveProfiles();
  }

  retrieveProfiles() {
    service
      .getAllUsers()
      .then((response) => {
        this.setState({
          profiles: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { profiles } = this.state;
    return (
      <>
        <Tabs
          justify
          defaultActiveKey="Create"
          id="home-nav"
          className="mb-3 navbarmain"
        >
          <Tab eventKey="Create" title="Create" className="createtab">
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control placeholder="Enter test name" />
                <Form.Text className="text-muted">
                  Test add name
                </Form.Text>
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Tab>

          <Tab eventKey="Read" title="Read">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>name</th>
                  <th>address</th>
                  <th>company</th>
                  <th>email</th>
                  <th>phone</th>
                  <th>username</th>
                  <th>website</th>
                </tr>
              </thead>
              <tbody>
                {profiles.map((user) => (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.address.city}</td>
                    <td>{user.company.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.username}</td>
                    <td>{user.website}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Tab>
          <Tab eventKey="Update" title="Update"></Tab>

          <Tab eventKey="Delete" title="Delete"></Tab>
        </Tabs>
      </>
    );
  }
}

export default Profile;
