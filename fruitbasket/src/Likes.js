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
                    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3VDmRsVY5y8bLzeM-W9uXIUf9b6K724x2Hg&usqp=CAU" />
                    <Card.Body>
                    <Card.Title>John Quimbo</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://i.pinimg.com/originals/83/ae/96/83ae968fd951fc4860125f4371e21af0.png" />
                    <Card.Body>
                    <Card.Title>Mason Cooper</Card.Title>
                    <Card.Text>
                        This card has supporting text below as a natural lead-in to additional
                        content.{' '}
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://d3r15i91mdrm4u.cloudfront.net/images/2020/6/9/Cunningham4.jpg" />
                    <Card.Body>
                    <Card.Title>Malik Cunningham</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to
                        show that equal height action.
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