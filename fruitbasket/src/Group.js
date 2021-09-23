import "./profile.css";
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';
import BasketUI from "./BasketUI";
import React from 'react';
import Button from 'react-bootstrap/Button'

class Group extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showing: true };
      }

    buttonClick(){
        this.setState({ showing: true })
    }
    
    render() {
        const { showing } = this.state;
        return(
        <div>
            {showing ?
            <div>
                <Row xs={1} md={2} className="g-4">
                    {Array.from({ length: 4 }).map((_, idx) => (
                    <Col>

                    <Router>
                        <Link to={'/basket'} onClick={() => this.setState({ showing: !showing })}>   
                            <Card hoverable>
                                <Card.Img variant="top" src="https://media.istockphoto.com/photos/multi_ethnic-teenagers-taking-a-self-portrait-stock-photo-picture-id1184216653?k=20&m=1184216653&s=612x612&w=0&h=T6xt_a6r-fmG0l3dzX-EHbVPQkJQeY-VX4zb7skIbPQ=" />
                                <Card.Body>
                                <Card.Title>Fruit Basket name</Card.Title>
                                <Card.Text>
                                    Members of the Fruit Basket
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Router>
                    </Col>
                        ))}
                </Row>
            </div>
            : null
            }
            
            {!showing ?
                <div>
                    <Button variant="primary" onClick={() => this.setState({ showing: true })}>Back to Baskets</Button>{' '}
                    <Button variant="outline-warning">Basket Join Requests</Button>{' '}
                    <BasketUI></BasketUI>
                </div>
            : null
            }
        </div>
        );
        };
        
    }

//route to the fruit basket (write api get request that returns data of the people within the fruit basket)


export default Group