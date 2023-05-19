import '../App.css';
import * as React from 'react';
import Message from "./message.js"


// Function for listing all messages on chat component
function MessageList(props) {
    const items = props.messageItems.map(item => (
        <div key={item.id}>
            <Message 
                user={item.user}
                message={item.message}
                id={item.id}
                deleteMessage={props.deleteMessage}
                editMessage={props.editMessage}
            />
        </div>
        
    ));

    return items;
}

export default MessageList;