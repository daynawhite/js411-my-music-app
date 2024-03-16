import React from 'react';
import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Dashboard from './components/Dashboard'
import { Button, TextField, Box } from '@mui/material';


const App = () => {

  const [loggedIn, setLoggedIn] = useState(false)

  if (loggedIn) {
  return (
    <div className="App">
       <Dashboard/>
    </div>
  )}

  else {
    return (
      <div className="App">
        
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      > 
        <TextField id="filled-basic" label="UserName*" variant="filled" />
        <br/>
        <TextField id="filled-basic" label="Password*" variant="filled" />
        <br/>
       
        <Button  
            variant="contained"
            onClick={() => {
              setLoggedIn(true);
            }} 
          >Login
        </Button>
      </Box>
        
      </div>
    )
  };
};

function WrappedApp() {
  
  return (
  
    <NavBar>
      <App />
    </NavBar>
    
  );
}

export default WrappedApp;
