import './App.css';
import { Card, CardContent, Grid } from '@mui/material';
import * as React from 'react';
import TabToolbar from './modules/tabToolbar.js';
import Chat from './modules/chat.js';


// Main app function, shows all content on the page
function App() {
  /* Includes components and modules for the info panel with tabs, chat and kitty pictures */
  return (
    <div className="App">
      <header className="header">
        <h2 style={{marginLeft: "3vw"}}>Adoptoi lemmikki, älä osta<br></br>-kampanjasivu</h2>
      </header>
      <Grid container direction="row" justifyContent="flex-start"> 
        <Grid item xs={10} md={6} lg={6}>
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
        <Grid item xs={5} lg={5} sx={{display: "flex"}}>
          <img
            src="./images/cleo.JPG"
            alt="Cleo"
            className='imgCleo'
          />
          <img
            src="./images/harmi.JPG"
            alt="Harmi"
            className='imgHarmi'
          />
        </Grid>
      </Grid>
    </div> 
  );
}

export default App;
