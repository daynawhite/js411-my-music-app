import React from 'react';
import { Box, FormControl, NativeSelect } from '@mui/material';
import { useState } from 'react';

const QualitySelector = () => {
    
    const [quality, setQuality] = useState(2)

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <NativeSelect
          defaultValue={2}
          inputProps={{
            id: 'uncontrolled-native',
          }}
        >
          <option value={1}>Low</option>
          <option value={2}>Normal</option>
          <option value={3}>High</option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
}

export default QualitySelector;