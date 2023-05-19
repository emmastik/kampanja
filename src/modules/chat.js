import '../App.css';
import * as React from 'react';
import { TextField, Typography } from '@mui/material';
import MessageList from "./messageList.js";


// Main function for the chat component
function Chat() {
    var [messages, setMessages] = React.useState([]); // hook for message list
    const [inputStateUser, setInputStateUser] = React.useState(""); // hook for username input field
    const [inputStateMessage, setInputStateMessage] = React.useState(""); //hook for message input field

    // Function that adds message to messages array when send button is clicked
    function sendMessage(user, message) {
        setMessages([...messages, 
            {
            user: user,
            message: message,
            id: messages.length + 1
            }
        ]);
    }

    // Function that deletes message when delete button is clicked
    function deleteMessage(id) {
        messages = messages.filter((item) => item.id !== id);
        setMessages(messages);
    }

    // Function that allows message text editing when edit button is clicked
    function editMessage(id, newMessage) { 
        setMessages(messages.map((message) => {
            if (message.id === id) {
                return {
                    ...message,
                    message: newMessage
                }
            }
            return message;
        }))
        
    }

      
    return (
        /* Includes all components for the chat, including input fields, send button and messages */
        <div>
            <Typography className="fontTitle" sx={{ mt: 1, mb: 2}}>
                Chat
            </Typography>
            <TextField
                id="user"
                placeholder="Käyttäjänimi *"
                value={inputStateUser}
                onChange={(event) => setInputStateUser(event.target.value)}
            />
            <TextField
                sx={{ml: 2}}
                id="message"
                placeholder="Viesti *"
                multiline
                value={inputStateMessage}
                onChange={(event) => setInputStateMessage(event.target.value)}
            />
            <button
                className="inputBtn"
                onClick={() => {
                    if (inputStateMessage !== "" && inputStateUser !== "") {
                        sendMessage(inputStateUser, inputStateMessage)
                        setInputStateUser("");
                        setInputStateMessage("");
                    }
                }}
            >
                Lähetä
            </button>
            <div>
                <MessageList 
                    messageItems={messages}
                    deleteMessage={deleteMessage}
                    editMessage={editMessage}
                />
            </div>
        </div>    
    )
}

export default Chat;