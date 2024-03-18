import React from 'react';
import { useState } from 'react';
import Switch from '@mui/material/Switch';


function OnlineSwitch({ onlineStatus, setOnlineStatus }) {
    // const [onlineStatus, setOnlineStatus] = useState(false);

    const handleChange = (event) => {
      setOnlineStatus(event.target.checked)}
    
    return (
        <Switch
        checked={onlineStatus}
        onChange={handleChange} 
        inputProps={{ 'aria-label': 'controlled' }}
        />
    );
  }


  export default OnlineSwitch;