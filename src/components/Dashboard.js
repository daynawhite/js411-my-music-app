import React from 'react';
import useState from 'react';
import { Card, Box, CardContent, Typography } from '@mui/material';
import OnlineSwitch from './Switch';
import '../App.css'


const Dashboard = () => {

    const onlineModeCard = (
        <React.Fragment>
          <CardContent className='card-content'>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Online Mode
            </Typography>
            <Typography sx={{ fontSize: 12, mb: 1.5 }} color="text.secondary">
              Is the application connected to the internet?
            </Typography>
            <OnlineSwitch />
          </CardContent>
        </React.Fragment>
      );

      const masterVolumeCard = (
        <React.Fragment>
          <CardContent className='card-content'>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Master Volume
            </Typography>
            <Typography sx={{ fontSize: 12, mb: 1.5 }} color="text.secondary">
              Overrides all other sound settings in this application
            </Typography>
            
          </CardContent>
        </React.Fragment>
        );

    const soundQualityCard = (
        <React.Fragment>
        <CardContent className='card-content'>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom >
            Sound Quality
            </Typography>
            <Typography sx={{ fontSize: 12, mb: 1.5 }} color="text.secondary">
            Manually control the music quality in event of poor connection
            </Typography>
            
        </CardContent>
        </React.Fragment>
        );
    
    return (
        
        <div className="card-container" >

            <div className="online-mode-card">
            <Box sx={{ width: 200, height: 200 }}>
                <Card variant="outlined">{onlineModeCard}</Card>
            </Box>
            

            </div>

            <div className="master-volume-card">
            <Box sx={{ width: 200, height: 200 }}>
                <Card variant="outlined">{masterVolumeCard}</Card>
            </Box>
            </div>

            <div className="sound-quality-card">
            <Box sx={{ width: 200, height: 200 }}>
                <Card variant="outlined">{soundQualityCard}</Card>
            </Box>
            </div>

        </div>
    )
};



export default Dashboard;