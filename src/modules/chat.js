import '../App.css';
import * as React from 'react';
import { TextField } from '@mui/material';
import Message from "./message.js"


function Chat() {
    const [message, setMessage] = React.useState("");
    const [messages, setMessages] = React.useState([]);
    const [user, setUser] = React.useState("");
    const [inputState, setInputState] = React.useState("");

    function sendMessage() {

    }

    return (
        <div>
            <TextField
                id="user"
                placeholder="Käyttäjänimi"
                multiline
            />
            <TextField
                id="message"
                placeholder="Viesti"
                multiline
            />
            <button
                className="input-button"
                onClick={() => {
                sendMessage()
                setInputState("");
                }}
            >
                Lähetä
            </button>
        </div>    
    )
}

export default Chat;