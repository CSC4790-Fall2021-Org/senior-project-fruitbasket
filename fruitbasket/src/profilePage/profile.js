import "./profile.css";

import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

import Container from "react-bootstrap/Container";
import axios from "axios";
import { Component } from "react";
import service from "./service";


class Profile extends Component{
    constructor(props) {
        super(props);

        this.state = {
            profiles: [],
        };
    }
    
    componentDidMount(){
        this.retrieveProfiles();
        }

    retrieveProfiles() {
        service.getAllUsers()
            .then(response => {
                this.setState({
                    profiles: response.data
                });
                console.log(response.data);
              })
              .catch(e => {
                console.log(e);
              });
          }

        render(){
            const {profiles} = this.state;
        return(
            <>
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
                      {profiles.map(user => (  
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
            </>
        );
    }
}

export default Profile