import React from 'react';
import './paragraph.css';

const Paragraph = ({ paragraph, textColor }) => {
  const paragraphStyle = {
    color: textColor || 'black',
  };

  return (
    <div className="paragraph" style={paragraphStyle}>
      <p>{paragraph}</p>
    </div>
  );
};

export default Paragraph;
