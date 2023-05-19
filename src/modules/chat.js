import '../App.css';
import * as React from 'react';
import { TextField, Typography } from '@mui/material';
import MessageList from "./messageList.js";


function Chat() {
    var [messages, setMessages] = React.useState([]);
    const [inputStateUser, setInputStateUser] = React.useState("");
    const [inputStateMessage, setInputStateMessage] = React.useState("");

    function sendMessage(user, message) {
        setMessages([...messages, 
            {
            user: user,
            message: message,
            id: messages.length + 1
            }
        ]);
    }

    function deleteMessage(id) {
        messages = messages.filter((item) => item.id !== id);
        setMessages(messages);
    }

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
        <div>
            <Typography className="fontTitle" sx={{ mt: 1, mb: 2}}>
                Chat
            </Typography>
            <TextField
                id="user"
                placeholder="Käyttäjänimi"
                value={inputStateUser}
                onChange={(event) => setInputStateUser(event.target.value)}
            />
            <TextField
                sx={{ml: 2}}
                id="message"
                placeholder="Viesti"
                multiline
                value={inputStateMessage}
                onChange={(event) => setInputStateMessage(event.target.value)}
            />
            <button
                className="inputBtn"
                onClick={() => {
                sendMessage(inputStateUser, inputStateMessage)
                setInputStateUser("");
                setInputStateMessage("");
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