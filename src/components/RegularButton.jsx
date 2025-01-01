import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function RegularButton({ text, color, bgcolor, width, height, to }) {
  // State to track whether the button is hovered
  const [isHovered, setIsHovered] = useState(false);

  // Conditional class or style based on hover state
  const hoverClass = isHovered ? `${color}-background ${bgcolor}-corner`: `${bgcolor}-background`;
  const textColorClass = isHovered ? `${bgcolor}-text` : `${color}-text`;
  const paragraphSize = Number(width / 7.5);
  const paragraphcss = `centered-text roboto-bold`;

  // Handle mouse enter and leave
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const navigate = useNavigate()
    
  function handleClick() {
    let navigation = `/` + to;
    navigate(navigation);
  }


  return (
      <div
        onClick={handleClick}
        className={`${textColorClass} ${hoverClass} rounded-border underlined centered-text button`}
        style={{ width: width, height: height }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={paragraphcss} style={{ fontSize: paragraphSize }}>
          {text}
        </div>
      </div>

  );
}