import { render } from "react-dom";
import React from "react";
import "./basketProfile.css";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import { Component } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Explore from "./explore";
import yosemite from './yosemitePic.jpg';
class BasketProfile extends React.Component {
    constructor(props) { 
        super(props);
    }
     /*
    "baskets_ID": 1,
    "baskets_Name": "Benson",
    "age": 40,
    "city": "Park",
    "selfSummary": "Manager of the Park",
    "src1": "idk",
    "gender": "Male",
    "orientation": "Straight",
    "relationships": "Monogamous",
    "looking": "for love",
    "facts": "Im a gumball machine"
     */
     onHandleChange = () => {
         this.setState({
            name: "man",  
            age: '1098',
            city: 'Yosemite, CA',
            selfSummary: 'Park',
            src1: yosemite,
            gender: "place",
            orientation: "straight",
            relationships: "Monogamous",
            looking: "hd",
            facts: "Has air, water, and grass"
         });
     };
    render() {
        return(
            <>
                <Container className="w-10 block-example border border-dark rounded shadow-lg p-5 text-center" id="bio">

                <Container className="d-flex justify-content-around mt-5 profileheader text-center" id="bio">
                {this.state.name} | {this.state.age} | {this.state.city}

            </Container>

            <img
            className="d-block w-10 p-5 text-center"
            src= {this.props.src1}
            alt="First slide"
            height= "500"
            class="center"
            />

            <Container className="bio text-center" id="center" >
                <Col>
                    <ul className="rightbody">
                        <li class="b1" >
                        {this.state.gender} | {this.state.orientation} | {this.state.relationships}
                        </li>

                        <li class="b2">
                        {this.props.looking}
                        </li>

                        <li class="b3">
                        {this.props.facts}
                        </li>

                    </ul>
                </Col>
                <Row>
                    <Col sm={35}>
                        <h1>My self-summary</h1>
                        <p1 className="bodytext">
                        {this.props.selfSummary}
                        </p1>
                    </Col>

                    <Col sm={4} className="pl-2">
                    

                    </Col>
                </Row>
            </Container>
        </Container>

        <Container className="w-10 block-example border border-dark rounded shadow-lg p-5 text-center" id="bio">

                <Container className="d-flex justify-content-around mt-5 profileheader text-center" id="bio">
                {this.props.name} | {this.props.age} | {this.props.city}

            </Container>

            <img
            className="d-block w-10 p-5 text-center"
            src= {this.props.src1}
            alt="First slide"
            height= "500"
            class="center"
            />

            <Container className="bio text-center" id="center" >
                <Col>
                    <ul className="rightbody">
                        <li class="b1" >
                        {this.props.gender} | {this.props.orientation} | {this.props.relationships}
                        </li>

                        <li class="b2">
                        {this.props.looking}
                        </li>

                        <li class="b3">
                        {this.props.facts}
                        </li>

                    </ul>
                </Col>
                <Row>
                    <Col sm={35}>
                        <h1>My self-summary</h1>
                        <p1 className="bodytext">
                        {this.props.selfSummary}
                        </p1>
                    </Col>

                    <Col sm={4} className="pl-2">
                    

                    </Col>
                </Row>
            </Container>
        </Container>

        <Container className="w-10 block-example border border-dark rounded shadow-lg p-5 text-center" id="bio">

                <Container className="d-flex justify-content-around mt-5 profileheader text-center" id="bio">
                {this.props.name} | {this.props.age} | {this.props.city}

            </Container>

            <img
            className="d-block w-10 p-5 text-center"
            src= {this.props.src1}
            alt="First slide"
            height= "500"
            class="center"
            />

            <Container className="bio text-center" id="center" >
                <Col>
                    <ul className="rightbody">
                        <li class="b1" >
                        {this.props.gender} | {this.props.orientation} | {this.props.relationships}
                        </li>

                        <li class="b2">
                        {this.props.looking}
                        </li>

                        <li class="b3">
                        {this.props.facts}
                        </li>

                    </ul>
                </Col>
                <Row>
                    <Col sm={35}>
                        <h1>My self-summary</h1>
                        <p1 className="bodytext">
                        {this.props.selfSummary}
                        </p1>
                    </Col>

                    <Col sm={4} className="pl-2">
                    

                    </Col>
                </Row>
            </Container>
        </Container>
        
        </>
        )
    }
}

export default BasketProfile;