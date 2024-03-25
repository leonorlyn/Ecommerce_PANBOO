import React, { useState } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const SliderComponent = ({ slides }) => {
  const [hoverStates, setHoverStates] = useState({});


  const handleMouseEnter = (index) => {
    setHoverStates((prevStates) => ({
      ...prevStates,
      [index]: true, 
    }));
  };


  const handleMouseLeave = (index) => {
    setHoverStates((prevStates) => ({
      ...prevStates,
      [index]: false, 
    }));
  };

  return (
    <AwesomeSlider>
      {slides.map((slide, index) => (
        <div
          key={index}
          data-src={slide.imageUrl}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave(index)}
        >
          <div
            className="overlay"
            style={{
              position: 'absolute',
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.2)',
              color: '#fff',
              width: '100%',
              padding: '10px',
              textAlign: 'left',
              display: hoverStates[index] ? 'block' : 'none', 
            }}
          >
            <h3>{slide.location}</h3>
            <p>{slide.description}</p>
          </div>
        </div>
      ))}
    </AwesomeSlider>
  );
};

export default SliderComponent;
