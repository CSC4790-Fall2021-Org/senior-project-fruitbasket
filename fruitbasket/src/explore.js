import "./explore.css";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel"
import Button from "react-bootstrap/Button"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useCallback, useState } from "react";
import yosemite from './yosemitePic.jpg';
import yosemite2 from './yosemitePic2.jfif';
import yosemite3 from './yosemitePic3.jfif';
import ExploreIndivual from "./ExploreIndivual";


const Explore = () => {

    const initialValues = { 
        name: 'John Smith',
        age: '79',
        city: 'Villanova, PA',
        selfSummary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        doing: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        goodat: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        style: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        src1: "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg",
        src2: "https://ichef.bbci.co.uk/news/999/cpsprodpb/15951/production/_117310488_16.jpg",
        src3: "https://play-lh.googleusercontent.com/proxy/2tj1HTTkxfLUCHMYCMY7Ik_u9Dv-ctrQ7tteluo8MkL9bUzSFutbEcvkGroJxU6PTS84IHjfzCYjRsCflXcZ5k_CV2OAD2Al4i_fUCrb6cBVNvtB4TZhu97Z=w720-h405-rw"
     };
    const [values, setValues] = useState(initialValues);
    const handleChange = () => {                
        setValues({
          name: "Yosemite",  
          age: '1098',
          city: 'Yosemite, CA',
          selfSummary: 'Park',
          doing: 'being a place',
          goodat: 'having sun, air, and grass',
          style: 'lots of waterfalls',
          src1: yosemite,
          src2: yosemite2,
          src3: yosemite3
        });

    };

    return(
        <ExploreIndivual></ExploreIndivual>
        /*<>
        <Container className="text-center p-3">
            <h1> Recommended For You</h1>
        </Container>
        
        <Container className="block-example border border-dark rounded shadow-lg">

        <Container className="d-flex justify-content-around mt-5 profileheader">
         {values.name} | {values.age} | {values.city}
                <Button className="like-button btn-outline-dark bg-transparent" onClick={handleChange}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                    </svg>
                PASS
              </Button>

                <Button className="like-button btn-outline-danger bg-transparent" onClick={handleChange}>
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
                src= {values.src1}
                alt="First slide"
                />
            </Carousel.Item>
            
            <Carousel.Item interval={500}>
                <img
                className="d-block w-100"
                src= {values.src2}
                alt="Second slide"
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100"
                src= {values.src3}
                alt="Third slide"
                />
            </Carousel.Item>
            </Carousel>

            <Container className="bio p-5">

                <Row>
                    <Col sm={8}>
                        <h1>My self-summary</h1>
                        <p1 className="bodytext">
                        {values.selfSummary}
                        </p1>
                        <h1>What I'm doing with my life</h1>
                        <p1 className="bodytext">
                        {values.doing}
                        </p1>
                        <h1>I'm really good at</h1>
                        <p1 className="bodytext">
                        {values.goodat}
                        </p1>
                        <h1>My style can be described as</h1>
                        <p1 className="bodytext">
                       {values.style}
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
        </>*/
    );
};

export default Explore
