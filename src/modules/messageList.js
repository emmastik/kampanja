import '../App.css';
import * as React from 'react';
import Message from "./message.js"


const MessageList = (props) => {
    const items = props.messageItems.map(item => (
        <div key={item.id}>
            <Message 
            user={item.user}
            message={item.message}
            id={item.id}
            deleteMessage={props.deleteMessage}
            />
        </div>
        
    ));

    return items;
}

export default MessageList;