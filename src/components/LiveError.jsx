import React, { useState } from 'react';
import { database } from '../data/ChurchDatabase';


export default function LiveError() {

  const [isHovered, setIsHovered] = useState(false);

  const youtubeLink  = 'https://www.youtube.com/@heimchurch3540';

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);  

  const hoverClass = isHovered ? 'white-background red-corner red-text': 'red-background white-text'

  async function handleClick() {
    window.open(youtubeLink, '_blank');
  }

  return (
    <div className='live-error'>
        <div className='live-error-title inter bold'>{database.watchlive.upcoming['live-error-message']}</div>
        <div>
            <div
              onClick={handleClick}
              className={`${hoverClass} rounded-border underlined centered-text button`}
              style={{ width: '130px', height: '50px' }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className='centered-text roboto-bold' style={{ fontSize: '23px'}}>
                Youtube
              </div>
            </div>
        </div>
    </div>
  )
}
