import React from 'react';
// import useState from 'react';
import { Card, Box, CardContent, Typography } from '@mui/material';
import OnlineSwitch from './Switch';
import '../App.css'
import VolumeSlider from './VolumeSlider'
import QualitySelector from './SoundQuality';


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
            <VolumeSlider/>
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
            <QualitySelector/>
        </CardContent>
        </React.Fragment>
        );
    
    return (
      <div>
        <h1>Welcome User!</h1>

        <div className="card-container" >

            <div className="online-mode-card">
            <Box sx={{ width: 200, height: 200 }}>
                <Card variant="outlined">{onlineModeCard}</Card>
            </Box>
            

            </div>

            <div className="master-volume-card">
            <Box sx={{ width: 200, height: 200 }}>
                <Card className="card-content" variant="outlined">{masterVolumeCard}</Card>
            </Box>
            </div>

            <div className="sound-quality-card">
            <Box sx={{ width: 200, height: 200 }}>
                <Card variant="outlined">{soundQualityCard}</Card>
            </Box>
            </div>

        </div>

        <h2>System Notifications:</h2>
      </div>
    )
};



export default Dashboard;