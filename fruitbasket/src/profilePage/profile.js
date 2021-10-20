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
      profile: [],
    };
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users/1')
    .then((response) => {
      this.setState({
        profile: response.data,
      });
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    const { profile } = this.state;
    return (
      <>
        <p>Name: {profile.name}</p>
      </>
    );
  }
}

export default Profile;
