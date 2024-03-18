import React from 'react';
import { useState, useEffect } from 'react';
import { Card, Box, CardContent, Typography } from '@mui/material';
import OnlineSwitch from './Switch';
import '../App.css';
import VolumeSlider from './VolumeSlider';
import QualitySelector from './SoundQuality';
// import Notifications from './Notifications';


  

const Dashboard = () => {
  const [quality, setQuality] = useState(2);
  const [onlineStatus, setOnlineStatus] = useState(false);
  const [volume, setVolume] = useState(20);

    const onlineModeCard = (
        <React.Fragment>
          <CardContent className='card-content'>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Online Mode
            </Typography>
            <Typography sx={{ fontSize: 12, mb: 1.5 }} color="text.secondary">
              Is the application connected to the internet?
            </Typography>
            <OnlineSwitch onlineStatus={onlineStatus} setOnlineStatus={setOnlineStatus}/>
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
            <VolumeSlider volume={volume} setVolume={setVolume}/>
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
            <QualitySelector quality={quality} setQuality={setQuality}/>
        </CardContent>
        </React.Fragment>
        );

        const Notifications = () => {
          const [notifications, setNotifications] = useState([]);
          
            // This effect will run whenever `quality`, 'onlineStatus', and/or 'volume' changes
          useEffect(() => {
              // Perform any operations to update `notifications` based on the new `quality`, 'onlineStatus', and/or 'volume' values
              if (!onlineStatus) {notifications.push("Your application is offline. You won't be able to share or stream music to other devices.")};
              if (volume > 80) {notifications.push('Listening to music at a high volume could cause long-term hearing loss.')};
              if (quality === '1') {notifications.push('Music quality is degraded. Increase quality if your connection allows it.')};
                
            setNotifications(notifications);
        
            return () => {
              setNotifications([])
            };
        
            },
             [
              // quality, onlineStatus, volume, 
              notifications]
             );
          
          
            // return (
            // <ul>
            //  {notifications.map((notification, index) => <li key={index}>{notification}</li>)}
            // </ul>
            // )
          };

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
       
        <ul>
          {notifications.map((notification, index) => <li key={index}>{notification}</li>)}
        </ul>
       
      </div>
    )
};



export default Dashboard;