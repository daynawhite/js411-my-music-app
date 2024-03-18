import React from 'react';
import { Box, FormControl, NativeSelect } from '@mui/material';
import { useState } from 'react';

const QualitySelector = ({ quality, setQuality }) => {

    // const [quality, setQuality] = useState(2)

    const handleChange = (event) => {
        const {
          target: { value },
        } = event;
        setQuality(value);
      };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <NativeSelect
          onChange={handleChange}
          defaultValue={quality}
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