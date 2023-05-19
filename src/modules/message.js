import '../App.css';
import * as React from 'react';
import { Box, Card, Grid, Rating, TextField, styled } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


const Message = (props) => {
    const [edit, setEdit] = React.useState(false);
    const [newMessageInput, setNewMessageInput] = React.useState("")

    const StyledRating = styled(Rating)({
        '& .MuiRating-iconFilled': {
          color: '#ff6d75',
        },
        '& .MuiRating-iconHover': {
          color: '#ff3d47',
        },
    });


    return (
        <Card sx={{mt: 1}}>
            <div className="message">
                {edit ? (
                    <>
                        {props.user + ": " }
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
                        <Grid container direction="row" justifyContent="center">
                            {(props.message.includes(" ")) ? (
                                <Grid item xs={8} lg={6} className='keepText'>
                                    {props.user + ": " + props.message}
                                </Grid>
                            ) : (
                                <Grid item xs={8} lg={6} className='breakText'>
                                    {props.user + ": " + props.message}
                                </Grid>
                            )}
                            <Grid item xs={4} lg={2}>
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
                            </Grid>
                            <Grid item xs={6} lg={3}>
                                <Box
                                    sx={{
                                        '& > legend': { mt: 2 }
                                    }}
                                    >
                                    <StyledRating
                                        name="customized-color"
                                        defaultValue={0}
                                        getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                                        precision={1}
                                        icon={<FavoriteIcon fontSize="inherit" />}
                                        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                                    />
                                </Box>
                            </Grid>
                        </Grid>
                )}
            </div>
        </Card>
    )
}

export default Message;
