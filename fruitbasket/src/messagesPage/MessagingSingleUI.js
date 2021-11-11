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
  TypingIndicator,
  MessageSeparator,
  Avatar,
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
} from "@chatscope/chat-ui-kit-react";


const MessagingSingleUI = () => {
    return(
        <div style={{
            height: "500px"
          }}>
                <ChatContainer>        
                  <MessageList typingIndicator={<TypingIndicator content="Joe is typing" />}>
                  
                    <MessageSeparator content="Saturday, 30 November 2019" />
                    
                    <Message model={{
                  message: "Hello my friend",
                  sentTime: "15 mins ago",
                  sender: "Joe",
                  direction: "incoming",
                  position: "single"
                }}>
                      <Avatar src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/shrek-forever-after-1587549453.jpg?crop=0.676xw:0.901xh;0.0969xw,0&resize=480:*" name={"Joe"} />
                    </Message>
                    
                    <Message model={{
                  message: "Hello my friend",
                  sentTime: "15 mins ago",
                  sender: "Joe",
                  direction: "outgoing",
                  position: "single"
                }} />
                    
                    <Message model={{
                  message: "Hello my friend",
                  sentTime: "15 mins ago",
                  sender: "Joe",
                  direction: "incoming",
                  position: "first"
                }} avatarSpacer />
                    <Message model={{
                  message: "Hello my friend",
                  sentTime: "15 mins ago",
                  sender: "Joe",
                  direction: "incoming",
                  position: "normal"
                }} avatarSpacer />
                    <Message model={{
                  message: "Hello my friend",
                  sentTime: "15 mins ago",
                  sender: "Joe",
                  direction: "incoming",
                  position: "normal"
                }} avatarSpacer />
                    <Message model={{
                  message: "Hello my friend",
                  sentTime: "15 mins ago",
                  sender: "Joe",
                  direction: "incoming",
                  position: "last"
                }}>
                      <Avatar src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/shrek-forever-after-1587549453.jpg?crop=0.676xw:0.901xh;0.0969xw,0&resize=480:*" name={"Joe"} />
                    </Message>
                    
                    <Message model={{
                  message: "Hello my friend",
                  sentTime: "15 mins ago",
                  sender: "Joe",
                  direction: "outgoing",
                  position: "first"
                }} />
                    <Message model={{
                  message: "Hello my friend",
                  sentTime: "15 mins ago",
                  sender: "Joe",
                  direction: "outgoing",
                  position: "normal"
                }} />
                    <Message model={{
                  message: "Hello my friend",
                  sentTime: "15 mins ago",
                  sender: "Joe",
                  direction: "outgoing",
                  position: "normal"
                }} />
                    <Message model={{
                  message: "Hello my friend",
                  sentTime: "15 mins ago",
                  sender: "Joe",
                  direction: "outgoing",
                  position: "last"
                }} />
                    
                    <Message model={{
                  message: "Hello my friend",
                  sentTime: "15 mins ago",
                  sender: "Joe",
                  direction: "incoming",
                  position: "first"
                }} avatarSpacer />
                    <Message model={{
                  message: "Hello my friend",
                  sentTime: "15 mins ago",
                  sender: "Joe",
                  direction: "incoming",
                  position: "last"
                }}>
                      <Avatar src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/shrek-forever-after-1587549453.jpg?crop=0.676xw:0.901xh;0.0969xw,0&resize=480:*" name={"Joe"} />
                    </Message>
                                      
                    <MessageSeparator content="Saturday, 31 November 2019" />
                    
                    <Message model={{
                  message: "Hello my friend",
                  sentTime: "15 mins ago",
                  sender: "Joe",
                  direction: "incoming",
                  position: "single"
                }}>
                      <Avatar src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/shrek-forever-after-1587549453.jpg?crop=0.676xw:0.901xh;0.0969xw,0&resize=480:*" name={"Joe"} />
                    </Message>
                    
                    <Message model={{
                  message: "Hello my friend",
                  sentTime: "15 mins ago",
                  sender: "Joe",
                  direction: "outgoing",
                  position: "single"
                }} />
                    
                    <Message model={{
                  message: "Hello my friend",
                  sentTime: "15 mins ago",
                  sender: "Joe",
                  direction: "incoming",
                  position: "first"
                }} avatarSpacer />
                    <Message model={{
                  message: "Hello my friend",
                  sentTime: "15 mins ago",
                  sender: "Joe",
                  direction: "incoming",
                  position: "normal"
                }} avatarSpacer />
                    <Message model={{
                  message: "Hello my friend",
                  sentTime: "15 mins ago",
                  sender: "Joe",
                  direction: "incoming",
                  position: "normal"
                }} avatarSpacer />
                    <Message model={{
                  message: "Hello my friend",
                  sentTime: "15 mins ago",
                  sender: "Joe",
                  direction: "incoming",
                  position: "last"
                }}>
                      <Avatar src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/shrek-forever-after-1587549453.jpg?crop=0.676xw:0.901xh;0.0969xw,0&resize=480:*" name={"Joe"} />
                    </Message>
                    
                    <Message model={{
                  message: "Hello my friend",
                  sentTime: "15 mins ago",
                  sender: "Joe",
                  direction: "outgoing",
                  position: "first"
                }} />
                    <Message model={{
                  message: "Hello my friend",
                  sentTime: "15 mins ago",
                  sender: "Joe",
                  direction: "outgoing",
                  position: "normal"
                }} />
                    <Message model={{
                  message: "Hello my friend",
                  sentTime: "15 mins ago",
                  sender: "Joe",
                  direction: "outgoing",
                  position: "normal"
                }} />
                    <Message model={{
                  message: "Hello my friend",
                  sentTime: "15 mins ago",
                  sender: "Joe",
                  direction: "outgoing",
                  position: "last"
                }} />
                    
                    <Message model={{
                  message: "Hello my friend",
                  sentTime: "15 mins ago",
                  sender: "Joe",
                  direction: "incoming",
                  position: "first"
                }} avatarSpacer />
                    <Message model={{
                  message: "Hello my friend",
                  sentTime: "15 mins ago",
                  sender: "Joe",
                  direction: "incoming",
                  position: "last"
                }}>
                      <Avatar src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/shrek-forever-after-1587549453.jpg?crop=0.676xw:0.901xh;0.0969xw,0&resize=480:*" name={"Joe"} />
                    </Message>
                    
                  </MessageList>        
                </ChatContainer>
              </div>
    );
};

//route to the fruit basket (write api get request that returns data of the people within the fruit basket)

export default MessagingSingleUI