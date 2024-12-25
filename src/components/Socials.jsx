import React from 'react'
import Facebook from './Facebook'
import Youtube from './Youtube'
import Instagram from './Instagram'

export default function Socials({color, size}) {
  return (
    <div className='socials-containers'>
        <Youtube color={color} size={size}/>
        <Instagram color={color} size={size}/>
        <Facebook color={color} size={size}/>
    </div>
  )
}
