import '../App.css';
import * as React from 'react';
import { Card, TextField } from '@mui/material';


const Message = (props) => {
    const [edit, setEdit] = React.useState(false);
    const [newMessageInput, setNewMessageInput] = React.useState("")

    return (
        <Card sx={{mt: 1}}>
            <div className="message">
                {props.user}: {edit ? (
                    <>
                        <TextField
                            placeholder={props.message}
                            value={newMessageInput}
                            onChange={(event) => setNewMessageInput(event.target.value)}
                        />
                        <img
                            src="./images/doneBtn.png"
                            alt="done button"
                            className='doneBtn'
                            onClick={() => {
                                props.editMessage(props.id, newMessageInput)
                                setEdit(false)
                            }}
                        />
                    </>
                    ) : (
                        <> 
                            {props.message}
                            <img
                                src="./images/editBtn.png"
                                alt="edit button"
                                className='editBtn'
                                id="edit-button"
                                onClick={() => {
                                    setEdit(true)
                                    props.editMessage(props.id, newMessageInput)
                                }}
                            />
                            <img 
                                src={"./images/deleteBtn.png"} 
                                alt={"delete button"}
                                className="deleteBtn"
                                onClick={() => props.deleteMessage(props.id)}
                            />
                        </>
                )}
            </div>
        </Card>
    )
}

export default Message;
