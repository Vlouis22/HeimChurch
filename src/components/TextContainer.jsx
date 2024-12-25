import React from 'react'

export default function TextContainer({title, description, bgColor}) {
  return (
    <div className='text-container white-background black-text unshrinkable'>
        <div className='bold' style={{fontSize: '22px', paddingBottom: '5px'}}>{title}</div>
        <div>{description}</div>
    </div>
  )
}
