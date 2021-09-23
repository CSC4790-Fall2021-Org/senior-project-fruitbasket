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


const MessagingUI = () => {
    return(
        <div>
            <div style={{ position: "relative", height: "500px" }}>
                <MainContainer>
                    <ChatContainer>
                    <MessageList>
                        <Message
                        model={{
                            message: "Hello my friend",
                            sentTime: "just now",
                            sender: "Joe",
                        }}
                        />
                    </MessageList>
                    <MessageInput placeholder="Type message here" />
                    </ChatContainer>
                </MainContainer>
            </div>
        </div>
    );
};

//route to the fruit basket (write api get request that returns data of the people within the fruit basket)

export default MessagingUI