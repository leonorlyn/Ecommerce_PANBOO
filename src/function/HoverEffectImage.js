import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';

const HoverEffectImage = ({ imageUrl }) => {
  const theme = useTheme(); // 使用useTheme钩子获取主题
  const [isHovered, setIsHovered] = useState(false);

  // 基础样式
  const baseStyle = {
    width: '80%',
    height: '400px',
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '20px',
    transition: 'transform 0.3s ease, filter 0.3s ease, box-shadow 0.3s ease',
  };

  // 悬停样式，包含从主题中获取的彩色阴影
  const hoveredStyle = {
    ...baseStyle,
    boxShadow: `0 0 10px ${theme.palette.secondary.dark}`, 
    transform: 'scale(1.08)',
  };

  return (
    <div
      style={isHovered ? hoveredStyle : baseStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    />
  );
};

export default HoverEffectImage;
