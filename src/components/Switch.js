import React from 'react';
import Switch from '@mui/material/Switch';

export default function BasicSwitch() {
    const label = { inputProps: { 'aria-label': 'Switch demo' } };

    return (
      <div>
       
        <Switch {...label} />

      </div>
    );
  }