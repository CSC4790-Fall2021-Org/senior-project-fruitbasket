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
    const url =
      "https://fruitbasketapi20211021012825.azurewebsites.net/api/users";
    axios
      .get(url)
      .then((response) => response.data)
      .then((data) => {
        this.setState({ profile: data });
        console.log(this.state.profile);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  render() {
    const { profile } = this.state;
    return (
      <>
        <div className="text-center m-5">
          <h1 class="text-center">{profile.name}</h1>
          <Image
            className="text-center rounded border border-dark"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPIGa9vRdOR3iuiRI9taJagM8cr-y2LhntDw&usqp=CAU"
          ></Image>
        </div>
        <div className="container-fluid text-center">
          <Row>
            <div className="col-md-4">
              <Card className="text-center">
                <h3> Username </h3>
                <h3>{profile.username} </h3>
                <Form>
                  <input></input>
                  <Button>update</Button>
                </Form>
              </Card>
            </div>
            <div className="col-md-4">
              <Card className="text-center">
                <h3> Phone Number </h3>
                <h3>{profile.phone} </h3>
                <Form>
                  <input></input>
                  <Button>update</Button>
                </Form>
              </Card>
            </div>
            <div className="col-md-4">
              <Card className="text-center">
                <h3> Website </h3>
                <h3>{profile.website} </h3>
                <Form>
                  <input></input>
                  <Button>update</Button>
                </Form>
              </Card>
            </div>
          </Row>

          <Card className="m-5">
            <h1> BIO</h1>
            <p>
              {" "}
              Do you have any idea how long it takes those cups to decompose.
              Yes, Yes, without the oops! Do you have any idea how long it takes
              those cups to decompose. Is this my espresso machine? Wh-what
              is-h-how did you get my espresso machine? You know what? It is
              beets. I've crashed into a beet truck.
            </p>
            <Form>
              <input></input>
              <Button>update</Button>
            </Form>
          </Card>
        </div>
      </>
    );
  }
}

export default Profile;
