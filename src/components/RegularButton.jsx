import React, { useState } from 'react';

export default function RegularButton({ text, color, bgcolor, width, height }) {
  // State to track whether the button is hovered
  const [isHovered, setIsHovered] = useState(false);

  // Conditional class or style based on hover state
  const hoverClass = isHovered ? `${color}-background` : `${bgcolor}-background`;
  const textColorClass = isHovered ? `${bgcolor}-text` : `${color}-text`;
  const paragraphSize = Number(width / 7.5);
  const paragraphcss = `centered-text roboto-bold`;

  // Handle mouse enter and leave
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div
      className={`${textColorClass} ${hoverClass} rounded-border underlined centered-text`}
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