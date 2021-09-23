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
import Button from 'react-bootstrap/Button'

const BasketUI = () => {
    return(
        <div>
            <Button variant="outline-warning">Basket Join Requests</Button>{' '}
        </div>
    );
};

//route to the fruit basket (write api get request that returns data of the people within the fruit basket)

export default BasketUI