import React from 'react'
import Facebook from './Facebook'
import Youtube from './Youtube'
import Instagram from './Instagram'

export default function Socials({color, size, blackIcon}) {
  return (
    <div className='socials-containers'>
        <Youtube color={color} size={size} blackIcon={blackIcon}/>
        <Instagram color={color} size={size}/>
        <Facebook color={color} size={size} blackIcon={blackIcon}/>
    </div>
  )
}
