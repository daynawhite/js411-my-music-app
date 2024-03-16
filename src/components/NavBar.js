import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';


const NavBar = ({ children }) => {
    return (
      <header>
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
        </Toolbar>
      </AppBar>
      </Box>
        {children}
      </header>
    );
  };

  export default NavBar;

