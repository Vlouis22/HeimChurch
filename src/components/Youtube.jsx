import React from 'react'
import { SlSocialYoutube } from "react-icons/sl";
import { FaYoutube } from "react-icons/fa";

export default function Youtube({color, size, blackIcon}) {

  let fontSize = size + 'px';
  const youtubeLink  = 'https://www.youtube.com/@heimchurch3540';

  return (
    <span>
    <a 
      href={youtubeLink} 
      target='blank' 
      style={{textDecoration: 'none', color: color? color :'black', margin: '7px', fontSize: size ? fontSize: null}}
      aria-label='HEIM Church Youtube'
      > 
      {blackIcon ? <FaYoutube/> : <SlSocialYoutube />}
    </a>
    </span>
  )
}
