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
      
      </>
    );
  }
}

export default Profile;
