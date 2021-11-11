import Form from "react-bootstrap/Form";
import React, { Component } from "react";
import Card from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

class Login extends Component {
    constructor() {
        super();
        this.state = {
          username: ""
        };
      };
  render() {
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
              <Form.Group className="text-center" size="lg">
                <Form.Label>users_ID</Form.Label>
                <Form.Control required />
                <Form.Label>userName</Form.Label>
                <Form.Control required />
                <Form.Label>first_Name</Form.Label>
                <Form.Control required />
                <Form.Label>last_Name</Form.Label>
                <Form.Control required />
                <Form.Label>bio</Form.Label>
                <Form.Control required />
                <Form.Label>user_Password</Form.Label>
                <Form.Control required />
                <Form.Label>user_Email</Form.Label>
                <Form.Control required />
                <Form.Label>phone_Number</Form.Label>
                <Form.Control required />
                <Form.Label>date_Of_Birth</Form.Label>
                <Form.Control required />
                <Form.Label>number_Of_Matches</Form.Label>
                <Form.Control required />
                <Form.Label>number_Of_Baskets</Form.Label>
                <Form.Control required />
                <Form.Label>city</Form.Label>
                <Form.Control required />
                <Form.Label>age</Form.Label>
                <Form.Control required />
                <Form.Label>preference_ID</Form.Label>
                <Form.Control required />
                <Button
                  variant="primary"
                  type="submit"
                  onsubmit="console.log('You clicked submit.'); return false"
                >
                  Submit
                </Button>
              </Form.Group>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Login;
