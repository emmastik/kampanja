import '../App.css';
import * as React from 'react';
import { Card } from '@mui/material';


const Message = (props) => {
    return (
        <Card sx={{mt: 1}}>
            <div className="message">
                {props.user}: {props.message}
            
                <img
                src={"./images/editBtn.png"} 
                alt={"edit button"}
                className='editBtn'
                onClick={() => props.editMessage(props.id)}
                />
                <img 
                src={"./images/deleteBtn.png"} 
                alt={"delete button"}
                className="deleteBtn"
                onClick={() => props.deleteMessage(props.id)}
                />
            </div>
        </Card>
    )
}

export default Message;