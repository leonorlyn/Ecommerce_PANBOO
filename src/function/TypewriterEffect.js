import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';

function TypewriterEffect({ text, speed = 100, ...typographyProps }) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(displayedText + text.charAt(currentIndex));
        setCurrentIndex(currentIndex + 1);
      }, speed);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, displayedText, text, speed]);

  return <Typography {...typographyProps}>{displayedText}</Typography>;
}

export default TypewriterEffect;
