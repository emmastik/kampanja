import './App.css';
import { Card, CardContent, Grid, ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import * as React from 'react';
import TabToolbar from './modules/tabToolbar.js';
import Chat from './modules/chat.js';


// Main app function, shows all content on the page
function App() {
  const itemData = [
    {
      img: "./images/cleo.JPG",
      title: "Cleo",
    },
    {
      img: "./images/harmi.JPG",
      title: "Harmi"
    },
  ];

  return (
    <div className="App">
      <header className="header">
        <h2 style={{marginLeft: "3vw"}}>Adoptoi lemmikki, älä osta<br></br>-kampanjasivu</h2>
      </header>
      <Grid container direction="row" justifyContent="flex-start"> 
        <Grid item xs={10} lg={6}>
          <Card sx={{ minWidth: "45%", maxWidth: "90%", ml: 3 }}> 
            <CardContent>
              <TabToolbar />
            </CardContent>
          </Card>
          <Card sx={{mt: 6, ml: 3, minWidth: "45%", maxWidth: "90%"}}>
            <CardContent>
              <Chat />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={5} lg={5}>
          <ImageList sx={{width: "100%", height: "100%" }} cols={2}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                />
                <ImageListItemBar 
                  sx={{background: "transparent"}}
                  title={item.title}
                  position='top'
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Grid>
      </Grid>
    </div> 
  );
}

export default App;
