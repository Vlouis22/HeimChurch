import React from 'react'
import { SlSocialYoutube } from "react-icons/sl";

export default function Youtube({color, size}) {

  let fontSize = size + 'px';
  const youtubeLink  = 'https://www.youtube.com/@heimchurch3540';

  return (
    <a href={youtubeLink} target='blank' style={{textDecoration: 'none', color: color? color :'black', margin: '7px', fontSize: size ? fontSize: null}}> 
        <SlSocialYoutube />
    </a>
  )
}
