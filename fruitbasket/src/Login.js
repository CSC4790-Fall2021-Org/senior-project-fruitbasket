import Form from "react-bootstrap/Form";
import React, { Component } from "react";
import Card from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import axios from "axios";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      users_ID: "",
      userName: "",
      first_Name: "",
      last_Name: "",
      bio: "",
      user_Password: "",
      user_Email: "",
      phone_Number: "",
      date_Of_Birth: "",
      number_Of_Matches: "",
      number_Of_Baskets: "",
      city: "",
      age: "",
      preference_ID: "",
    };
    this.onChange = this.onChange.bind(this)
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  postRequest = () => {
    console.log("asdf")
    axios
      .post(
        "https://fruitbasketapi20211021012825.azurewebsites.net/api/users",
        {
          users_ID: this.users_ID,
          userName: this.userName,
          first_Name: this.first_Name,
          last_Name: this.lastName,
          bio: this.bio,
          user_Password: this.user_Password,
          user_Email: this.user_Email,
          phone_Number: this.phone_Number,
          date_Of_Birth: this.date_Of_birth,
          number_Of_Matches: this.number_Of_Matches,
          number_Of_Baskets: this.number_Of_Baskets,
          city: this.city,
          age: this.age,
          preference_ID: this.preference_ID
        }
      )
      .then((response) => {
        console.log(response);
      });
  };

  render() {
    const {
      users_ID,
      userName,
      first_Name,
      last_Name,
      bio,
      user_Password,
      user_Email,
      phone_Number,
      date_Of_Birth,
      number_Of_Matches,
      number_Of_Baskets,
      city,
      age,
      preference_ID
    } = this.state;
    return (
      <>
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-3">
              <h1 className="text-center p-5">Login</h1>

              <Card className="Login text-center">
                <Form>
                  <Form.Group size="lg" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control autoFocus type="email" />
                  </Form.Group>
                  <Form.Group size="lg" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" />
                  </Form.Group>
                  <Link to="/app">
                    <Button block size="lg" type="submit">
                      Login
                    </Button>
                  </Link>
                </Form>
              </Card>
            </div>
            <div class="col-md-1"></div>
            <div class="col-md-3">
              <h1 className="text-center">Create New User</h1>
              <form onSubmit={this.postRequest}>
                <Row>
                  <label for="users_ID">users_ID</label>
                  <input
                    type="text"
                    name="users_ID"
                    value={users_ID}
                    onChange={this.onChange}
                  />
                </Row>
                <Row>
                  <label for="userName">userName</label>
                  <input
                    type="text"
                    name="userName"
                    value={userName}
                    onChange={this.onChange}
                  />
                </Row>
                <Row>
                  <label for="first_Name">first_Name</label>
                  <input
                    type="text"
                    name="first_Name"
                    value={first_Name}
                    onChange={this.onChange}
                  />
                </Row>
                <Row>
                  <label for="last_Name">last_Name</label>
                  <input
                    type="text"
                    name="last_Name"
                    value={last_Name}
                    onChange={this.onChange}
                  />
                </Row>
                <Row>
                  <label for="bio">bio</label>
                  <input
                    type="text"
                    name="bio"
                    value={bio}
                    onChange={this.onChange}
                  />
                </Row>
                <Row>
                  <label for="user_Password">user_Password</label>
                  <input
                    type="text"
                    name="user_Password"
                    value={user_Password}
                    onChange={this.onChange}
                  />
                </Row>
                <Row>
                  <label for="user_Email">user_Email</label>
                  <input
                    type="text"
                    name="user_Email"
                    value={user_Email}
                    onChange={this.onChange}
                  />
                </Row>
                <Row>
                  <label for="phone_Number">phone_Number</label>
                  <input
                    type="text"
                    name="phone_Number"
                    value={phone_Number}
                    onChange={this.onChange}
                  />
                </Row>
                <Row>
                  <label for="date_Of_Birth">date_Of_Birth</label>
                  <input
                    type="text"
                    name="date_Of_Birth"
                    value={date_Of_Birth}
                    onChange={this.onChange}
                  />
                </Row>
                <Row>
                  <label for="number_Of_Matches">number_Of_Matches</label>
                  <input
                    type="text"
                    name="number_Of_Matches"
                    value={number_Of_Matches}
                    onChange={this.onChange}
                  />
                </Row>
                <Row>
                  <label for="number_Of_Baskets">number_Of_Baskets</label>
                  <input
                    type="text"
                    name="number_Of_Baskets"
                    value={number_Of_Baskets}
                    onChange={this.onChange}
                  />
                </Row>
                <Row>
                  <label for="city">city</label>
                  <input
                    type="text"
                    name="city"
                    value={city}
                    onChange={this.onChange}
                  />
                </Row>
                <Row>
                  <label for="age">age</label>
                  <input
                    type="text"
                    name="age"
                    value={age}
                    onChange={this.onChange}
                  />
                </Row>
                <Row>
                  <label for="preference_ID">preference_ID</label>
                  <input
                    type="text"
                    name="preference_ID"
                    value={preference_ID}
                    onChange={this.onChange}
                  />
                </Row>
                <Row>
                <button type="submit">Submit</button>
                </Row>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Login;
