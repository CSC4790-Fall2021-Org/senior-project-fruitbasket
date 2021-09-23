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
import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
} from "@chatscope/chat-ui-kit-react";
import MessagingUI from "./MessagingUI";
import Group from "./Group";


const BasketUI = () => {
    return(
        <div>
            <MessagingUI></MessagingUI>
        </div>
    );
};

//route to the fruit basket (write api get request that returns data of the people within the fruit basket)

export default BasketUI