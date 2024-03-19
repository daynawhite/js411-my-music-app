import React from 'react';
import { useState } from 'react';
import { Card, Box, CardContent, Typography, Switch, Slider, NativeSelect } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import '../App.css';

 

const Dashboard = () => {
 
  const [onlineStatus, setOnlineStatus] = useState(false);
  const PinkSwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: pink[600],
      '&:hover': {
        backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
      },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: pink[600],
    },
  }));

    const onlineModeCard = (
        <React.Fragment>
          <CardContent className='card-content'>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Online Mode
            </Typography>
            <Typography sx={{ fontSize: 12, mb: 1.5 }} color="text.secondary">
              Is the application connected to the internet?
            </Typography>
            <PinkSwitch 
            checked={onlineStatus}
            onChange={()=> setOnlineStatus(!onlineStatus)} 
            inputProps={{ 'aria-label': 'controlled' }}
             />
          </CardContent>
        </React.Fragment>
      );

    const [volume, setVolume] = useState(20);
    const handleSliderChange = (event, newValue) => {
      setVolume(newValue);
      };


      const masterVolumeCard = (
        <React.Fragment>
          <CardContent className='card-content'>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Master Volume
            </Typography>
            <Typography sx={{ fontSize: 12, mb: 1.5 }} color="text.secondary">
              Overrides all other sound settings in this application
            </Typography>
            <Slider 
                aria-label="Volume" 
                value={volume} 
                onChange={handleSliderChange} 
                shiftStep={10}
                min={0}
                max={100} />
          </CardContent>
        </React.Fragment>
        );

    const [soundQuality, setSoundQuality] = useState(2);
    const handleQualityChange = (event) => {
      const {
        target: { value },
        } = event;
        setSoundQuality(value);
      };

    const soundQualityCard = (
        <React.Fragment>
        <CardContent className='card-content'>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom >
            Sound Quality
            </Typography>
            <Typography sx={{ fontSize: 12, mb: 1.5 }} color="text.secondary">
            Manually control the music quality in event of poor connection
            </Typography>
            <NativeSelect
              onChange={handleQualityChange}
              defaultValue={soundQuality}
              inputProps={{
                id: 'uncontrolled-native',
              }}
              >
              <option value={1}>Low</option>
              <option value={2}>Normal</option>
              <option value={3}>High</option>
            </NativeSelect>
        </CardContent>
        </React.Fragment>
        );

    return (
      <div>
        <h1>Welcome User!</h1>

        <div className="card-container" >

            <div className="online-mode-card">
            <Box sx={{ width: 200, height: 200 }}>
                <Card sx={{ width: 200, minHeight: 170 }} variant="outlined">{onlineModeCard}</Card>
            </Box>
            </div>

            <div className="master-volume-card">
            <Box sx={{ width: '200px', height: '200px' }}>
                <Card sx={{ width: 200, minHeight: 170 }} className="card-content" variant="outlined">{masterVolumeCard}</Card>
            </Box>
            </div>

            <div className="sound-quality-card">
            <Box sx={{ width: 200, height: 200 }}>
                <Card sx={{ width: 200, minHeight: 170 }} variant="outlined">{soundQualityCard}</Card>
            </Box>
            </div>

        </div>
        
        <h2>System Notifications:</h2>
       
        <ul>
          {!onlineStatus && <li>Your application is offline. You won't be able to share or stream music to other devices.</li>}
          {volume > 80 && <li>Listening to music at a high volume could cause long-term hearing loss.</li>}
          {soundQuality === '1' && <li>Music quality is degraded. Increase quality if your connection allows it.</li>}
        
        </ul>
       
      </div>
    )
};



export default Dashboard;