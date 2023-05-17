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

    function editMessage(id) {
        
    }

      
    return (
        <div>
            <Typography className="fontTitle" sx={{ mt: 2, mb: 2}}>
                Chat - jätä kommentti kampanjasivulle tai regoi toisen kommenttiin!
            </Typography>
            <TextField
                id="user"
                placeholder="Käyttäjänimi"
                multiline
                value={inputStateUser}
                onChange={(event) => setInputStateUser(event.target.value)}
            />
            <TextField
                id="message"
                placeholder="Viesti"
                multiline
                value={inputStateMessage}
                onChange={(event) => setInputStateMessage(event.target.value)}
            />
            <button
                className="input-button"
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
                />
            </div>
        </div>    
    )
}

export default Chat;