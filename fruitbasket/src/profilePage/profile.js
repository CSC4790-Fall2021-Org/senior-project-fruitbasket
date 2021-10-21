import "./profile.css";

import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { Component } from "react";

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

        <Card className="text-center">
          <h3> phone number </h3>
          <h3>{profile.phone} </h3>
          <Form>
            <input></input>
            <Button>edit</Button>
          </Form>
          
          <h3> website </h3>
          <h3>{profile.website} </h3>
          <Form>
            <input></input>
            <Button> edit</Button>
          </Form>
          

        </Card>
        <h1> BIO</h1>
        <p1>
          {" "}
          Do you have any idea how long it takes those cups to decompose. Yes,
          Yes, without the oops! Do you have any idea how long it takes those
          cups to decompose. Is this my espresso machine? Wh-what is-h-how did
          you get my espresso machine? You know what? It is beets. I've crashed
          into a beet truck.
        </p1>
      </>
    );
  }
}

export default Profile;
