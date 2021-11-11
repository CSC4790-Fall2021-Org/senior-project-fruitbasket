import Form from "react-bootstrap/Form";
import React, { Component } from "react";
import Card from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

class Login extends Component {
    constructor() {
        super();
        this.state = {
          users_ID: "",
          userName: "", 
          first_Name:"",
          last_Name:"",
          bio:"",
          user_Password:"",
          user_Email:"",
          phone_Number:"",
          date_Of_Birth:"",
          number_Of_Matches:"",
          number_Of_Baskets:"",
          city:"",
          age:"",
          preference_ID: ""
        };
      };

      onSubmit = () => {
        axios
          .post("https://fruitbasketapi20211021012825.azurewebsites.net/api/users", {
            users_ID:this.users_ID,
            userName:this.userName, 
            first_Name:this.first_Name,
            last_Name:this.lastName,
            bio:this.bio,
            user_Password:this.user_Password,
            user_Email:this.user_Email,
            phone_Number:this.phone_Number,
            date_Of_Birth:this.date_Of_birth,
            number_Of_Matches:this.number_Of_Matches,
            number_Of_Baskets:this.number_Of_Baskets,
            city:this.city,
            age:this.age
          })
          .then((response) => {
            setPost(response.data);
          });
      }


      onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
      }
      
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
                <Form.Control 
                required 
                onChange={this.onChange}
                />
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
