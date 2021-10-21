import "./profile.css";

import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
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
    axios
      .get("https://jsonplaceholder.typicode.com/users/1")
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
        <h1 class="text-center">
          {profile.name} | {profile.username}{" "}
        </h1>
        <p>{profile.phone}</p>
        <p>{profile.website}</p>

        <div className="container-fluid text-center">
          <Row>
            <div className="col-md-4">
              <Image
                alt="test"
                width="80%" 
                height="80%"
                src="https://www.layoutit.com/img/sports-q-c-140-140-3.jpg"
              />
            </div>
            <div className="col-md-4">
              <Image
                alt="test"
                width="80%" 
                height="80%"
                src="https://www.layoutit.com/img/sports-q-c-140-140-3.jpg"
              />
            </div>
            <div className="col-md-4">
              <Image
                alt="test"
                width="80%" 
                height="80%"
                src="https://www.layoutit.com/img/sports-q-c-140-140-3.jpg"
              />
            </div>
          </Row>
        </div>
      </>
    );
  }
}

export default Profile;
