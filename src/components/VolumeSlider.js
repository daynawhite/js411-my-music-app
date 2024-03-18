import React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Stack from '@mui/material/Stack';

const VolumeSlider = ({ volume, setVolume }) => {
//   const [volume, setVolume] = useState(20);

  const handleChange = (event, newValue) => {
    setVolume(newValue);
  };

  return (
    <Box sx={{ width: 200 }}>
      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
        <Slider 
        aria-label="Volume" 
        value={volume} 
        onChange={handleChange}
        shiftStep={10}
        min={0}
        max={100} />
      </Stack>
    </Box>
  );
}


// const VolumeSlider = () => {
//     const [volume, setVolume] = useState(20)
//   return (
//     <Box sx={{ width: 180 }}>
//       <Slider
//         // padding={30}
//         // width={180}
//         defaultValue={20}
//         getAriaValueText={valuetext}
//         valueLabelDisplay="auto"
//         shiftStep={10}
//         step={10}
//         marks
//         min={10}
//         max={100}
//       />
//     </Box>
//   );
// }


  export default VolumeSlider;