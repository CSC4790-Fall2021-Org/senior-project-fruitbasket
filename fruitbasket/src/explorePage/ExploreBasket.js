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


class ExploreGroup extends React.Component {
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
            <BasketProfile 
                name="Thomas Adams"
                age= '28'
                city= 'San Francisco, CA'
                selfSummary= 'I work in the tech industry'
                src1= {"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}
                gender="Bigender"
                orientation= "Queer"
                relationships= "Polyamorous"
                looking= "A nice group of peopl"
                facts="I have two dogs"
            ></BasketProfile>
            <BasketProfile 
                name="John Washington"
                age= "32"
                city="Richmond, VA"
                selfSummary="I work as a doctor"
                src1 = {"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}
                gender = "Male"
                orientation = "Straight"
                relationships="Polyamorous"
                looking= "Someone I share interests with"
                facts="I have a lizard"
            ></BasketProfile>
            <BasketProfile 
                name="George Jefferson" 
                age= '52'
                city= 'New York, NY'
                selfSummary= 'I work as a banker'
                src1= {"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}
                gender="Male"
                orientation="Bisexual"
                relationships="Polyamorous"
                looking="Someone to get old with"
                facts="I have chihuahua"
            ></BasketProfile>
        </div>
        </>
        )
     }
}

export default ExploreGroup;