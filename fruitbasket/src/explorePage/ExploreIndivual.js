import { render } from "react-dom";
import React from "react";
import "./explore.css";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import { Component } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import yosemite from './yosemitePic.jpg';
import yosemite2 from './yosemitePic2.jfif';
import yosemite3 from './yosemitePic3.jfif';
import Explore from "./explore";
import axios from "axios";

class ExploreIndivual extends React.Component {
    constructor(props) { 
        super(props);
        this.state = {
            id: 0,
            name : this.props.name,
            age : this.props.age,
            city : this.props.city,
            selfSummary : this.props.selfSummary,
            doing : this.props.doing,
            goodat : this.props.goodat,
            style : this.props.style,
            src1 : this.props.src1,
            src2 : this.props.src2,
            src3 : this.props.src3

        };
     };
     
     handleChange = () => {
        const url = 'https://fruitbasketapi20211202024943.azurewebsites.net/api/users/'+(this.state.id+1);
        axios.get(url, {
        })
        .then((response) => {
          this.setState({
            id: response.data.users_ID,
            name: response.data.users_Name,
            age: response.data.age,
            city: response.data.city,
            selfSummary: response.data.self_Summary,
            doing: response.data.doing,
            goodat: response.data.good_At,
            style: response.data.style
          }, () => console.log(this.state.name))
        })
     };
     render() {
        console.log(this.props);
        return(
            
        <>
        <Container className="text-center p-3" id="clear">
            <h1> Recommended For You</h1>
        </Container>
        
        <Container className="block-example border border-dark rounded shadow-lg">

        <Container className="d-flex justify-content-around mt-5 profileheader">

         {this.state.name} | {this.state.age} | {this.state.city}
                <Button className="like-button btn-outline-dark bg-transparent" onClick={this.handleChange}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                    </svg>
                PASS
              </Button>

                <Button className="like-button btn-outline-danger bg-transparent" onClick={this.handleChange}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                    </svg>
                LIKE
              </Button>
        </Container>

        <Carousel className="explorecarousel m-5">
            
            <Carousel.Item interval={1000}>
                <img
                className="d-block w-100"
                src= {this.state.src1}
                alt="First slide"
                />
            </Carousel.Item>
            
            <Carousel.Item interval={500}>
                <img
                className="d-block w-100"
                src= {this.state.src2}
                alt="Second slide"
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100"
                src= {"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}
                alt="Third slide"
                />
            </Carousel.Item>
            </Carousel>

            <Container className="bio p-5">

                <Row>
                    <Col sm={8}>
                        <h1>My self-summary</h1>
                        <p1 className="bodytext">
                        {this.state.selfSummary}
                        </p1>
                        <h1>What I'm doing with my life</h1>
                        <p1 className="bodytext">
                        {this.state.doing}
                        </p1>
                        <h1>I'm really good at</h1>
                        <p1 className="bodytext">
                        {this.state.goodat}
                        </p1>
                        <h1>My style can be described as</h1>
                        <p1 className="bodytext">
                       {this.state.style}
                        </p1>
                    </Col>

                    <Col sm={4} className="pl-2">
                    
                    <ul className="rightbody pt-5">
                        <li class="b1">
                        Woman | Straight | Monogamous
                        </li>

                        <li class="b2">
                        Looking for Short-term dating | Long-term dating
                        </li>

                        <li class="b3">
                        Does not have kids and does not want them | Has cat(s)
                        </li>

                    </ul>
                    </Col>
                </Row>
            </Container>
        </Container>

        
        </>
        )
     }
}

export default ExploreIndivual;
