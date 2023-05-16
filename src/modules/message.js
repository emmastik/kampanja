import '../App.css';
import * as React from 'react';
import { Card } from '@mui/material';

const Message = (props) => {
    return (
        <Card>
            <div className="message">
                {props.user}: {props.message}
            </div>
        </Card>
    )
}

export default Message;