import './App.css';
import { Card, CardContent } from '@mui/material';
import * as React from 'react';


function App() {

  return (
    <div className="App">
      <header className="header">
        <h2 style={{marginLeft: "3vw"}}>Adoptoi lemmikki, älä osta<br></br>-kampanjasivu</h2>
      </header>
      <Card sx={{ width: "45%", ml: 3 }}> 
        <CardContent>
          
        </CardContent>
      </Card>
      <Card sx={{mt: 6, ml: 3, width: "45%"}}>
        <CardContent>
          
        </CardContent>
      </Card>
      <div>
        {/* <img src="./images/cleo.jpg" alt="cleo" width="400" height="550"/> */}
      </div>
    </div> 
  );
}

export default App;
