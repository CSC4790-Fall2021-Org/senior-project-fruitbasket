import "./profile.css";
import Card from 'react-bootstrap/Card'
import { CardGroup } from "react-bootstrap";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

const Likes = () => {
    return(
        <div>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src="https://www.looper.com/img/gallery/things-only-adults-notice-in-shrek/intro-1573597941.jpg" />
                    <Card.Body>
                    <Card.Title>John Quimbo</Card.Title>
                    <Card.Text>
                        You know donkey things are more than they seem.
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://www.looper.com/img/gallery/things-only-adults-notice-in-shrek/intro-1573597941.jpg" />
                    <Card.Body>
                    <Card.Title>Mason Cooper</Card.Title>
                    <Card.Text>
                        Ogres are like onions. Onions have layers. Ogres have layers{' '}
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://www.looper.com/img/gallery/things-only-adults-notice-in-shrek/intro-1573597941.jpg" />
                    <Card.Body>
                    <Card.Title>Malik Cunningham</Card.Title>
                    <Card.Text>
                        What are you doing in my swamp?!
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
            </CardGroup>
            
        </div>
    );
};

//route to the fruit basket (write api get request that returns data of the people within the fruit basket)

export default Likes