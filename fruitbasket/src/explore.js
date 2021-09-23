import "./explore.css";
import "./profile.css";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel"

const Explore = () => {
    return(
        <>
        <Container>
            <h1> Profile</h1>
        </Container>
        
        <Container className="block-example border border-dark rounded shadow-lg">
        <h1> Name </h1>
        <Carousel>
            
            <Carousel.Item interval={1000}>
                <img
                className="d-block w-100"
                src="holder.js/800x400?text=First slide&bg=373940"
                alt="First slide"
                />
            </Carousel.Item>
            
            <Carousel.Item interval={500}>
                <img
                className="d-block w-100"
                src="holder.js/800x400?text=Second slide&bg=282c34"
                alt="Second slide"
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100"
                src="holder.js/800x400?text=Third slide&bg=20232a"
                alt="Third slide"
                />
            </Carousel.Item>
            </Carousel>

        </Container>
        </>
    );
};

export default Explore