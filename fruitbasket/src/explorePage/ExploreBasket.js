import { render } from "react-dom";
import React from "react";
import "./exploreBasket.css";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import { Component } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import yosemite from './yosemitePic.jpg';
import washington from './washington.jfif';
import jefferson from './jefferson.jpg';
import adams from './adams.jpg';
import Explore from "./explore";
import BasketProfile from "./BasketProfile";
import axios from "axios";


class ExploreGroup extends React.Component {
    constructor(props) { 
        super(props);
        this.state = {
            id1: 0,
            name1 : this.props.name1,
            age1 : this.props.age1,
            city1 : this.props.city1,
            selfSummary1 : this.props.selfSummary1,
            src1 : this.props.src1,
            gender1 : this.props.gender1,
            orientation1 : this.props.orientation1,
            relationships1 : this.props.relationships1,
            looking1: this.props.looking1,
            facts1: this.props.facts1,

            id2: 1,
            name2 : this.props.name2,
            age2 : this.props.age2,
            city2 : this.props.city2,
            selfSummary2 : this.props.selfSummary2,
            src2 : this.props.src2,
            gender2 : this.props.gender2,
            orientation2 : this.props.orientation2,
            relationships2 : this.props.relationships2,
            looking2: this.props.looking2,
            facts2: this.props.facts2,

            id3: 2,
            name3 : this.props.name3,
            age3 : this.props.age3,
            city3 : this.props.city3,
            selfSummary3 : this.props.selfSummary3,
            src3 : this.props.src3,
            gender3 : this.props.gender3,
            orientation3 : this.props.orientation3,
            relationships3 : this.props.relationships3,
            looking3: this.props.looking3,
            facts3: this.props.facts3
        };
     };
    handleChange = () => {
        const url = 'https://fruitbasketapi20211202024943.azurewebsites.net/api/baskets/'+(this.state.id1+1);
        axios.get(url, {
        })
        .then((response) => {
          this.setState({
            id1: response.data.baskets_ID,
            name1 : response.data.baskets_Name,
            age1 : response.data.age,
            city1 : response.data.city,
            selfSummary1 : response.data.selfSummary,
            gender1 : response.data.gender,
            orientation1 : response.data.orientation,
            relationships1 : response.relationships,
            looking1: response.data.looking,
            facts1: response.data.facts,
          }, () => console.log(this.state.id1))
        })

        const url2 = 'https://fruitbasketapi20211202024943.azurewebsites.net/api/baskets/'+(this.state.id2+1);
        axios.get(url2, {
        })
        .then((response2) => {
          this.setState({
            id2: response2.data.baskets_ID,
            name2 : response2.data.baskets_Name,
            age2 : response2.data.age,
            city2 : response2.data.city,
            selfSummary2 : response2.data.selfSummary,
            gender2 : response2.data.gender,
            orientation2 : response2.data.orientation,
            relationships2 : response2.relationships,
            looking2: response2.data.looking,
            facts2: response2.data.facts,
          }, () => console.log(this.state.id2))
        })

        const url3 = 'https://fruitbasketapi20211202024943.azurewebsites.net/api/baskets/'+(this.state.id3+1);
        axios.get(url3, {
        })
        .then((response) => {
          this.setState({
            id3: response.data.baskets_ID,
            name3 : response.data.baskets_Name,
            age3 : response.data.age,
            city3 : response.data.city,
            selfSummary3 : response.data.selfSummary,
            gender3 : response.data.gender,
            orientation3 : response.data.orientation,
            relationships3 : response.relationships,
            looking3: response.data.looking,
            facts3: response.data.facts,
          }, () => console.log(this.state.id3))
        })
     };
     render() {
        return(
        <>
        <Container className="text-center p-3" id="clear">
            <h1>Fruitbaskets</h1>
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
        <div className="rows">

        <Container className="w-10 block-example border border-dark rounded shadow-lg p-5 text-center" id="bio">

        <Container className="d-flex justify-content-around mt-5 profileheader text-center" id="bio">
        {this.state.name2} | {this.state.age2} | {this.state.city2}

        </Container>

        <img
        className="d-block w-10 p-5 text-center"
        src= {this.state.src2}
        alt="First slide"
        height= "500"
        class="center"
        />

        <Container className="bio text-center" id="center" >
        <Col>
            <ul className="rightbody">
                <li class="b1" >
                {this.state.gender2} | {this.state.orientation2} | {this.state.relationships2}
                </li>

                <li class="b2">
                {this.state.looking2}
                </li>

                <li class="b3">
                {this.state.facts2}
                </li>

            </ul>
        </Col>
        <Row>
            <Col sm={35}>
                <h1>My self-summary</h1>
                <p1 className="bodytext">
                {this.state.selfSummary2}
                </p1>
            </Col>

            <Col sm={4} className="pl-2">
            

            </Col>
        </Row>
        </Container>
        </Container>


        <Container className="w-10 block-example border border-dark rounded shadow-lg p-5 text-center" id="bio">

        <Container className="d-flex justify-content-around mt-5 profileheader text-center" id="bio">
        {this.state.name1} | {this.state.age1} | {this.state.city1}

        </Container>

        <img
        className="d-block w-10 p-5 text-center"
        src= {this.state.src1}
        alt="First slide"
        height= "500"
        class="center"
        />

        <Container className="bio text-center" id="center" >
        <Col>
            <ul className="rightbody">
                <li class="b1" >
                {this.state.gender1} | {this.state.orientation1} | {this.state.relationships1}
                </li>

                <li class="b2">
                {this.state.looking1}
                </li>

                <li class="b3">
                {this.state.facts1}
                </li>

            </ul>
        </Col>
        <Row>
            <Col sm={35}>
                <h1>My self-summary</h1>
                <p1 className="bodytext">
                {this.state.selfSummary1}
                </p1>
            </Col>

            <Col sm={4} className="pl-2">
            

            </Col>
        </Row>
        </Container>
        </Container>

       

        <Container className="w-10 block-example border border-dark rounded shadow-lg p-5 text-center" id="bio">

        <Container className="d-flex justify-content-around mt-5 profileheader text-center" id="bio">
        {this.state.name3} | {this.state.age3} | {this.state.city3}

        </Container>

        <img
        className="d-block w-10 p-5 text-center"
        src= {this.state.src3}
        alt="First slide"
        height= "500"
        class="center"
        />

        <Container className="bio text-center" id="center" >
        <Col>
            <ul className="rightbody">
                <li class="b1" >
                {this.state.gender3} | {this.state.orientation3} | {this.state.relationships3}
                </li>

                <li class="b2">
                {this.state.looking3}
                </li>

                <li class="b3">
                {this.state.facts3}
                </li>

            </ul>
        </Col>
        <Row>
            <Col sm={35}>
                <h1>My self-summary</h1>
                <p1 className="bodytext">
                {this.state.selfSummary3}
                </p1>
            </Col>

            <Col sm={4} className="pl-2">
            

            </Col>
        </Row>
        </Container>
        </Container>
        </div>
        </>
        )
     }
}

export default ExploreGroup;