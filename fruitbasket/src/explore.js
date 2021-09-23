import "./explore.css";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel"
import Button from "react-bootstrap/Button"

const Explore = () => {
    return(
        <>
        <Container className="text-center p-3">
            <h1> Recommended For You</h1>
        </Container>
        
        <Container className="block-example border border-dark rounded shadow-lg">

        <Container className="d-flex justify-content-around mt-5 profileheader">
         John Smith | Age 79 | Villanova, PA
        <Button className="rounded-pill" size="lg"> PASS </Button>
        <Button className="rounded-pill" size="lg"> LIKE </Button>
        </Container>

        <Carousel className="explorecarousel m-5">
            
            <Carousel.Item interval={1000}>
                <img
                className="d-block w-100"
                src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
                alt="First slide"
                />
            </Carousel.Item>
            
            <Carousel.Item interval={500}>
                <img
                className="d-block w-100"
                src="https://ichef.bbci.co.uk/news/999/cpsprodpb/15951/production/_117310488_16.jpg"
                alt="Second slide"
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://play-lh.googleusercontent.com/proxy/2tj1HTTkxfLUCHMYCMY7Ik_u9Dv-ctrQ7tteluo8MkL9bUzSFutbEcvkGroJxU6PTS84IHjfzCYjRsCflXcZ5k_CV2OAD2Al4i_fUCrb6cBVNvtB4TZhu97Z=w720-h405-rw"
                alt="Third slide"
                />
            </Carousel.Item>
            </Carousel>

        <Container className="bio p-5">
        <h1>Bio</h1>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Container>

        </Container>
        

        
        </>
    );
};

export default Explore