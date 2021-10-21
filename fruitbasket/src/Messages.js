import {
    ConversationList,
    Conversation,
    Avatar,
  } from "@chatscope/chat-ui-kit-react";

const Messages = () => {
    return(
        <div>
            <div style={{
            height: "500px"
            }}>
                <ConversationList>        
                    <Conversation name="Lilly" lastSenderName="Lilly" info="Yes i can do it for you">
                    <Avatar src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/shrek-forever-after-1587549453.jpg?crop=0.676xw:0.901xh;0.0969xw,0&resize=480:*" name="Lilly" />
                    </Conversation>
                    
                    <Conversation name="Joe" lastSenderName="Joe" info="Yes i can do it for you">
                    <Avatar src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/shrek-forever-after-1587549453.jpg?crop=0.676xw:0.901xh;0.0969xw,0&resize=480:*" name="Joe" />
                    </Conversation>
                    
                    <Conversation name="Emily" lastSenderName="Emily" info="Yes i can do it for you">
                    <Avatar src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/shrek-forever-after-1587549453.jpg?crop=0.676xw:0.901xh;0.0969xw,0&resize=480:*" name="Emily" />
                    </Conversation>
                    
                    <Conversation name="Kai" lastSenderName="Kai" info="Yes i can do it for you">
                    <Avatar src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/shrek-forever-after-1587549453.jpg?crop=0.676xw:0.901xh;0.0969xw,0&resize=480:*" name="Kai" />
                    </Conversation>
                                
                    <Conversation name="Akane" lastSenderName="Akane" info="Yes i can do it for you">
                    <Avatar src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/shrek-forever-after-1587549453.jpg?crop=0.676xw:0.901xh;0.0969xw,0&resize=480:*" name="Akane" />
                    </Conversation>
                                        
                    <Conversation name="Eliot" lastSenderName="Eliot" info="Yes i can do it for you">
                    <Avatar src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/shrek-forever-after-1587549453.jpg?crop=0.676xw:0.901xh;0.0969xw,0&resize=480:*" name="Eliot" />
                    </Conversation>
                                                        
                    <Conversation name="Zoe" lastSenderName="Zoe" info="Yes i can do it for you">
                    <Avatar src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/shrek-forever-after-1587549453.jpg?crop=0.676xw:0.901xh;0.0969xw,0&resize=480:*" name="Zoe" />
                    </Conversation>
                                                                    
                    <Conversation name="Patrik" lastSenderName="Patrik" info="Yes i can do it for you">
                    <Avatar src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/shrek-forever-after-1587549453.jpg?crop=0.676xw:0.901xh;0.0969xw,0&resize=480:*" name="Patrik" />
                    </Conversation>
                    
                </ConversationList>
            </div>
        </div>
        );
    };

export default Messages