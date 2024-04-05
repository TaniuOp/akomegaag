import React from 'react';
import './Services.css'; // Assuming you have a CSS file for styling

const Services: React.FC = () => {
  return (
    <div className='grid-container'>
      <div className='grid-item image'>
        {/* Image goes here */}
        <img src='your-image-src.jpg' alt='Your Image' />
      </div>
      <div className='grid-item text'>
        {/* Text content goes here */}
        <p>This is some text in the middle</p>
      </div>
      <div className='grid-item'></div>
      <div className='grid-item'></div>
      <div className='grid-item'></div>
      <div className='grid-item'></div>
    </div>
  );
};

export default Services;
