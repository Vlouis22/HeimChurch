import React from 'react'
import { FaInstagram } from "react-icons/fa6";


export default function Instagram({color, size}) {

  let fontSize = size + 'px';
  const instagramLink = 'https://www.instagram.com/heim_church/?igsh=N3dqOGN6NXFkYWc%3D';


  return (
    <div>
      <a href={instagramLink} target='blank' style={{textDecoration: 'none', color: color? color :'black', margin: '7px', fontSize: size ? fontSize: null}}>
          <FaInstagram/>
      </a>
    </div>

  )
}
