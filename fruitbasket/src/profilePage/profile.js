import "./profile.css";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { Component } from "react";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allprofiles: [],
      profile: [],
      userids: [],
      dropDownValue: "Select User",
      currentid: "000001",

      username: [],
    };
  }
  changeValue(text) {
    this.setState({ dropDownValue: text });
    this.setState({ currentid: text });
  }

  putValue(val)
  {
      const username = { userName: 'test put request' };
      axios.put('https://fruitbasketapi20211202024943.azurewebsites.net/api/users', username)
  }

  componentDidMount() {
    const url =
      "https://fruitbasketapi20211202024943.azurewebsites.net/api/users";
    axios
      .get(url)
      .then((response) => response.data)
      .then((data) => {
        this.setState({ allprofiles: data });
        this.setState({ username: data[0].users_Name });
        this.setState({ profile: data[0] });
        this.setState({ userids: data.map((data) => data.users_ID) });

        console.log(this.state.profile);
        console.log(this.state.userids);
        console.log(this.state.allprofiles);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  render() {
    const { profile } = this.state;
    const { userids } = this.state;
    const { username } = this.state;
    return (
      <>
        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic">
            {this.state.dropDownValue}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item
              as="button"
              onClick={(e) => this.changeValue(e.target.textContent)}
            >
              {Object.keys(userids).map((oneKey, i) => {
                return <Dropdown.Item key={i}>{userids[oneKey]}</Dropdown.Item>;
              })}
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

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
                <h3> Age </h3>
                <h3>{profile.age} </h3>
              </Card>
            </div>
            <div className="col-md-4">
              <Card className="text-center">
                <h3> City </h3>
                <h3>{profile.city} </h3>
              </Card>
            </div>
            <div className="col-md-4">
              <Card className="text-center">
                <h3> Doing </h3>
                <h3>{profile.doing} </h3>
              </Card>
            </div>
          </Row>
        </div>

        <div className="container-fluid text-center pt-5">
          <Row>
            <div className="col-md-4">
              <Card className="text-center">
                <h3> Good At </h3>
                <h3>{profile.good_At} </h3>
              </Card>
            </div>
            <div className="col-md-4">
              <Card className="text-center">
                <h3> Self Summary </h3>
                <h3>{profile.self_Summary} </h3>
              </Card>
            </div>
            <div className="col-md-4">
              <Card className="text-center">
                <h3> Style </h3>
                <h3>{profile.style} </h3>
              </Card>
            </div>
          </Row>
        </div>
      </>
    );
  }
}

export default Profile;
