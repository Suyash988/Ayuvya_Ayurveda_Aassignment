'use client'
import * as React from 'react';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import ThumbUpAltTwoToneIcon from '@mui/icons-material/ThumbUpAltTwoTone';
import ThumbDownAltTwoToneIcon from '@mui/icons-material/ThumbDownAltTwoTone';
import { useState } from 'react';


export default function ThumbsButton() {
    const [selected, setSelected] = useState<'up' | 'down' | null>(null);
    
    const handleThumbsUp = () => {
      setSelected('up');
    };
  
    const handleThumbsDown = () => {
      setSelected('down');
    };
    
   return (
    <Stack direction="row" spacing={1}>
      <IconButton aria-label="thumbsup" color={selected === 'up' ? 'success' : 'default'}  className='flex relative hover:text-green-600' onClick={handleThumbsUp}>
        <ThumbUpAltTwoToneIcon   />
        <p className="text-sm p-2 items-center">Yes</p>
      </IconButton>
      <IconButton aria-label="thumbsdown" color={selected === 'down' ? 'error' : 'default'} className='flex relative hover:text-red-600' onClick={handleThumbsDown}>
        <ThumbDownAltTwoToneIcon />
        <p className="text-sm p-2 items-center">No</p>
      </IconButton>
      
    </Stack>
  );
}
